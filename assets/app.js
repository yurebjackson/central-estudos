(() => {
  "use strict";

  const config = window.APP_CONFIG;
  const content = window.STUDY_CONTENT;
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

  if (!window.supabase || !config?.SUPABASE_URL || !config?.SUPABASE_PUBLISHABLE_KEY) {
    document.body.innerHTML = '<main style="padding:40px;font-family:Arial"><h1>Configuração incompleta</h1><p>Verifique a conexão com o Supabase e tente novamente.</p></main>';
    return;
  }

  const db = window.supabase.createClient(config.SUPABASE_URL, config.SUPABASE_PUBLISHABLE_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
  });

  const state = {
    mode: "login",
    session: null,
    completedDays: new Set(),
    results: [],
    flashIndex: 0,
    flashFlipped: false,
    knownCards: new Set(),
    quizQuestions: [],
    timerSeconds: 25 * 60,
    timerRunning: false,
    timerHandle: null,
    notesHandle: null
  };

  let toastHandle;

  function showToast(message, type = "") {
    const toast = qs("#toast");
    toast.textContent = message;
    toast.className = `toast show ${type}`.trim();
    clearTimeout(toastHandle);
    toastHandle = setTimeout(() => { toast.className = "toast"; }, 3200);
  }

  function humanError(error) {
    const message = error?.message || String(error || "Erro desconhecido");
    const translations = [
      [/invalid login credentials/i, "E-mail ou senha incorretos."],
      [/email not confirmed/i, "Confirme seu e-mail antes de entrar."],
      [/user already registered/i, "Já existe uma conta com este e-mail."],
      [/password should be at least/i, "A senha precisa ter pelo menos 6 caracteres."],
      [/unable to validate email/i, "Digite um e-mail válido."],
      [/failed to fetch|network/i, "Não foi possível conectar. Verifique sua internet."],
      [/row-level security|permission denied/i, "O banco bloqueou a operação. Confira o SQL e as políticas RLS."],
      [/rate limit/i, "Muitas tentativas. Aguarde um pouco e tente novamente."]
    ];
    const found = translations.find(([pattern]) => pattern.test(message));
    return found ? found[1] : message;
  }

  function setSync(status, text) {
    const dot = qs("#syncDot");
    dot.className = `sync-dot ${status === "pending" || status === "error" ? status : ""}`.trim();
    qs("#syncText").textContent = text || (status === "pending" ? "Salvando..." : status === "error" ? "Falha ao sincronizar" : "Sincronizado");
  }

  function setAuthMessage(message, success = false) {
    const el = qs("#authMessage");
    el.textContent = message;
    el.className = `form-message${success ? " success" : ""}`;
  }

  function setAuthMode(mode) {
    state.mode = mode;
    const signup = mode === "signup";
    qs("#nameField").classList.toggle("hidden", !signup);
    qs("#formTitle").textContent = signup ? "Crie sua conta" : "Entre na sua conta";
    qs("#formDescription").textContent = signup ? "Seu progresso ficará salvo e disponível em outros dispositivos." : "Continue do ponto em que parou, em qualquer dispositivo.";
    qs("#authSubmit").textContent = signup ? "Criar conta" : "Entrar";
    qs("#switchPrompt").textContent = signup ? "Já possui uma conta?" : "Ainda não possui conta?";
    qs("#switchMode").textContent = signup ? "Entrar" : "Criar conta";
    qs("#password").autocomplete = signup ? "new-password" : "current-password";
    qs("#forgotPassword").classList.toggle("hidden", signup);
    setAuthMessage("");
  }

  async function handleAuthSubmit(event) {
    event.preventDefault();
    const email = qs("#email").value.trim();
    const password = qs("#password").value;
    const name = qs("#displayName").value.trim();
    const button = qs("#authSubmit");

    if (!email || !password || (state.mode === "signup" && !name)) {
      setAuthMessage("Preencha todos os campos para continuar.");
      return;
    }
    if (password.length < 6) {
      setAuthMessage("A senha precisa ter pelo menos 6 caracteres.");
      return;
    }

    button.disabled = true;
    button.textContent = state.mode === "signup" ? "Criando..." : "Entrando...";
    setAuthMessage("");
    try {
      if (state.mode === "signup") {
        const redirectTo = `${location.origin}${location.pathname}`;
        const { data, error } = await db.auth.signUp({
          email,
          password,
          options: { data: { display_name: name }, emailRedirectTo: redirectTo }
        });
        if (error) throw error;
        if (!data.session) {
          setAuthMessage("Conta criada. Abra o e-mail de confirmação e clique no link para ativar.", true);
        } else {
          await openApp(data.session);
        }
      } else {
        const { data, error } = await db.auth.signInWithPassword({ email, password });
        if (error) throw error;
        await openApp(data.session);
      }
    } catch (error) {
      setAuthMessage(humanError(error));
    } finally {
      button.disabled = false;
      button.textContent = state.mode === "signup" ? "Criar conta" : "Entrar";
    }
  }

  async function resetPassword() {
    const email = qs("#email").value.trim();
    if (!email) {
      setAuthMessage("Digite seu e-mail primeiro e clique novamente em “Esqueci a senha”.");
      qs("#email").focus();
      return;
    }
    try {
      const redirectTo = `${location.origin}${location.pathname}`;
      const { error } = await db.auth.resetPasswordForEmail(email, { redirectTo });
      if (error) throw error;
      setAuthMessage("Enviamos as instruções de recuperação para o seu e-mail.", true);
    } catch (error) {
      setAuthMessage(humanError(error));
    }
  }

  async function saveNewPassword(event) {
    event.preventDefault();
    const password = qs("#newPassword").value;
    const message = qs("#resetMessage");
    if (password.length < 6) {
      message.textContent = "A senha precisa ter pelo menos 6 caracteres.";
      return;
    }
    const button = qs('#resetForm button[type="submit"]');
    button.disabled = true;
    button.textContent = "Salvando...";
    try {
      const { error } = await db.auth.updateUser({ password });
      if (error) throw error;
      qs("#resetDialog").close();
      qs("#newPassword").value = "";
      message.textContent = "";
      showToast("Senha atualizada com sucesso.");
    } catch (error) {
      message.textContent = humanError(error);
    } finally {
      button.disabled = false;
      button.textContent = "Salvar nova senha";
    }
  }

  function userDisplayName() {
    const user = state.session?.user;
    return user?.user_metadata?.display_name?.trim() || user?.email?.split("@")[0] || "Estudante";
  }

  async function openApp(session) {
    if (!session) return showAuth();
    state.session = session;
    qs("#authView").classList.add("hidden");
    qs("#appView").classList.remove("hidden");
    const name = userDisplayName();
    qs("#pageTitle").textContent = `Bom estudo, ${name.split(" ")[0]}`;
    qs("#userMenuButton").textContent = name[0].toUpperCase();
    qs("#accountName").textContent = name;
    qs("#accountEmail").textContent = session.user.email || "";
    loadKnownCards();
    await loadRemoteData();
  }

  function showAuth() {
    state.session = null;
    qs("#appView").classList.add("hidden");
    qs("#authView").classList.remove("hidden");
  }

  async function loadRemoteData() {
    setSync("pending", "Carregando...");
    try {
      const [progressResponse, notesResponse, resultsResponse] = await Promise.all([
        db.from("study_progress").select("day, completed"),
        db.from("study_notes").select("content").maybeSingle(),
        db.from("quiz_results").select("id, score, total, percentage, created_at").order("created_at", { ascending: false }).limit(20)
      ]);
      const error = progressResponse.error || notesResponse.error || resultsResponse.error;
      if (error) throw error;

      state.completedDays = new Set((progressResponse.data || []).filter(row => row.completed).map(row => Number(row.day)));
      state.results = resultsResponse.data || [];
      qs("#notesArea").value = notesResponse.data?.content || "";
      renderProgress();
      renderResults();
      setSync("ok");
    } catch (error) {
      setSync("error");
      showToast(humanError(error), "error");
    }
  }

  function renderPlan() {
    qs("#studyPlan").innerHTML = content.plan.map(item => `
      <article class="plan-card ${state.completedDays.has(item.day) ? "done" : ""}" data-day="${item.day}">
        <span class="day-number">${item.day}</span>
        <div><h3>${item.title}</h3><p>${item.task}</p></div>
        <button class="check-button" type="button" aria-label="${state.completedDays.has(item.day) ? "Desmarcar" : "Marcar"} dia ${item.day} como concluído">✓</button>
      </article>`).join("");
  }

  async function toggleDay(day) {
    const wasDone = state.completedDays.has(day);
    if (wasDone) state.completedDays.delete(day); else state.completedDays.add(day);
    renderProgress();
    setSync("pending");
    try {
      const { error } = await db.from("study_progress").upsert({
        user_id: state.session.user.id,
        day,
        completed: !wasDone,
        updated_at: new Date().toISOString()
      }, { onConflict: "user_id,day" });
      if (error) throw error;
      setSync("ok");
      showToast(wasDone ? `Dia ${day} desmarcado.` : `Dia ${day} concluído. Muito bem!`);
    } catch (error) {
      if (wasDone) state.completedDays.add(day); else state.completedDays.delete(day);
      renderProgress();
      setSync("error");
      showToast(humanError(error), "error");
    }
  }

  function renderProgress() {
    const done = state.completedDays.size;
    const percent = Math.round((done / content.plan.length) * 100);
    qs("#heroPercent").textContent = `${percent}%`;
    qs("#progressRing").style.setProperty("--p", percent);
    qs("#daysStat").textContent = `${done}/${content.plan.length}`;
    qs("#planPercent").textContent = `${percent}%`;
    qs("#progressLine").style.width = `${percent}%`;
    qs("#progressCaption").textContent = `${done} de ${content.plan.length} etapas concluídas`;
    const next = content.plan.find(item => !state.completedDays.has(item.day));
    qs("#nextStudyTitle").textContent = next ? `Dia ${next.day} — ${next.title}` : "Plano concluído";
    qs("#nextStudyDescription").textContent = next ? next.task : "Agora concentre-se em simulados e revisão dos erros.";
    renderPlan();
  }

  function renderSummaries() {
    qs("#summaryList").innerHTML = content.summaries.map((item, index) => `
      <article class="summary-item ${index === 0 ? "open" : ""}">
        <button class="summary-toggle" type="button" aria-expanded="${index === 0}">
          <span class="summary-index">${String(index + 1).padStart(2, "0")}</span>
          <span><strong>${item.title}</strong><br><small>${item.subtitle}</small></span>
          <span class="summary-arrow">⌄</span>
        </button>
        <div class="summary-body">${item.html}</div>
      </article>`).join("");
  }

  function loadKnownCards() {
    const key = `central-estudos-known-${state.session?.user?.id || "guest"}`;
    try { state.knownCards = new Set(JSON.parse(localStorage.getItem(key) || "[]")); }
    catch { state.knownCards = new Set(); }
    renderFlashcard();
  }

  function saveKnownCards() {
    const key = `central-estudos-known-${state.session.user.id}`;
    localStorage.setItem(key, JSON.stringify([...state.knownCards]));
  }

  function renderFlashcard() {
    const card = content.flashcards[state.flashIndex];
    const cardEl = qs("#flashCard");
    cardEl.classList.toggle("answer", state.flashFlipped);
    qs("#flashLabel").textContent = state.flashFlipped ? "Resposta" : "Pergunta";
    qs("#flashText").textContent = card[state.flashFlipped ? 1 : 0];
    cardEl.querySelector("small").textContent = state.flashFlipped ? "Toque para voltar à pergunta" : "Toque para ver a resposta";
    qs("#flashCounter").textContent = `${state.flashIndex + 1}/${content.flashcards.length}`;
    const known = state.knownCards.has(state.flashIndex);
    qs("#flashKnow").textContent = known ? "✓ Marcado como aprendido" : "Já sei este";
    qs("#flashMastery").textContent = `${state.knownCards.size} de ${content.flashcards.length} cartões marcados como aprendidos neste dispositivo.`;
  }

  function moveFlash(delta) {
    state.flashIndex = (state.flashIndex + delta + content.flashcards.length) % content.flashcards.length;
    state.flashFlipped = false;
    renderFlashcard();
  }

  function shuffleFlashcards() {
    let next = state.flashIndex;
    while (next === state.flashIndex && content.flashcards.length > 1) next = Math.floor(Math.random() * content.flashcards.length);
    state.flashIndex = next;
    state.flashFlipped = false;
    renderFlashcard();
  }

  function renderVideos() {
    qs("#videoGrid").innerHTML = content.videos.map((item, index) => `
      <article class="video-card">
        <div class="video-cover" style="filter:hue-rotate(${index * 9}deg)"><span>▶</span></div>
        <div class="video-content"><h3>${item.title}</h3><p>${item.description}</p><a class="video-link" href="https://www.youtube.com/results?search_query=${encodeURIComponent(item.query)}" target="_blank" rel="noopener">Pesquisar videoaulas ↗</a></div>
      </article>`).join("");
  }

  function sampleQuestions() {
    return [...content.quiz].sort(() => Math.random() - .5).slice(0, 20);
  }

  function startQuiz() {
    state.quizQuestions = sampleQuestions();
    qs("#quizStart").classList.add("hidden");
    qs("#quizResult").classList.add("hidden");
    qs("#quizForm").classList.remove("hidden");
    qs("#quizActions").classList.remove("hidden");
    qs("#quizProgress").textContent = "0/20";
    qs("#quizForm").innerHTML = state.quizQuestions.map((item, index) => `
      <article class="question-card" data-question="${index}">
        <span class="question-number">Questão ${index + 1}</span>
        <p class="question-text">${item.q}</p>
        <div class="options">${item.o.map((option, optionIndex) => `<label class="option"><input type="radio" name="q${index}" value="${optionIndex}"><span>${option}</span></label>`).join("")}</div>
      </article>`).join("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function updateQuizProgress() {
    const answered = new Set(qsa('#quizForm input:checked').map(input => input.name)).size;
    qs("#quizProgress").textContent = `${answered}/20`;
  }

  async function finishQuiz() {
    const answers = state.quizQuestions.map((_, index) => qs(`input[name="q${index}"]:checked`));
    const missing = answers.filter(Boolean).length < state.quizQuestions.length;
    if (missing && !confirm("Você ainda deixou questões sem resposta. Deseja corrigir mesmo assim?")) return;

    let score = 0;
    state.quizQuestions.forEach((item, index) => {
      const card = qs(`[data-question="${index}"]`);
      const selected = answers[index] ? Number(answers[index].value) : -1;
      const correct = selected === item.a;
      if (correct) score++;
      card.classList.add(correct ? "correct" : "wrong");
      qsa("input", card).forEach(input => { input.disabled = true; });
      const explanation = document.createElement("p");
      explanation.className = "explanation";
      explanation.innerHTML = `<strong>${correct ? "Correto." : `Resposta correta: ${item.o[item.a]}.`}</strong> ${item.e}`;
      card.appendChild(explanation);
    });

    const percentage = Math.round((score / state.quizQuestions.length) * 100);
    qs("#quizActions").classList.add("hidden");
    const result = qs("#quizResult");
    result.classList.remove("hidden");
    result.innerHTML = `<p class="eyebrow">Resultado do simulado</p><strong>${percentage}%</strong><p>Você acertou ${score} de ${state.quizQuestions.length} questões.</p><button id="retryQuiz" class="button light" type="button">Fazer outro simulado</button>`;
    qs("#retryQuiz").addEventListener("click", startQuiz);
    result.scrollIntoView({ behavior: "smooth", block: "center" });

    setSync("pending");
    try {
      const { data, error } = await db.from("quiz_results").insert({
        user_id: state.session.user.id,
        score,
        total: state.quizQuestions.length,
        percentage
      }).select("id, score, total, percentage, created_at").single();
      if (error) throw error;
      state.results.unshift(data);
      renderResults();
      setSync("ok");
      showToast("Resultado salvo no seu histórico.");
    } catch (error) {
      setSync("error");
      showToast(humanError(error), "error");
    }
  }

  function renderResults() {
    const best = state.results.length ? Math.max(...state.results.map(item => item.percentage)) : null;
    qs("#bestStat").textContent = best === null ? "—" : `${best}%`;
    const list = qs("#recentResults");
    if (!state.results.length) {
      list.className = "results-list empty-state";
      list.textContent = "Você ainda não realizou nenhum simulado.";
      return;
    }
    list.className = "results-list";
    list.innerHTML = state.results.slice(0, 5).map((item, index) => `
      <div class="result-row"><span>Simulado ${state.results.length - index}</span><span class="result-score">${item.percentage}% · ${item.score}/${item.total}</span><time class="result-date">${new Intl.DateTimeFormat("pt-BR", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(item.created_at))}</time></div>`).join("");
  }

  function scheduleNotesSave() {
    qs("#notesStatus").textContent = "Digitando...";
    clearTimeout(state.notesHandle);
    state.notesHandle = setTimeout(saveNotes, 900);
  }

  async function saveNotes() {
    qs("#notesStatus").textContent = "Salvando...";
    setSync("pending");
    try {
      const { error } = await db.from("study_notes").upsert({
        user_id: state.session.user.id,
        content: qs("#notesArea").value,
        updated_at: new Date().toISOString()
      }, { onConflict: "user_id" });
      if (error) throw error;
      qs("#notesStatus").textContent = "Tudo salvo";
      setSync("ok");
    } catch (error) {
      qs("#notesStatus").textContent = "Não foi possível salvar";
      setSync("error");
      showToast(humanError(error), "error");
    }
  }

  const pageTitles = {
    inicio: ["Visão geral", null],
    plano: ["Sua rotina", "Plano de estudo"],
    resumos: ["Conteúdo", "Resumos da disciplina"],
    flashcards: ["Revisão ativa", "Flashcards"],
    simulado: ["Avaliação", "Simulado"],
    videos: ["Aprofundamento", "Videoaulas"],
    anotacoes: ["Seu material", "Anotações"]
  };

  function navigate(page) {
    qsa(".page").forEach(el => el.classList.toggle("active", el.id === `page-${page}`));
    qsa(".nav-item[data-page]").forEach(el => el.classList.toggle("active", el.dataset.page === page));
    qs("#pageKicker").textContent = pageTitles[page][0];
    qs("#pageTitle").textContent = pageTitles[page][1] || `Bom estudo, ${userDisplayName().split(" ")[0]}`;
    qs(".sidebar").classList.remove("open");
    qs("#accountPopover").classList.add("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function formatTimer() {
    const min = String(Math.floor(state.timerSeconds / 60)).padStart(2, "0");
    const sec = String(state.timerSeconds % 60).padStart(2, "0");
    const value = `${min}:${sec}`;
    qs("#focusTimer").textContent = value;
    qs("#miniTimer").textContent = value;
    qs("#timerStart").textContent = state.timerRunning ? "Pausar" : "Iniciar foco";
    qs("#miniTimerToggle").textContent = state.timerRunning ? "Pausar" : "Iniciar";
  }

  function toggleTimer() {
    state.timerRunning = !state.timerRunning;
    clearInterval(state.timerHandle);
    if (state.timerRunning) {
      state.timerHandle = setInterval(() => {
        state.timerSeconds--;
        if (state.timerSeconds <= 0) {
          clearInterval(state.timerHandle);
          state.timerRunning = false;
          state.timerSeconds = 5 * 60;
          showToast("Foco concluído. Faça uma pausa de 5 minutos!");
        }
        formatTimer();
      }, 1000);
    }
    formatTimer();
  }

  function resetTimer() {
    clearInterval(state.timerHandle);
    state.timerRunning = false;
    state.timerSeconds = 25 * 60;
    formatTimer();
  }

  function bindEvents() {
    qs("#authForm").addEventListener("submit", handleAuthSubmit);
    qs("#switchMode").addEventListener("click", () => setAuthMode(state.mode === "login" ? "signup" : "login"));
    qs("#forgotPassword").addEventListener("click", resetPassword);
    qs("#togglePassword").addEventListener("click", () => {
      const input = qs("#password");
      input.type = input.type === "password" ? "text" : "password";
      qs("#togglePassword").textContent = input.type === "password" ? "Mostrar" : "Ocultar";
    });
    qs("#resetForm").addEventListener("submit", saveNewPassword);
    qs("#cancelReset").addEventListener("click", () => qs("#resetDialog").close());
    qs("#logoutButton").addEventListener("click", async () => {
      await db.auth.signOut({ scope: "local" });
      showAuth();
    });
    qs("#mainNav").addEventListener("click", event => {
      const button = event.target.closest("[data-page]");
      if (button) navigate(button.dataset.page);
    });
    document.addEventListener("click", event => {
      const go = event.target.closest("[data-go]");
      if (go) navigate(go.dataset.go);
    });
    qs("#menuButton").addEventListener("click", () => qs(".sidebar").classList.toggle("open"));
    qs("#userMenuButton").addEventListener("click", () => qs("#accountPopover").classList.toggle("hidden"));
    qs("#studyPlan").addEventListener("click", event => {
      const button = event.target.closest(".check-button");
      if (button) toggleDay(Number(button.closest(".plan-card").dataset.day));
    });
    qs("#summaryList").addEventListener("click", event => {
      const button = event.target.closest(".summary-toggle");
      if (!button) return;
      const item = button.closest(".summary-item");
      item.classList.toggle("open");
      button.setAttribute("aria-expanded", item.classList.contains("open"));
    });
    qs("#flashCard").addEventListener("click", () => { state.flashFlipped = !state.flashFlipped; renderFlashcard(); });
    qs("#flashPrev").addEventListener("click", () => moveFlash(-1));
    qs("#flashNext").addEventListener("click", () => moveFlash(1));
    qs("#flashShuffle").addEventListener("click", shuffleFlashcards);
    qs("#flashKnow").addEventListener("click", () => {
      if (state.knownCards.has(state.flashIndex)) state.knownCards.delete(state.flashIndex); else state.knownCards.add(state.flashIndex);
      saveKnownCards();
      renderFlashcard();
    });
    qs("#startQuiz").addEventListener("click", startQuiz);
    qs("#quizForm").addEventListener("change", updateQuizProgress);
    qs("#finishQuiz").addEventListener("click", finishQuiz);
    qs("#notesArea").addEventListener("input", scheduleNotesSave);
    qs("#timerStart").addEventListener("click", toggleTimer);
    qs("#miniTimerToggle").addEventListener("click", toggleTimer);
    qs("#timerReset").addEventListener("click", resetTimer);
  }

  async function init() {
    renderPlan();
    renderSummaries();
    renderVideos();
    renderFlashcard();
    renderProgress();
    formatTimer();
    bindEvents();

    const { data, error } = await db.auth.getSession();
    if (error) setAuthMessage(humanError(error));
    if (data?.session) await openApp(data.session); else showAuth();

    db.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") showAuth();
      if (event === "PASSWORD_RECOVERY") qs("#resetDialog").showModal();
      if (event === "SIGNED_IN" && session && !state.session) openApp(session);
    });
  }

  init();
})();
