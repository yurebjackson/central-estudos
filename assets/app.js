
const STORAGE = {
  plan: "unifsa_study_plan_v2",
  notes: "unifsa_study_notes_v2",
  bestQuiz: "unifsa_best_quiz_v2"
};

const plan = [
  "Dia 1 — Cidadania, democracia e educação + 10 flashcards",
  "Dia 2 — Direitos humanos, inclusão, diversidade e justiça social",
  "Dia 3 — Desigualdades étnico-raciais + estudo de caso",
  "Dia 4 — Racismo, preconceito e discriminação + revisão dos dias 1–3",
  "Dia 5 — Introdução à ética: ética × moral + dilemas éticos",
  "Dia 6 — Ética profissional, social e política",
  "Dia 7 — Revisão geral da 1ª semana + simulado",
  "Dia 8 — Comunicação e negociação",
  "Dia 9 — Mediação de conflitos no contexto educacional",
  "Dia 10 — Ética no mundo digital e cidadania digital",
  "Dia 11 — Sustentabilidade e responsabilidade socioambiental",
  "Dia 12 — Agenda 2030 + papel da escola na formação cidadã",
  "Dia 13 — Simulado completo + revisar todos os erros",
  "Dia 14 — Revisão leve: conceitos-chave, flashcards e dúvidas"
];

const summaries = [
  {
    title:"1. Cidadania, democracia, educação e direitos humanos",
    key:"Cidadania envolve participação na vida social e política, exercício de direitos e cumprimento de deveres.",
    bullets:[
      "Democracia pressupõe participação, pluralidade e respeito às regras e direitos.",
      "Direitos humanos protegem a dignidade humana e orientam a defesa da igualdade, liberdade e não discriminação.",
      "A escola contribui para a formação cidadã ao promover participação, respeito, pensamento crítico, inclusão e justiça social."
    ]
  },
  {
    title:"2. Inclusão, diversidade, desigualdades étnico-raciais e justiça social",
    key:"Igualdade e equidade não são a mesma coisa: equidade considera desigualdades e necessidades para promover condições mais justas.",
    bullets:[
      "Reconhecer desigualdades étnico-raciais ajuda a compreender obstáculos históricos e sociais.",
      "Inclusão exige remover barreiras de acesso, participação e aprendizagem.",
      "Justiça social envolve combater exclusões e ampliar oportunidades e direitos."
    ]
  },
  {
    title:"3. Racismo, preconceito e discriminação",
    key:"Preconceito é julgamento prévio; discriminação é tratamento desigual; racismo produz ou sustenta hierarquias e desigualdades raciais.",
    bullets:[
      "A escola deve prevenir e enfrentar práticas discriminatórias.",
      "Práticas pedagógicas antirracistas valorizam diversidade, representação, respeito e análise crítica.",
      "O conteúdo do plano enfatiza o combate ao racismo e às diferentes formas de discriminação."
    ]
  },
  {
    title:"4. Introdução à ética: ética e moral",
    key:"Ética é reflexão crítica sobre valores e princípios; moral é o conjunto de normas, valores e costumes vividos por um grupo ou sociedade.",
    bullets:[
      "Dilemas éticos surgem quando valores ou deveres entram em conflito.",
      "A análise ética considera direitos, deveres, consequências, justiça e responsabilidade.",
      "Na educação, a ética orienta relações profissionais e responsabilidade com estudantes e comunidade."
    ]
  },
  {
    title:"5. Ética profissional, social e política",
    key:"A ética profissional envolve responsabilidade, respeito, integridade, justiça e avaliação dos impactos das decisões.",
    bullets:[
      "Ética profissional não é somente seguir regras.",
      "Ética social observa impactos das escolhas sobre convivência e bem comum.",
      "Ética política envolve responsabilidade pública, participação e respeito aos direitos."
    ]
  },
  {
    title:"6. Comunicação, negociação e mediação de conflitos",
    key:"Negociação busca solução entre interesses diferentes; mediação facilita o diálogo para que as próprias partes construam uma solução.",
    bullets:[
      "Escuta ativa, clareza e respeito reduzem a escalada do conflito.",
      "É útil separar pessoas do problema e identificar interesses reais.",
      "Na escola, a mediação pode transformar conflitos em oportunidade de diálogo e aprendizagem."
    ]
  },
  {
    title:"7. Ética no mundo digital e cidadania digital",
    key:"Cidadania digital é o uso responsável, crítico, seguro e respeitoso das tecnologias.",
    bullets:[
      "Temas relevantes: privacidade, exposição de dados, cyberbullying, desinformação e responsabilidade nas publicações.",
      "Antes de compartilhar conteúdo, é importante verificar fonte, contexto e possíveis danos.",
      "Responsabilidades éticas continuam válidas no ambiente digital."
    ]
  },
  {
    title:"8. Sustentabilidade, responsabilidade socioambiental e Agenda 2030",
    key:"Sustentabilidade integra dimensões social, econômica e ambiental.",
    bullets:[
      "A Agenda 2030 organiza objetivos de desenvolvimento sustentável em temas sociais, econômicos e ambientais.",
      "Na educação, sustentabilidade pode aparecer em projetos, hábitos institucionais e formação para responsabilidade coletiva.",
      "O plano destaca a escola na construção de práticas éticas, inclusivas e sustentáveis."
    ]
  }
];

const cards = [
  ["O que é cidadania?","Participação na vida social e política, com exercício de direitos e cumprimento de deveres."],
  ["Qual a relação entre democracia e cidadania?","A democracia depende da participação cidadã, do pluralismo e do respeito aos direitos."],
  ["O que são direitos humanos?","Direitos ligados à dignidade humana, voltados à proteção da liberdade, igualdade e não discriminação."],
  ["Igualdade e equidade são iguais?","Não. Igualdade busca tratamento igual; equidade considera diferenças e desigualdades para produzir condições mais justas."],
  ["Preconceito, discriminação e racismo: qual a diferença?","Preconceito é julgamento prévio; discriminação é tratamento desigual; racismo sustenta desigualdades raciais."],
  ["O que é ética?","Reflexão crítica sobre valores, princípios e critérios que orientam decisões e condutas."],
  ["O que é moral?","Conjunto de normas, valores e costumes compartilhados por grupos ou sociedades."],
  ["O que é um dilema ético?","Situação em que valores, deveres ou interesses entram em conflito e exigem decisão justificada."],
  ["O que caracteriza ética profissional?","Responsabilidade, respeito, integridade, justiça e avaliação dos impactos das decisões."],
  ["O que é negociação?","Processo de busca de acordo ou solução possível entre interesses diferentes."],
  ["O que é mediação?","Facilitação do diálogo entre partes em conflito para que construam uma solução."],
  ["O que é escuta ativa?","Ouvir com atenção para compreender conteúdo, interesses e sentimentos, confirmando o entendimento."],
  ["O que é cidadania digital?","Uso responsável, crítico, seguro e respeitoso das tecnologias digitais."],
  ["Quais riscos éticos existem no mundo digital?","Exposição de dados, cyberbullying, desinformação e compartilhamento irresponsável."],
  ["O que é sustentabilidade?","Integração das dimensões social, econômica e ambiental visando necessidades presentes e futuras."],
  ["O que é Agenda 2030?","Agenda internacional estruturada em Objetivos de Desenvolvimento Sustentável."],
  ["Qual o papel da escola na formação cidadã?","Promover participação, pensamento crítico, inclusão, respeito, justiça social e responsabilidade."],
  ["Qual estratégia ajuda a resolver conflitos?","Separar pessoas do problema, ouvir interesses, comunicar com respeito e buscar solução colaborativa."]
];

const quiz = [
  {q:"1. A cidadania está mais relacionada a:",o:["Apenas votar em eleições","Participar da vida social e política, exercendo direitos e deveres","Somente conhecer as leis","Evitar conflitos sociais"],a:1},
  {q:"2. A equidade diferencia-se da igualdade porque:",o:["Elimina direitos universais","Considera desigualdades e necessidades para promover condições mais justas","Significa tratar todos sempre de forma idêntica","Aplica-se apenas ao trabalho"],a:1},
  {q:"3. Qual alternativa representa melhor um direito humano?",o:["Um privilégio de determinada profissão","Uma proteção ligada à dignidade de todas as pessoas","Uma regra opcional da escola","Uma vantagem concedida por amizade"],a:1},
  {q:"4. Preconceito é:",o:["A prática concreta de tratamento desigual","Um julgamento ou atitude prévia sobre pessoas ou grupos","Uma técnica de mediação","Uma política de inclusão"],a:1},
  {q:"5. Discriminação é:",o:["Tratamento desigual ou exclusão baseada em determinada característica","Apenas uma opinião privada sem efeito","Sinônimo de negociação","Forma de sustentabilidade"],a:0},
  {q:"6. Ética pode ser entendida como:",o:["Reflexão crítica sobre valores e condutas","Qualquer costume social, sem reflexão","Apenas cumprimento de ordens","Somente leis escritas"],a:0},
  {q:"7. Moral refere-se principalmente a:",o:["Normas, valores e costumes praticados em um grupo ou sociedade","Um método de negociação","Uma lei ambiental","Um recurso tecnológico"],a:0},
  {q:"8. Em um dilema ético:",o:["Não existe conflito entre valores","A decisão é sempre óbvia","Valores ou deveres podem entrar em conflito","A única solução é evitar decidir"],a:2},
  {q:"9. Uma conduta profissional ética envolve:",o:["Favorecer pessoas conhecidas","Ignorar impactos das decisões","Responsabilidade, respeito e justiça","Agir apenas por interesse pessoal"],a:2},
  {q:"10. Negociação é melhor definida como:",o:["Imposição de uma decisão","Busca de solução entre interesses diferentes","Aplicação de punição automática","Abandono do diálogo"],a:1},
  {q:"11. Na mediação de conflitos, o mediador deve:",o:["Decidir sozinho quem tem razão","Facilitar o diálogo entre as partes","Aumentar a disputa","Representar somente uma parte"],a:1},
  {q:"12. Escuta ativa significa:",o:["Esperar sua vez de falar","Ouvir para compreender e confirmar o entendimento","Ignorar sentimentos","Interromper para acelerar a conversa"],a:1},
  {q:"13. Cidadania digital envolve:",o:["Uso responsável, crítico e seguro das tecnologias","Compartilhar tudo rapidamente","Evitar qualquer tecnologia","Usar contas anônimas"],a:0},
  {q:"14. Antes de compartilhar informação online, uma atitude ética é:",o:["Verificar fonte e contexto","Compartilhar primeiro e conferir depois","Confiar apenas no título","Ignorar possíveis danos"],a:0},
  {q:"15. Sustentabilidade integra:",o:["Somente meio ambiente","Somente economia","Dimensões social, econômica e ambiental","Apenas tecnologia"],a:2},
  {q:"16. A Agenda 2030 está relacionada a:",o:["Objetivos de Desenvolvimento Sustentável","Regras de trânsito","Normas de uma escola específica","Código profissional único"],a:0},
  {q:"17. Uma prática escolar inclusiva busca:",o:["Remover barreiras de participação e aprendizagem","Separar alunos por diferenças","Evitar diversidade","Aplicar exatamente o mesmo recurso em qualquer situação"],a:0},
  {q:"18. Uma postura antirracista na escola envolve:",o:["Ignorar o tema para evitar conflitos","Reconhecer desigualdades e enfrentar práticas discriminatórias","Tratar racismo como opinião pessoal","Abordar o assunto apenas quando houver denúncia"],a:1},
  {q:"19. Ao mediar um conflito escolar, é adequado:",o:["Atacar a pessoa","Separar pessoas do problema e identificar interesses","Aumentar a pressão emocional","Evitar ouvir as partes"],a:1},
  {q:"20. O papel da escola na formação cidadã inclui:",o:["Somente transmitir conteúdo","Promover participação, criticidade, inclusão e responsabilidade","Evitar temas sociais","Substituir totalmente a família e a comunidade"],a:1}
];

const videos = [
  ["Cidadania, democracia e direitos humanos","https://www.youtube.com/results?search_query=cidadania+democracia+direitos+humanos+educa%C3%A7%C3%A3o"],
  ["Ética e moral — diferenças e exemplos","https://www.youtube.com/results?search_query=%C3%A9tica+e+moral+diferen%C3%A7a+aula"],
  ["Relações étnico-raciais na educação","https://www.youtube.com/results?search_query=rela%C3%A7%C3%B5es+%C3%A9tnico+raciais+educa%C3%A7%C3%A3o+aula"],
  ["Racismo, preconceito e discriminação","https://www.youtube.com/results?search_query=racismo+preconceito+discrimina%C3%A7%C3%A3o+educa%C3%A7%C3%A3o"],
  ["Negociação e mediação de conflitos na escola","https://www.youtube.com/results?search_query=media%C3%A7%C3%A3o+de+conflitos+na+escola+negocia%C3%A7%C3%A3o"],
  ["Ética e cidadania digital","https://www.youtube.com/results?search_query=%C3%A9tica+cidadania+digital+aula"],
  ["Agenda 2030 e ODS","https://www.youtube.com/results?search_query=Agenda+2030+ODS+ONU+portugu%C3%AAs"],
  ["Sustentabilidade e educação","https://www.youtube.com/results?search_query=sustentabilidade+educa%C3%A7%C3%A3o+aula"]
];

function scrollToSection(id){
  document.getElementById(id)?.scrollIntoView({behavior:"smooth", block:"start"});
}

document.querySelectorAll("[data-scroll]").forEach(btn=>{
  btn.addEventListener("click",()=>scrollToSection(btn.dataset.scroll));
});

function renderPlan(){
  const list = document.getElementById("planList");
  const state = JSON.parse(localStorage.getItem(STORAGE.plan) || "[]");
  list.innerHTML = "";
  plan.forEach((item,i)=>{
    const [title,...rest] = item.split(" — ");
    const checked = !!state[i];
    const row = document.createElement("article");
    row.className = "card day" + (checked ? " done" : "");
    row.innerHTML = `
      <input type="checkbox" ${checked ? "checked" : ""} aria-label="Marcar ${title} como concluído">
      <div class="day-copy">
        <div class="day-title">${title}</div>
        <div>${rest.join(" — ")}</div>
      </div>`;
    row.querySelector("input").addEventListener("change",e=>{
      const current = JSON.parse(localStorage.getItem(STORAGE.plan) || "[]");
      current[i] = e.target.checked;
      localStorage.setItem(STORAGE.plan, JSON.stringify(current));
      renderPlan();
    });
    list.appendChild(row);
  });
  updateDashboard();
}

function updateDashboard(){
  const state = JSON.parse(localStorage.getItem(STORAGE.plan) || "[]");
  const done = plan.filter((_,i)=>state[i]).length;
  const pct = Math.round((done/plan.length)*100);
  document.getElementById("progressPct").textContent = pct + "%";
  document.getElementById("progressBar").style.width = pct + "%";
  document.getElementById("daysDone").textContent = `${done}/${plan.length}`;
  const best = localStorage.getItem(STORAGE.bestQuiz);
  document.getElementById("bestQuiz").textContent = best ? best + "%" : "—";
}

function renderSummaries(){
  const host = document.getElementById("summaryList");
  host.innerHTML = "";
  summaries.forEach((s,idx)=>{
    const d = document.createElement("details");
    d.className = "card summary";
    if(idx === 0) d.open = true;
    d.innerHTML = `
      <summary>${s.title}</summary>
      <div class="summary-body">
        <div class="key"><strong>Ideia central:</strong> ${s.key}</div>
        <ul>${s.bullets.map(x=>`<li>${x}</li>`).join("")}</ul>
      </div>`;
    host.appendChild(d);
  });
}

let cardIndex = 0;
let cardAnswer = false;

function renderCard(){
  const el = document.getElementById("flashCard");
  el.textContent = cardAnswer ? cards[cardIndex][1] : cards[cardIndex][0];
  document.getElementById("flashProgress").textContent = `${cardIndex+1}/${cards.length}`;
}

document.getElementById("flashCard").addEventListener("click",()=>{
  cardAnswer = !cardAnswer; renderCard();
});
document.getElementById("flashNext").addEventListener("click",()=>{
  cardIndex = (cardIndex+1)%cards.length; cardAnswer = false; renderCard();
});
document.getElementById("flashPrev").addEventListener("click",()=>{
  cardIndex = (cardIndex-1+cards.length)%cards.length; cardAnswer = false; renderCard();
});

function renderQuiz(){
  const form = document.getElementById("quizForm");
  form.innerHTML = "";
  quiz.forEach((x,i)=>{
    const div = document.createElement("div");
    div.className = "quiz-q";
    div.innerHTML = `<b>${x.q}</b>` + x.o.map((opt,j)=>
      `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label>`
    ).join("");
    form.appendChild(div);
  });
}

document.getElementById("quizGrade").addEventListener("click",()=>{
  let score = 0, missing = 0, wrong = [];
  quiz.forEach((x,i)=>{
    const choice = document.querySelector(`input[name="q${i}"]:checked`);
    if(!choice){ missing++; return; }
    if(Number(choice.value) === x.a) score++;
    else wrong.push(i+1);
  });

  const pct = Math.round((score/quiz.length)*100);
  document.getElementById("quizResult").textContent = `Resultado: ${score}/${quiz.length} — ${pct}%`;
  document.getElementById("quizFeedback").textContent =
    `${missing ? `Sem resposta: ${missing}. ` : ""}Questões erradas: ${wrong.length ? wrong.join(", ") : "nenhuma"}.`;

  const best = Number(localStorage.getItem(STORAGE.bestQuiz) || 0);
  if(pct > best) localStorage.setItem(STORAGE.bestQuiz, String(pct));
  updateDashboard();
});

document.getElementById("quizReset").addEventListener("click",()=>{
  document.getElementById("quizForm").reset();
  document.getElementById("quizResult").textContent = "";
  document.getElementById("quizFeedback").textContent = "";
});

function renderVideos(){
  const host = document.getElementById("videoList");
  host.innerHTML = "";
  videos.forEach(([name,url])=>{
    const row = document.createElement("div");
    row.className = "video-row";
    row.innerHTML = `<span>${name}</span><a href="${url}" target="_blank" rel="noopener">Abrir no YouTube →</a>`;
    host.appendChild(row);
  });
}

const notes = document.getElementById("notes");
notes.value = localStorage.getItem(STORAGE.notes) || "";
document.getElementById("saveNotes").addEventListener("click",()=>{
  localStorage.setItem(STORAGE.notes, notes.value);
  alert("Anotações salvas neste navegador.");
});

let remaining = 25*60;
let timerId = null;
function drawTimer(){
  const m = Math.floor(remaining/60);
  const s = remaining%60;
  document.getElementById("timer").textContent = `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}
document.getElementById("timerStart").addEventListener("click",()=>{
  if(timerId) return;
  timerId = setInterval(()=>{
    if(remaining > 0){ remaining--; drawTimer(); }
    else{
      clearInterval(timerId); timerId = null;
      alert("Bloco concluído. Faça uma pausa curta.");
    }
  },1000);
});
document.getElementById("timerPause").addEventListener("click",()=>{
  clearInterval(timerId); timerId = null;
});
document.getElementById("timerReset").addEventListener("click",()=>{
  clearInterval(timerId); timerId = null; remaining = 25*60; drawTimer();
});

renderPlan();
renderSummaries();
renderCard();
renderQuiz();
renderVideos();
drawTimer();
