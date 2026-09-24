window.STUDY_SUBJECTS.banco = {
  shortTitle: "Banco de Dados",
  title: "Administração e Gerenciamento de Banco de Dados",
  description: "Estude as 12 unidades oficiais: SGBD, arquiteturas, manutenção, DBA, performance, operação, espaço, usuários, privilégios, backup, automação e segurança.",
  planTitle: "Administração de Banco de Dados em 14 dias",
  planDescription: "Uma unidade oficial por dia, seguida de revisão prática e simulado final.",
  summaryTitle: "As 12 unidades de Banco de Dados",
  summaryDescription: "Conteúdo reorganizado conforme o módulo oficial, com conceitos, procedimentos, comparações e situações reais de administração.",
  videoDescription: "Videoaulas e pesquisas guiadas organizadas na mesma ordem das 12 unidades oficiais de Banco de Dados.",
  notePlaceholder: "Exemplo: RPO define quanto dado a organização aceita perder; RTO define em quanto tempo o serviço precisa voltar...",
  studyTips: ["Explique o conceito e o risco que ele controla.", "Relacione cada procedimento a uma situação real de administração.", "Diferencie prevenção, monitoramento, resposta e recuperação."],
  practiceTitle: "Laboratório de Administração de Banco de Dados",
  practiceDescription: "Resolva cenários de arquitetura, manutenção, performance, acesso, backup, automação e segurança.",
  practiceIntro: `<h3>Como resolver os casos</h3><p>Atue como administrador de banco de dados. Em cada situação, identifique o sintoma, o risco, as evidências necessárias, a ação segura, a forma de validação e o plano de retorno. Comandos específicos variam entre PostgreSQL, MySQL, SQL Server e Oracle; por isso, os exercícios priorizam princípios que se aplicam a diferentes SGBDs.</p>`,
  plan: [
    { day: 1, title: "Conceitos e funções dos SGBDs", task: "Diferencie banco de dados e SGBD. Estude catálogo, consultas, transações, concorrência, integridade, segurança e recuperação." },
    { day: 2, title: "Arquiteturas centralizadas e distribuídas", task: "Compare arquitetura centralizada, cliente-servidor e distribuída, incluindo fragmentação, replicação, disponibilidade e consistência." },
    { day: 3, title: "Políticas de manutenção", task: "Estude manutenção preventiva, corretiva e evolutiva, janelas de mudança, patches, estatísticas, índices, capacidade e documentação." },
    { day: 4, title: "Responsabilidades do DBA", task: "Revise instalação, configuração, disponibilidade, segurança, desempenho, backup, recuperação, documentação e comunicação." },
    { day: 5, title: "Problemas de performance", task: "Aprenda a investigar consultas lentas, CPU, memória, disco, bloqueios, índices, estatísticas e planos de execução." },
    { day: 6, title: "Inicialização e desativação", task: "Estude as etapas de startup, recuperação, abertura, shutdown controlado e riscos de interrupção forçada." },
    { day: 7, title: "Gerenciamento de espaço", task: "Revise armazenamento lógico e físico, crescimento, arquivos, páginas, áreas temporárias, logs, fragmentação e alertas." },
    { day: 8, title: "Gerenciamento de usuários", task: "Estude autenticação, ciclo de vida das contas, usuários de serviço, expiração, bloqueio, auditoria e revisão periódica." },
    { day: 9, title: "Gerenciamento de privilégios", task: "Compare privilégios de sistema e de objeto, GRANT, REVOKE, papéis, menor privilégio e separação de funções." },
    { day: 10, title: "Backup de banco de dados", task: "Compare backup lógico e físico, completo e incremental, RPO, RTO, retenção, criptografia, logs e testes de restauração." },
    { day: 11, title: "Automatização de tarefas", task: "Estude agendadores, scripts, jobs, logs, alertas, idempotência, janelas de manutenção e tratamento de falhas." },
    { day: 12, title: "Segurança e controle de acesso", task: "Revise confidencialidade, integridade, disponibilidade, defesa em profundidade, criptografia, rede, auditoria e resposta a incidentes." },
    { day: 13, title: "Revisão e laboratório", task: "Resolva os casos práticos, faça flashcards e monte um plano de operação contendo monitoramento, backup, acesso e manutenção." },
    { day: 14, title: "Simulado final", task: "Faça o simulado sem consultar, revise todas as explicações e reestude as unidades com maior número de erros." }
  ],
  summaries: [
    {
      title: "1. Conceitos, funcionamento e funções dos Gerenciadores de Banco de Dados",
      subtitle: "O que o SGBD controla e por que ele é necessário",
      html: `<p>Um <strong>banco de dados</strong> é uma coleção organizada de dados relacionados. O <strong>Sistema Gerenciador de Banco de Dados (SGBD)</strong> é o software que define, armazena, consulta, protege e recupera esses dados. PostgreSQL, MySQL, SQL Server e Oracle Database são exemplos. Banco e SGBD não são sinônimos: um é o conteúdo organizado; o outro é a tecnologia que o administra.</p>
      <h4>Componentes do funcionamento</h4><ul><li><strong>Processador de consultas:</strong> interpreta SQL, escolhe um plano e executa operações.</li><li><strong>Gerenciador de armazenamento:</strong> organiza arquivos, páginas, buffers e acesso ao disco.</li><li><strong>Gerenciador de transações:</strong> preserva consistência e coordena operações concorrentes.</li><li><strong>Recuperação:</strong> usa logs e mecanismos de undo/redo para reagir a falhas.</li><li><strong>Catálogo de metadados:</strong> descreve tabelas, colunas, índices, usuários e permissões.</li><li><strong>Autorização e auditoria:</strong> controlam quem pode fazer o quê e registram eventos relevantes.</li></ul>
      <h4>Funções essenciais</h4><p>O SGBD oferece definição de estruturas, manipulação e consulta, integridade, controle de concorrência, segurança, backup, restauração, replicação e monitoramento. Ele reduz a duplicação descontrolada presente em arquivos isolados e centraliza regras importantes.</p>
      <h4>Transações e ACID</h4><ul><li><strong>Atomicidade:</strong> todas as operações da transação acontecem ou nenhuma.</li><li><strong>Consistência:</strong> regras permanecem válidas antes e depois.</li><li><strong>Isolamento:</strong> transações concorrentes não produzem interferências incorretas.</li><li><strong>Durabilidade:</strong> após a confirmação, os efeitos persistem mesmo com falha.</li></ul>
      <p><strong>Atenção para a prova:</strong> o SGBD não elimina a necessidade de administração. Configuração, políticas, monitoramento e decisões do DBA continuam essenciais.</p>`
    },
    {
      title: "2. Arquiteturas de Bancos de Dados Centralizados e Distribuídos",
      subtitle: "Localização dos dados, comunicação, disponibilidade e consistência",
      html: `<p>Na arquitetura <strong>centralizada</strong>, a base principal é mantida em um servidor ou local lógico central. Na arquitetura <strong>distribuída</strong>, dados e processamento podem estar em vários nós conectados, mas o usuário deve perceber o conjunto como um sistema coerente.</p>
      <table class="comparison"><thead><tr><th>Arquitetura</th><th>Vantagens</th><th>Desafios</th></tr></thead><tbody><tr><td>Centralizada</td><td>Administração, segurança e consistência mais simples.</td><td>Ponto concentrado de falha e possível gargalo.</td></tr><tr><td>Cliente-servidor</td><td>Separa interface/aplicação do serviço de dados.</td><td>Depende de rede, conexões e dimensionamento.</td></tr><tr><td>Distribuída</td><td>Proximidade dos usuários, escala e tolerância a falhas.</td><td>Sincronização, latência, consistência e operação mais complexas.</td></tr></tbody></table>
      <h4>Organização distribuída</h4><ul><li><strong>Fragmentação:</strong> divide dados horizontalmente por linhas ou verticalmente por colunas.</li><li><strong>Replicação:</strong> mantém cópias para leitura, disponibilidade ou recuperação.</li><li><strong>Distribuição homogênea:</strong> nós usam tecnologias compatíveis.</li><li><strong>Distribuição heterogênea:</strong> integra SGBDs ou modelos diferentes.</li></ul>
      <h4>Transparências desejáveis</h4><p>O usuário não deveria precisar saber onde os dados estão, se foram fragmentados ou replicados. Essa transparência é útil, mas exige catálogo, roteamento, coordenação de transações e tratamento de falhas.</p>
      <h4>Escolha arquitetural</h4><p>Não existe arquitetura melhor para todos os casos. A decisão considera volume, localização dos usuários, latência, custo, soberania dos dados, consistência exigida, disponibilidade e capacidade da equipe. Distribuir pode aumentar disponibilidade, mas também amplia pontos de configuração e monitoramento.</p>
      <p><strong>Atenção:</strong> replicação não substitui backup. Uma exclusão indevida pode ser replicada para todas as cópias.</p>`
    },
    {
      title: "3. Necessidades das políticas de manutenção de banco de dados",
      subtitle: "Prevenção, correção, evolução e controle de mudanças",
      html: `<p>Uma <strong>política de manutenção</strong> define o que será monitorado, quando uma tarefa será executada, quem é responsável, quais evidências serão guardadas e como retornar ao estado anterior se algo falhar. Sem política, a equipe atua apenas depois do incidente e depende da memória de pessoas específicas.</p>
      <h4>Tipos de manutenção</h4><ul><li><strong>Preventiva:</strong> reduz a probabilidade de falhas por meio de inspeção, atualização, limpeza, testes e capacidade.</li><li><strong>Corretiva:</strong> reage a erro, indisponibilidade, corrupção ou degradação.</li><li><strong>Evolutiva:</strong> adapta o ambiente a novos requisitos, versões e volumes.</li><li><strong>Preditiva:</strong> usa tendências e métricas para agir antes do limite.</li></ul>
      <h4>Conteúdo de uma política</h4><ul><li>Calendário de patches e versões suportadas.</li><li>Atualização de estatísticas e manutenção de índices.</li><li>Verificação de integridade, logs, alertas e espaço disponível.</li><li>Backup, retenção, restauração e testes de recuperação.</li><li>Janela de manutenção, comunicação e aprovação de mudanças.</li><li>Plano de retorno, critérios de sucesso e documentação.</li></ul>
      <h4>Gestão de mudanças</h4><p>Antes de alterar produção, a equipe registra objetivo, risco, dependências, testes, responsáveis, duração e rollback. A mudança deve ser testada em ambiente compatível, comunicada aos afetados e validada por métricas depois da execução.</p>
      <p><strong>Exemplo:</strong> aplicar uma atualização sem testar compatibilidade pode corrigir uma vulnerabilidade e, ao mesmo tempo, interromper a aplicação. A política equilibra segurança e continuidade.</p>
      <p><strong>Atenção:</strong> “o backup terminou” não prova que ele é recuperável. A manutenção precisa incluir testes periódicos de restauração.</p>`
    },
    {
      title: "4. Responsabilidades do Administrador de Banco de Dados",
      subtitle: "Disponibilidade, desempenho, segurança e comunicação",
      html: `<p>O <strong>Administrador de Banco de Dados (DBA)</strong> mantém os dados disponíveis, íntegros, protegidos e com desempenho adequado às necessidades do negócio. Seu trabalho combina conhecimento técnico, gestão de riscos, documentação e comunicação com desenvolvimento, infraestrutura, segurança e usuários.</p>
      <h4>Responsabilidades frequentes</h4><ul><li>Instalar, configurar, atualizar e padronizar SGBDs.</li><li>Planejar capacidade de CPU, memória, armazenamento e conexões.</li><li>Monitorar disponibilidade, consultas, bloqueios, erros e crescimento.</li><li>Administrar usuários, papéis, privilégios e auditoria.</li><li>Definir e testar backup, restauração e recuperação de desastre.</li><li>Investigar performance e apoiar otimização de consultas e índices.</li><li>Automatizar rotinas, documentar ambientes e manter runbooks.</li><li>Apoiar alta disponibilidade, replicação, migrações e resposta a incidentes.</li></ul>
      <h4>DBA não trabalha sozinho</h4><p>Desenvolvedores conhecem regras da aplicação; infraestrutura administra servidores e rede; segurança define controles; donos do processo estabelecem prioridade e impacto. O DBA coordena informações para tomar decisões seguras, mas responsabilidades devem ser compartilhadas e formalizadas.</p>
      <h4>Postura profissional</h4><p>Como possui acesso privilegiado, o DBA deve seguir menor privilégio, separação de funções, registro de mudanças e confidencialidade. Não deve consultar dados pessoais por curiosidade nem alterar produção sem autorização e evidência.</p>
      <p><strong>Atenção para a prova:</strong> disponibilidade não significa apenas manter o serviço ligado. Inclui recuperação, capacidade, desempenho aceitável e procedimentos para falhas.</p>`
    },
    {
      title: "5. Identificação de problemas de performance em Banco de Dados",
      subtitle: "Métricas, hipóteses, planos de execução, índices e bloqueios",
      html: `<p><strong>Performance</strong> é a capacidade de atender a carga dentro do tempo e do consumo de recursos esperados. Uma consulta lenta pode ser causada pelo SQL, por índice inadequado, estatística desatualizada, bloqueio, excesso de conexões, falta de memória, disco saturado, rede ou crescimento do volume.</p>
      <h4>Método de diagnóstico</h4><ol><li>Defina o sintoma, horário, usuários e impacto.</li><li>Compare com uma linha de base e identifique o que mudou.</li><li>Observe CPU, memória, I/O, latência, conexões, locks e filas.</li><li>Localize consultas de maior tempo, frequência ou consumo.</li><li>Analise o plano de execução com <code>EXPLAIN</code> ou ferramenta equivalente.</li><li>Teste uma mudança controlada e compare antes/depois.</li></ol>
      <h4>Índices</h4><p>Índices podem acelerar busca, junção e ordenação, mas ocupam espaço e tornam inserções, atualizações e exclusões mais caras. Um índice deve atender ao padrão real de consulta; criar índices em todas as colunas normalmente piora manutenção e escrita.</p>
      <h4>Problemas comuns</h4><ul><li>Leitura completa de tabela muito grande sem necessidade.</li><li>Consultas que retornam colunas ou linhas em excesso.</li><li>Estatísticas desatualizadas e plano inadequado.</li><li>Transações longas, bloqueios e deadlocks.</li><li>Problema N+1, que executa muitas consultas pequenas.</li><li>Pool de conexões mal configurado.</li></ul>
      <p><strong>Atenção:</strong> otimização começa por medição. Reiniciar o servidor pode esconder o sintoma sem eliminar a causa.</p>`
    },
    {
      title: "6. Inicialização e desativação de um banco de dados",
      subtitle: "Startup, abertura, recuperação e shutdown controlado",
      html: `<p>A inicialização e a desativação precisam preservar consistência e disponibilidade. Os nomes dos estados variam entre SGBDs, mas o processo normalmente envolve iniciar serviços, carregar configuração, acessar arquivos, recuperar transações e liberar o banco para conexões.</p>
      <h4>Etapas típicas da inicialização</h4><ol><li>O processo do SGBD lê parâmetros e valida recursos.</li><li>Arquivos de dados, controle e logs são localizados.</li><li>Mecanismos de recuperação verificam se houve encerramento incompleto.</li><li>Transações confirmadas são refeitas quando necessário; incompletas são desfeitas.</li><li>O banco passa a aceitar conexões e operações.</li></ol>
      <h4>Tipos de desativação</h4><ul><li><strong>Normal ou graciosa:</strong> impede novas conexões e aguarda atividades terminarem.</li><li><strong>Rápida/controlada:</strong> encerra sessões ou desfaz transações de modo coordenado.</li><li><strong>Forçada:</strong> interrompe processos; deve ser último recurso e pode exigir recuperação no próximo startup.</li></ul>
      <h4>Checklist operacional</h4><p>Antes do shutdown: confirmar janela, dependências, backup quando aplicável, usuários conectados, replicação e plano de retorno. Depois do startup: validar logs, estado das réplicas, conexões, consultas básicas, jobs e monitoramento.</p>
      <p><strong>Atenção:</strong> desligar o sistema operacional sem encerrar corretamente o SGBD aumenta risco de recuperação demorada ou corrupção. Alta disponibilidade também exige saber se haverá failover para outro nó.</p>`
    },
    {
      title: "7. Gerenciamento de espaço da base de dados",
      subtitle: "Armazenamento lógico, físico, crescimento e capacidade",
      html: `<p>Gerenciar espaço é garantir que dados, índices, logs e áreas temporárias cresçam sem interromper o serviço. Os termos variam, mas SGBDs organizam armazenamento em estruturas físicas — arquivos e volumes — e lógicas — bancos, esquemas, tablespaces, páginas ou equivalentes.</p>
      <h4>O que acompanhar</h4><ul><li>Espaço total, usado, livre e tendência de crescimento.</li><li>Tamanho de tabelas, índices, logs e áreas temporárias.</li><li>Taxa de crescimento por dia, semana e mês.</li><li>Limites de arquivos, quotas e expansão automática.</li><li>Fragmentação, espaço morto ou bloat, conforme o SGBD.</li><li>Latência, capacidade e redundância do armazenamento.</li></ul>
      <h4>Planejamento de capacidade</h4><p>O DBA estima crescimento com histórico e eventos futuros, define alertas antes do limite e reserva tempo para agir. Autoexpansão evita falha imediata, mas não substitui monitoramento; expansão ilimitada pode consumir todo o volume e afetar outros serviços.</p>
      <h4>Liberação e reorganização</h4><p>Excluir linhas nem sempre devolve espaço ao sistema operacional. Pode ser necessário compactar, reorganizar ou executar manutenção específica. Essas ações podem usar CPU, I/O, locks e espaço adicional, por isso devem ser planejadas.</p>
      <p><strong>Exemplo:</strong> uma consulta pode falhar mesmo com área de dados livre se a área temporária ou o volume de logs estiver cheio.</p>
      <p><strong>Atenção:</strong> capacidade é diferente de performance. Ter espaço livre não garante baixa latência, e um disco rápido não resolve ausência de espaço.</p>`
    },
    {
      title: "8. Gerenciamento de usuários do banco de dados",
      subtitle: "Identidade, autenticação e ciclo de vida das contas",
      html: `<p><strong>Usuário</strong> representa uma identidade que se autentica no banco. Pode pertencer a uma pessoa, aplicação ou serviço. O gerenciamento abrange criação, alteração, bloqueio, revisão e remoção, sempre ligado ao ciclo de vida real.</p>
      <h4>Etapas do ciclo de vida</h4><ol><li>Solicitação com justificativa, responsável e prazo.</li><li>Criação com identidade individual quando possível.</li><li>Autenticação segura e entrega protegida do segredo.</li><li>Associação a papéis adequados à função.</li><li>Revisão periódica de uso, necessidade e privilégios.</li><li>Bloqueio imediato no desligamento ou fim do contrato.</li><li>Remoção conforme política e preservação de auditoria.</li></ol>
      <h4>Contas humanas e de serviço</h4><p>Contas compartilhadas dificultam saber quem realizou uma ação. Pessoas devem possuir contas individuais. Contas de aplicação precisam de proprietário, finalidade, segredo protegido, rotação e acesso limitado; não devem usar conta administrativa por conveniência.</p>
      <h4>Autenticação</h4><p>Senhas fortes, integração com diretório, autenticação multifator quando suportada, certificados e cofres de segredos reduzem risco. Credenciais não devem ficar em código-fonte, planilhas públicas ou scripts sem proteção.</p>
      <p><strong>Atenção:</strong> desativar uma conta remove acesso futuro, enquanto apagar pode comprometer rastreabilidade ou propriedade de objetos. A ação correta depende do SGBD e da política.</p>`
    },
    {
      title: "9. Gerenciamento de privilégios no banco de dados",
      subtitle: "GRANT, REVOKE, papéis e princípio do menor privilégio",
      html: `<p><strong>Autenticação</strong> confirma quem é o usuário; <strong>autorização</strong> define o que ele pode fazer. Privilégios devem corresponder à função e ser revogados quando deixam de ser necessários.</p>
      <h4>Tipos de privilégio</h4><ul><li><strong>De sistema:</strong> criar usuários, bancos, esquemas ou executar operações administrativas.</li><li><strong>De objeto:</strong> selecionar, inserir, atualizar ou excluir em tabela; executar rotina; usar sequência ou esquema.</li><li><strong>Papéis ou roles:</strong> agrupam privilégios para facilitar concessão e revisão.</li></ul>
      <pre><code>GRANT SELECT ON relatorio_vendas TO papel_analista;
GRANT papel_analista TO usuario_ana;
REVOKE papel_analista FROM usuario_ana;</code></pre>
      <p>A sintaxe varia entre SGBDs. O conceito central é conceder a um papel e associar usuários ao papel, em vez de acumular permissões individuais difíceis de revisar.</p>
      <h4>Princípios de controle</h4><ul><li><strong>Menor privilégio:</strong> somente o acesso necessário, pelo tempo necessário.</li><li><strong>Necessidade de saber:</strong> acesso depende da atividade exercida.</li><li><strong>Separação de funções:</strong> ações críticas não ficam sob controle de uma única pessoa.</li><li><strong>Revisão periódica:</strong> comparar permissões atuais com função e uso real.</li></ul>
      <p><strong>Cuidado:</strong> opções que permitem repassar privilégios podem ampliar acesso sem controle. Permissões herdadas, propriedade de objetos e grupos também devem entrar na revisão.</p>`
    },
    {
      title: "10. Backup de banco de dados",
      subtitle: "Cópia, retenção, restauração, RPO e RTO",
      html: `<p><strong>Backup</strong> é uma cópia criada para recuperação. Ele só cumpre sua finalidade quando pode ser restaurado dentro do tempo e com a perda de dados aceitáveis. Replicação, espelhamento e RAID melhoram disponibilidade, mas não substituem backup independente.</p>
      <h4>Tipos</h4><ul><li><strong>Lógico:</strong> exporta objetos e dados em formato interpretável pelo SGBD; é flexível, mas pode ser mais lento em grandes volumes.</li><li><strong>Físico:</strong> copia arquivos ou blocos do banco; costuma favorecer recuperação em escala.</li><li><strong>Completo:</strong> inclui todo o conjunto definido.</li><li><strong>Incremental:</strong> inclui alterações desde uma referência anterior.</li><li><strong>Online ou quente:</strong> ocorre com serviço disponível.</li><li><strong>Offline ou frio:</strong> ocorre com banco parado e consistente.</li></ul>
      <h4>Objetivos de recuperação</h4><ul><li><strong>RPO:</strong> quanto dado, medido em tempo, a organização aceita perder.</li><li><strong>RTO:</strong> em quanto tempo o serviço precisa ser recuperado.</li></ul>
      <h4>Política completa</h4><p>Deve definir frequência, retenção, criptografia, responsáveis, localização, cópia externa, monitoramento e descarte seguro. Logs de transação podem permitir recuperação até um ponto no tempo.</p>
      <h4>Regra 3-2-1</h4><p>Manter ao menos três cópias, em dois tipos de mídia, com uma cópia fora do ambiente principal. A política deve considerar proteção contra ransomware e acesso restrito.</p>
      <p><strong>Atenção:</strong> teste de restauração mede o que realmente importa. Conferir apenas a mensagem “backup concluído” é insuficiente.</p>`
    },
    {
      title: "11. Automatização de tarefas em banco de dados",
      subtitle: "Jobs, agendamento, scripts, alertas e execução confiável",
      html: `<p>Automatizar reduz tarefas repetitivas e erros manuais, mas um job sem monitoramento pode repetir falhas silenciosamente. A automação precisa ser previsível, observável, segura e documentada.</p>
      <h4>Tarefas comuns</h4><ul><li>Backups e verificação de resultados.</li><li>Atualização de estatísticas e manutenção de índices.</li><li>Rotação e retenção de logs.</li><li>Verificação de espaço, integridade, replicação e jobs atrasados.</li><li>Geração de relatórios operacionais e alertas.</li><li>Expiração controlada de dados conforme política.</li></ul>
      <h4>Características de uma boa automação</h4><ul><li><strong>Idempotência:</strong> repetir não causa duplicação ou dano indevido.</li><li><strong>Logs:</strong> início, fim, parâmetros, resultado e erro ficam registrados.</li><li><strong>Alertas:</strong> falhas chegam à pessoa ou equipe responsável.</li><li><strong>Timeout e repetição controlada:</strong> evitam execução infinita ou tempestade de tentativas.</li><li><strong>Segurança:</strong> credenciais protegidas e privilégio mínimo.</li><li><strong>Runbook:</strong> documentação ensina como validar, pausar e recuperar.</li></ul>
      <h4>Agendamento</h4><p>O DBA considera janela de menor carga, duração, concorrência com outros jobs, fuso horário e dependências. Duas rotinas pesadas no mesmo horário podem degradar o ambiente mesmo que funcionem separadamente.</p>
      <p><strong>Atenção:</strong> automação não elimina responsabilidade humana; muda o foco para desenho, observação e tratamento de exceções.</p>`
    },
    {
      title: "12. Segurança e controle de acesso",
      subtitle: "Defesa em profundidade, proteção de dados e resposta a incidentes",
      html: `<p>Segurança de banco protege <strong>confidencialidade</strong>, <strong>integridade</strong> e <strong>disponibilidade</strong>. Nenhum controle isolado é suficiente; a defesa em profundidade combina identidade, privilégios, rede, configuração, criptografia, monitoramento e recuperação.</p>
      <h4>Controles essenciais</h4><ul><li>Autenticação forte, menor privilégio e revisão de acessos.</li><li>Segmentação de rede, firewall e restrição de origem.</li><li>Criptografia em trânsito e, quando adequado, em repouso e backup.</li><li>Patches, configuração segura e remoção de padrões inseguros.</li><li>Auditoria de logins, falhas, mudanças e acesso a dados sensíveis.</li><li>Mascaramento ou anonimização em ambientes de teste.</li><li>Backup protegido e plano de resposta a incidentes.</li></ul>
      <h4>Injeção SQL</h4><p>Ocorre quando entrada não confiável altera o comando executado. A principal defesa é usar consultas parametrizadas ou prepared statements, além de validação, privilégios limitados e tratamento seguro de erros. Concatenar texto do usuário ao SQL é perigoso.</p>
      <h4>Resposta a incidentes</h4><ol><li>Detectar e preservar evidências.</li><li>Conter o acesso ou vetor comprometido.</li><li>Erradicar causa, corrigir configuração e rotacionar segredos.</li><li>Recuperar e validar o serviço.</li><li>Comunicar conforme obrigações e aprender com o incidente.</li></ol>
      <p><strong>Atenção:</strong> esconder o servidor na rede não substitui autenticação, autorização e correção de vulnerabilidades. Segurança precisa existir em todas as camadas.</p>`
    }
  ],
  flashcards: [
    ["Qual é a diferença entre banco de dados e SGBD?", "Banco é o conjunto organizado de dados; SGBD é o software que define, acessa, protege e recupera esses dados."],
    ["O que faz o processador de consultas?", "Interpreta a consulta, escolhe um plano de execução e coordena sua execução."],
    ["O que são metadados?", "Dados do catálogo que descrevem tabelas, colunas, índices, usuários, privilégios e outras estruturas."],
    ["Quais propriedades formam ACID?", "Atomicidade, Consistência, Isolamento e Durabilidade."],
    ["Para que serve o controle de concorrência?", "Para coordenar transações simultâneas e evitar resultados incorretos."],

    ["O que caracteriza um banco centralizado?", "Dados e controle principal ficam concentrados em um servidor ou local lógico central."],
    ["O que caracteriza um banco distribuído?", "Dados ou processamento ficam em vários nós coordenados como um sistema."],
    ["O que é fragmentação horizontal?", "Distribuição de conjuntos de linhas entre nós."],
    ["O que é replicação?", "Manutenção de cópias de dados em mais de um nó para leitura, disponibilidade ou recuperação."],
    ["Replicação substitui backup?", "Não. Erros e exclusões podem ser replicados para todas as cópias."],

    ["O que é manutenção preventiva?", "Ações planejadas para reduzir a probabilidade de falha ou degradação."],
    ["O que é manutenção corretiva?", "Ação realizada para corrigir erro, falha ou indisponibilidade já ocorrida."],
    ["O que é manutenção preditiva?", "Uso de métricas e tendências para agir antes que um limite seja atingido."],
    ["O que é janela de manutenção?", "Período acordado para executar mudanças com impacto controlado."],
    ["Por que toda mudança precisa de rollback?", "Para retornar a um estado seguro se a alteração não produzir o resultado esperado."],

    ["Qual é a missão principal do DBA?", "Manter dados disponíveis, íntegros, protegidos e com desempenho adequado."],
    ["Cite quatro responsabilidades do DBA.", "Configuração, monitoramento, performance, usuários, segurança, backup, recuperação, capacidade ou automação."],
    ["Por que o DBA precisa documentar?", "Para garantir rastreabilidade, repetibilidade, transferência de conhecimento e resposta rápida."],
    ["O DBA deve acessar dados por curiosidade?", "Não. Acesso privilegiado deve obedecer necessidade, autorização e auditoria."],
    ["O que é um runbook?", "Documento operacional com passos para executar, validar e recuperar procedimentos."],

    ["O que é linha de base de performance?", "Registro do comportamento normal usado para comparar e identificar desvios."],
    ["Para que serve EXPLAIN?", "Para analisar o plano escolhido pelo otimizador para executar uma consulta."],
    ["Índices sempre melhoram tudo?", "Não. Aceleram certos acessos, mas consomem espaço e aumentam custo de escrita e manutenção."],
    ["O que é deadlock?", "Ciclo de espera em que transações aguardam recursos mantidos umas pelas outras."],
    ["Por que estatísticas desatualizadas prejudicam consultas?", "O otimizador pode estimar volumes incorretamente e escolher um plano ruim."],

    ["O que acontece em um startup do SGBD?", "Configurações e arquivos são validados, recuperação é executada e o banco é aberto para conexões."],
    ["O que é shutdown gracioso?", "Encerramento que impede novas conexões e permite finalizar atividades de modo controlado."],
    ["Quando usar shutdown forçado?", "Somente como último recurso, pois pode exigir recuperação e aumentar riscos."],
    ["O que é recuperação de instância?", "Aplicação de logs para refazer operações confirmadas e desfazer transações incompletas após falha."],
    ["O que validar após reiniciar?", "Logs, conexões, consultas básicas, replicação, jobs e monitoramento."],

    ["O que deve ser monitorado no espaço?", "Dados, índices, logs, áreas temporárias, espaço livre e tendência de crescimento."],
    ["Autoexpansão elimina o monitoramento?", "Não. Pode apenas adiar a falha e até consumir todo o volume."],
    ["Excluir linhas sempre devolve espaço ao sistema?", "Não. O SGBD pode manter o espaço para reutilização ou exigir reorganização."],
    ["Capacidade e performance são iguais?", "Não. Espaço disponível e velocidade de acesso são aspectos diferentes."],
    ["Por que alertar antes de o disco ficar cheio?", "Para haver tempo de corrigir sem interromper transações e serviços."],

    ["O que é uma conta de serviço?", "Identidade usada por aplicação ou processo automatizado, com finalidade e responsável definidos."],
    ["Por que evitar contas compartilhadas?", "Elas prejudicam rastreabilidade e responsabilização das ações."],
    ["O que é ciclo de vida do usuário?", "Solicitar, criar, autenticar, revisar, bloquear e remover a conta conforme a necessidade."],
    ["Onde guardar credenciais de aplicações?", "Em mecanismo seguro de segredos, nunca expostas em código ou planilha pública."],
    ["Desativar e excluir uma conta são iguais?", "Não. Desativar bloqueia acesso preservando identidade e registros; excluir pode afetar rastreabilidade e objetos."],

    ["Autenticação e autorização são iguais?", "Não. Autenticação confirma identidade; autorização define ações permitidas."],
    ["O que é princípio do menor privilégio?", "Conceder apenas o acesso necessário, pelo tempo necessário."],
    ["Para que servem roles ou papéis?", "Agrupar privilégios e facilitar concessão, revogação e revisão."],
    ["O que faz GRANT?", "Concede privilégio ou papel, conforme a sintaxe do SGBD."],
    ["O que faz REVOKE?", "Remove privilégio ou papel anteriormente concedido."],

    ["O que significa RPO?", "Perda máxima aceitável de dados, medida em tempo."],
    ["O que significa RTO?", "Tempo máximo desejado para recuperar o serviço."],
    ["Qual é a diferença entre backup lógico e físico?", "Lógico exporta objetos e dados; físico copia arquivos ou blocos do banco."],
    ["O que é recuperação ponto no tempo?", "Restauração até um instante específico usando backup e logs de transação."],
    ["Por que testar restauração?", "Para comprovar que a cópia é utilizável e que o procedimento atende ao RPO e RTO."],

    ["O que é idempotência em automação?", "Capacidade de repetir uma tarefa sem criar duplicação ou dano indevido."],
    ["O que uma rotina automatizada deve registrar?", "Início, fim, parâmetros relevantes, resultado, duração e erro."],
    ["Por que jobs precisam de alertas?", "Uma falha automática e silenciosa pode permanecer por muito tempo sem correção."],
    ["O que considerar ao agendar um job?", "Carga, duração, dependências, concorrência, janela, fuso e impacto."],
    ["Automação elimina o trabalho do DBA?", "Não. Exige desenho, segurança, monitoramento e tratamento de exceções."],

    ["Quais princípios formam a tríade CIA?", "Confidencialidade, Integridade e Disponibilidade."],
    ["O que é defesa em profundidade?", "Uso combinado de controles em várias camadas, sem depender de uma única barreira."],
    ["Como prevenir injeção SQL?", "Usar consultas parametrizadas, validação, tratamento seguro de erros e menor privilégio."],
    ["Criptografia em trânsito protege contra quê?", "Interceptação de dados durante a comunicação entre cliente e servidor."],
    ["Quais fases básicas de resposta a incidentes?", "Detectar, conter, erradicar, recuperar, comunicar e aprender."]
  ],
  quiz: [
    { q: "A diferença correta entre banco de dados e SGBD é:", o: ["São exatamente iguais", "O banco contém dados; o SGBD os gerencia", "O SGBD é uma tabela", "O banco é apenas o software"], a: 1, e: "O banco é a coleção organizada; o SGBD oferece mecanismos de gerenciamento." },
    { q: "O catálogo do SGBD armazena principalmente:", o: ["Somente senhas", "Metadados sobre objetos e estruturas", "Apenas backups", "Cabos de rede"], a: 1, e: "O catálogo descreve tabelas, colunas, índices, usuários e outros objetos." },
    { q: "A atomicidade garante que uma transação:", o: ["Execute mais rápido", "Aconteça por completo ou seja desfeita", "Tenha acesso público", "Nunca use disco"], a: 1, e: "Atomicidade evita que apenas parte da unidade lógica seja aplicada." },
    { q: "O controle de concorrência procura:", o: ["Impedir todos os usuários", "Coordenar transações simultâneas corretamente", "Excluir logs", "Substituir backup"], a: 1, e: "Ele evita interferências incorretas entre operações simultâneas." },
    { q: "O processador de consultas:", o: ["Escolhe e executa um plano", "Cria cabos", "Substitui o DBA", "Armazena somente imagens"], a: 0, e: "Ele interpreta a consulta e coordena o plano de execução." },

    { q: "Uma arquitetura centralizada tende a:", o: ["Concentrar controle e dados principais", "Eliminar servidor", "Distribuir tudo obrigatoriamente", "Não usar rede"], a: 0, e: "A administração fica concentrada em um servidor ou local lógico." },
    { q: "Fragmentação horizontal divide uma tabela por:", o: ["Colunas", "Linhas", "Senhas", "Índices somente"], a: 1, e: "Conjuntos de linhas são distribuídos por critérios." },
    { q: "Replicação é usada para:", o: ["Manter cópias em nós diferentes", "Apagar a fonte", "Remover autenticação", "Evitar qualquer latência"], a: 0, e: "Cópias podem apoiar leitura, disponibilidade ou recuperação." },
    { q: "Um desafio típico de bancos distribuídos é:", o: ["Ausência total de rede", "Coordenar consistência e falhas entre nós", "Impossibilidade de replicar", "Não possuir usuários"], a: 1, e: "Distribuição aumenta complexidade de sincronização e operação." },
    { q: "Replicação não substitui backup porque:", o: ["Não usa dados", "Erros podem ser replicados", "Sempre fica offline", "Não possui cópias"], a: 1, e: "Exclusões e corrupção lógica podem alcançar as réplicas." },

    { q: "Manutenção preventiva ocorre:", o: ["Somente depois da falha", "Antes da falha para reduzir riscos", "Sem planejamento", "Apenas em aplicações"], a: 1, e: "Ela inclui inspeção, atualização, testes e planejamento." },
    { q: "Uma política de manutenção deve indicar:", o: ["Apenas o nome do banco", "Responsáveis, frequência, validação e rollback", "Somente o preço do servidor", "Nenhum registro"], a: 1, e: "Política transforma tarefas em processo controlado e repetível." },
    { q: "Janela de manutenção é:", o: ["Período acordado para intervenções", "Um tipo de tabela", "Uma senha", "Uma cópia de dados"], a: 0, e: "Ela reduz surpresa e organiza impactos da mudança." },
    { q: "Atualizar estatísticas ajuda principalmente o:", o: ["Otimizador de consultas", "Sistema de e-mail", "Teclado", "Firewall físico"], a: 0, e: "Estimativas melhores ajudam a escolher planos adequados." },
    { q: "Um teste de restauração faz parte da manutenção porque:", o: ["Comprova a recuperabilidade", "Apaga o backup", "Substitui monitoramento", "Dispensa retenção"], a: 0, e: "A conclusão do backup não garante que ele poderá ser usado." },

    { q: "É responsabilidade típica do DBA:", o: ["Apenas digitar dados", "Disponibilidade, segurança e desempenho", "Somente comprar computadores", "Criar publicidade"], a: 1, e: "A atuação do DBA cobre operação e proteção do ambiente." },
    { q: "O planejamento de capacidade considera:", o: ["CPU, memória, armazenamento e crescimento", "Somente usuários atuais", "Apenas cores da interface", "Nenhuma tendência"], a: 0, e: "Recursos e crescimento precisam atender à carga esperada." },
    { q: "Por ter acesso privilegiado, o DBA deve:", o: ["Consultar qualquer dado por curiosidade", "Usar acesso apenas quando autorizado e necessário", "Compartilhar a senha", "Desativar auditoria"], a: 1, e: "Privilégio elevado exige controle, rastreabilidade e ética." },
    { q: "Um runbook contém:", o: ["Procedimentos operacionais e de recuperação", "Somente consultas pessoais", "Apenas nomes de usuários", "Propaganda"], a: 0, e: "Ele orienta execução, validação e resposta a falhas." },
    { q: "O DBA trabalha adequadamente quando:", o: ["Age isolado sempre", "Coordena-se com desenvolvimento, infraestrutura e segurança", "Evita documentação", "Faz mudanças sem comunicar"], a: 1, e: "Operação de banco envolve responsabilidades compartilhadas." },

    { q: "Ao investigar lentidão, a primeira atitude adequada é:", o: ["Reiniciar imediatamente", "Definir sintoma e medir evidências", "Criar índices em tudo", "Apagar logs"], a: 1, e: "Diagnóstico começa por impacto, período, métricas e mudanças recentes." },
    { q: "EXPLAIN serve para:", o: ["Exibir o plano de execução", "Criar usuário", "Fazer backup", "Criptografar conexão"], a: 0, e: "O plano mostra como o SGBD pretende acessar e combinar dados." },
    { q: "Criar índices em excesso pode:", o: ["Tornar escrita e manutenção mais caras", "Eliminar espaço usado", "Impedir leitura", "Substituir constraints"], a: 0, e: "Índices ocupam espaço e precisam ser atualizados a cada escrita." },
    { q: "Deadlock acontece quando:", o: ["Há espaço livre", "Transações formam um ciclo de espera", "O backup termina", "Um usuário sai"], a: 1, e: "Cada transação espera um recurso mantido pela outra." },
    { q: "Estatísticas desatualizadas podem levar a:", o: ["Planos de execução inadequados", "Mais segurança", "Menos usuários", "Backup lógico"], a: 0, e: "Estimativas erradas influenciam as escolhas do otimizador." },

    { q: "Durante o startup, o SGBD pode:", o: ["Executar recuperação após encerramento incompleto", "Ignorar todos os arquivos", "Excluir usuários", "Revogar todo acesso"], a: 0, e: "Logs ajudam a preservar consistência antes da abertura." },
    { q: "Shutdown gracioso procura:", o: ["Interromper energia", "Finalizar atividades de modo controlado", "Corromper logs", "Apagar o banco"], a: 1, e: "Novas conexões são bloqueadas e operações existentes são tratadas adequadamente." },
    { q: "Shutdown forçado deve ser:", o: ["A primeira escolha", "Último recurso", "Executado diariamente", "Usado para melhorar consultas"], a: 1, e: "Ele pode aumentar o tempo de recuperação e os riscos." },
    { q: "Depois de reiniciar, deve-se validar:", o: ["Logs, conexão, replicação e jobs", "Somente a tela de login", "A cor da interface", "Nada"], a: 0, e: "O serviço pode estar iniciado e ainda apresentar falhas funcionais." },
    { q: "Desligar o sistema operacional abruptamente pode:", o: ["Exigir recuperação no próximo startup", "Garantir consistência", "Criar backup", "Atualizar estatísticas"], a: 0, e: "O SGBD pode não concluir gravações e encerramento coordenado." },

    { q: "O gerenciamento de espaço deve acompanhar:", o: ["Dados, índices, logs e temporários", "Somente tabelas pequenas", "Apenas senhas", "Somente nomes"], a: 0, e: "Diferentes áreas podem atingir seus próprios limites." },
    { q: "Autoexpansão sem limite pode:", o: ["Consumir todo o volume", "Garantir performance", "Substituir alertas", "Reduzir dados"], a: 0, e: "Ela precisa de teto, monitoramento e capacidade planejada." },
    { q: "Excluir linhas pode não reduzir o arquivo porque:", o: ["O espaço fica reservado para reutilização", "A exclusão nunca acontece", "O banco não usa disco", "Os usuários impedem sempre"], a: 0, e: "A liberação ao sistema operacional depende do mecanismo e de manutenção." },
    { q: "Área temporária cheia pode:", o: ["Interromper consultas e operações", "Criar privilégios", "Corrigir índices", "Substituir logs"], a: 0, e: "Ordenações e outras operações podem depender do espaço temporário." },
    { q: "Planejamento de capacidade usa principalmente:", o: ["Tendências de crescimento e demanda futura", "Adivinhação sem métricas", "Somente espaço atual", "Apenas o número de tabelas"], a: 0, e: "Histórico e eventos previstos ajudam a antecipar necessidades." },

    { q: "Uma conta de serviço deve possuir:", o: ["Proprietário e finalidade definidos", "Senha pública", "Acesso administrativo sempre", "Uso humano compartilhado"], a: 0, e: "A identidade precisa ser rastreável e limitada à aplicação." },
    { q: "Contas compartilhadas prejudicam:", o: ["Rastreabilidade", "Espaço em disco", "Compressão", "Índices"], a: 0, e: "Fica difícil saber quem realizou uma ação." },
    { q: "No desligamento de um funcionário, a conta deve:", o: ["Continuar indefinidamente", "Ser bloqueada conforme o processo de saída", "Virar conta de serviço", "Receber mais privilégios"], a: 1, e: "O ciclo de vida da conta deve acompanhar o vínculo real." },
    { q: "Credenciais de aplicação devem ficar:", o: ["Em cofre ou mecanismo seguro", "No código público", "Em comentário do script", "Em planilha aberta"], a: 0, e: "Segredos precisam de proteção e rotação." },
    { q: "Revisão periódica de usuários verifica:", o: ["Necessidade, uso e responsável", "Somente o nome", "A velocidade do disco", "A versão do navegador"], a: 0, e: "Contas órfãs ou sem uso precisam ser tratadas." },

    { q: "Autorização determina:", o: ["Quem é a pessoa", "O que uma identidade pode fazer", "O tamanho da tabela", "A velocidade da rede"], a: 1, e: "Autenticação identifica; autorização concede capacidades." },
    { q: "O menor privilégio recomenda:", o: ["Acesso administrativo para todos", "Somente permissões necessárias", "Nenhum controle", "Compartilhar funções"], a: 1, e: "A redução de acesso diminui impacto de erro ou comprometimento." },
    { q: "Uma vantagem de usar roles é:", o: ["Facilitar concessão e revisão", "Eliminar autenticação", "Remover logs", "Aumentar duplicação"], a: 0, e: "Papéis agrupam permissões por função." },
    { q: "REVOKE é usado para:", o: ["Conceder espaço", "Remover privilégio ou papel", "Criar backup", "Iniciar servidor"], a: 1, e: "Ele retira uma autorização anteriormente concedida." },
    { q: "Separação de funções procura:", o: ["Concentrar todo poder", "Evitar que uma pessoa controle sozinha ações críticas", "Eliminar auditoria", "Substituir roles"], a: 1, e: "A divisão reduz abuso e erro sem detecção." },

    { q: "RPO indica:", o: ["Perda de dados aceitável em tempo", "Tempo de consulta", "Quantidade de usuários", "Tamanho do índice"], a: 0, e: "RPO orienta a frequência e estratégia de cópias e logs." },
    { q: "RTO indica:", o: ["Prazo para recuperar o serviço", "Perda máxima de linhas", "Número de réplicas", "Tempo de retenção apenas"], a: 0, e: "RTO orienta recursos e procedimentos de recuperação." },
    { q: "Um backup incremental contém:", o: ["Alterações desde uma referência", "Sempre todos os dados", "Somente usuários", "Apenas índices vazios"], a: 0, e: "Ele reduz volume, mas depende da cadeia definida." },
    { q: "A regra 3-2-1 recomenda:", o: ["Três cópias, duas mídias e uma externa", "Três senhas iguais", "Dois usuários administradores", "Um único backup local"], a: 0, e: "Diversificação reduz risco de perda conjunta." },
    { q: "A prova mais importante de um backup é:", o: ["O nome do arquivo", "Uma restauração testada", "A cor do relatório", "O tamanho isolado"], a: 1, e: "O objetivo é recuperar dados dentro dos requisitos." },

    { q: "Uma tarefa idempotente pode:", o: ["Ser repetida sem dano indevido", "Executar sem logs", "Usar senha pública", "Falhar silenciosamente"], a: 0, e: "A repetição controlada é importante após falhas e tentativas." },
    { q: "Um job automatizado deve gerar:", o: ["Logs e alertas", "Somente uma janela", "Nenhuma evidência", "Privilégio administrativo público"], a: 0, e: "Observabilidade permite detectar e corrigir falhas." },
    { q: "Agendar dois jobs pesados juntos pode:", o: ["Criar contenção e degradação", "Sempre acelerar ambos", "Eliminar I/O", "Aumentar segurança"], a: 0, e: "CPU, disco, locks e rede podem disputar recursos." },
    { q: "Credenciais em scripts automatizados devem:", o: ["Ser protegidas e limitadas", "Ficar em texto público", "Usar conta máxima", "Nunca ser rotacionadas"], a: 0, e: "Automação precisa seguir os mesmos princípios de segurança." },
    { q: "Um runbook de automação explica:", o: ["Como validar, pausar e recuperar a tarefa", "Somente quem criou", "A decoração do painel", "Apenas o horário"], a: 0, e: "A equipe precisa saber operar e reagir a falhas." },

    { q: "A tríade CIA é formada por:", o: ["Custo, índice e acesso", "Confidencialidade, integridade e disponibilidade", "Consulta, inserção e alteração", "CPU, I/O e aplicação"], a: 1, e: "São objetivos fundamentais da segurança da informação." },
    { q: "Defesa em profundidade significa:", o: ["Confiar em um único firewall", "Combinar controles em várias camadas", "Eliminar backup", "Usar uma senha para tudo"], a: 1, e: "Se uma camada falhar, outras continuam reduzindo o risco." },
    { q: "A melhor defesa contra injeção SQL é:", o: ["Concatenar texto", "Usar consultas parametrizadas", "Ocultar mensagens somente", "Aumentar o disco"], a: 1, e: "Parâmetros separam dados do comando executado." },
    { q: "Criptografia em trânsito protege:", o: ["Dados durante a comunicação", "Somente dados apagados", "Apenas índices", "Espaço livre"], a: 0, e: "Protocolos seguros reduzem interceptação entre cliente e servidor." },
    { q: "Na resposta a incidente, conter significa:", o: ["Limitar o dano e o acesso comprometido", "Apagar todas as evidências", "Ignorar o alerta", "Publicar senhas"], a: 0, e: "A contenção reduz propagação enquanto a causa é investigada." }
  ],
  videos: [
    { title: "1. Conceitos e funções dos SGBDs", description: "Componentes, transações, concorrência, catálogo e recuperação.", channel: "Pesquisa guiada", query: "SGBD conceitos funcionamento funções transações concorrência aula português" },
    { title: "2. Bancos centralizados e distribuídos", description: "Arquiteturas, fragmentação, replicação, consistência e disponibilidade.", channel: "Pesquisa guiada", query: "banco de dados centralizado distribuído fragmentação replicação aula português" },
    { title: "3. Políticas de manutenção", description: "Manutenção preventiva, patches, estatísticas, índices e gestão de mudanças.", channel: "Pesquisa guiada", query: "manutenção banco de dados preventiva políticas DBA aula" },
    { title: "4. Responsabilidades do DBA", description: "Rotina, disponibilidade, capacidade, segurança, backup e documentação.", channel: "Pesquisa guiada", query: "responsabilidades administrador banco de dados DBA aula português" },
    { title: "5. Performance em Banco de Dados", description: "Planos de execução, índices, estatísticas, locks e métricas.", channel: "Pesquisa guiada", query: "performance banco de dados EXPLAIN índices locks estatísticas aula português" },
    { title: "6. Inicialização e desativação", description: "Startup, shutdown, recuperação de instância e validação operacional.", channel: "Pesquisa guiada", query: "inicialização desativação banco de dados startup shutdown recuperação DBA" },
    { title: "7. Gerenciamento de espaço", description: "Arquivos, tablespaces, crescimento, áreas temporárias e capacidade.", channel: "Pesquisa guiada", query: "gerenciamento espaço banco de dados tablespace datafile DBA aula" },
    { title: "8. Gerenciamento de usuários", description: "Criação, autenticação, contas de serviço, bloqueio e ciclo de vida.", channel: "Pesquisa guiada", query: "gerenciamento usuários banco de dados create user autenticação DBA aula" },
    { title: "9. Gerenciamento de privilégios", description: "GRANT, REVOKE, roles, menor privilégio e separação de funções.", channel: "Pesquisa guiada", query: "GRANT REVOKE roles privilégios banco de dados menor privilégio aula" },
    { title: "10. Backup de Banco de Dados", description: "Tipos de backup, RPO, RTO, retenção e teste de restauração.", channel: "Pesquisa guiada", query: "backup banco de dados RPO RTO restauração aula DBA português" },
    { title: "11. Automatização de tarefas", description: "Jobs, agendadores, scripts, logs, alertas e idempotência.", channel: "Pesquisa guiada", query: "automatização tarefas banco de dados jobs scheduler DBA aula" },
    { title: "12. Segurança e controle de acesso", description: "Defesa em profundidade, criptografia, auditoria e injeção SQL.", channel: "Pesquisa guiada", query: "segurança banco de dados controle acesso criptografia auditoria injeção SQL aula" },
    { title: "Revisão geral de Administração de Banco", description: "Rotina prática do DBA e integração das 12 unidades.", channel: "Pesquisa guiada", query: "curso administração banco de dados DBA completo português" }
  ],
  practice: [
    { title: "1. Banco ou SGBD?", prompt: "Uma equipe chama o conjunto de tabelas e o PostgreSQL de 'banco de dados' como se fossem a mesma coisa. Como explicar?", answer: `<p class="answer-label">Resposta comentada</p><p>As tabelas e demais dados organizados formam o banco. PostgreSQL é o SGBD que fornece armazenamento, consulta, integridade, transações, segurança, backup e recuperação para administrar esse banco.</p>` },
    { title: "2. Escolha de arquitetura", prompt: "Uma organização possui filiais distantes e precisa continuar atendendo mesmo se o link central falhar. Que pontos avaliar?", answer: `<p class="answer-label">Resposta comentada</p><p>Avaliar distribuição ou réplicas próximas, consistência exigida, conflitos, latência, failover, soberania dos dados, monitoramento e capacidade da equipe. A arquitetura distribuída pode aumentar disponibilidade, mas também eleva complexidade.</p>` },
    { title: "3. Política de manutenção", prompt: "As atualizações são instaladas diretamente em produção, sem agenda nem retorno planejado. O que deve mudar?", answer: `<p class="answer-label">Resposta comentada</p><p>Criar processo com inventário, avaliação de risco, teste em ambiente compatível, aprovação, janela, comunicação, backup quando necessário, critérios de sucesso, rollback, validação e documentação.</p>` },
    { title: "4. Incidente e responsabilidades do DBA", prompt: "O banco está lento e cada equipe culpa a outra. Como o DBA deve conduzir?", answer: `<p class="answer-label">Resposta comentada</p><p>Definir impacto, reunir métricas e mudanças recentes, coordenar desenvolvimento, infraestrutura e segurança, formular hipóteses e testar uma ação por vez. Deve comunicar situação e registrar decisões, sem buscar culpados antes das evidências.</p>` },
    { title: "5. Consulta lenta", prompt: "Uma consulta que antes levava 2 segundos agora leva 40. Qual sequência de diagnóstico usar?", answer: `<p class="answer-label">Resposta comentada</p><p>Comparar plano e métricas com a linha de base, verificar volume, parâmetros, estatísticas, índices, CPU, I/O, memória e bloqueios. Testar a correção em ambiente controlado e medir antes/depois.</p>` },
    { title: "6. Índice em todas as colunas", prompt: "Um desenvolvedor propõe criar índice em todas as colunas para acelerar o sistema. A ideia é adequada?", answer: `<p class="answer-label">Resposta comentada</p><p>Não. Índices atendem padrões específicos de filtro, junção e ordenação. Em excesso, ocupam espaço e aumentam custo de escrita e manutenção. A decisão deve usar consultas reais e planos de execução.</p>` },
    { title: "7. Desligamento urgente", prompt: "É necessário reiniciar o servidor para uma manutenção. Que cuidados tomar antes e depois?", answer: `<p class="answer-label">Resposta comentada</p><p>Confirmar janela, dependências, sessões, transações, replicação e plano de retorno; executar shutdown controlado. Depois, validar logs, recuperação, conexões, consultas, réplicas, jobs e monitoramento.</p>` },
    { title: "8. Espaço crítico", prompt: "O volume possui apenas 8% livre e cresce 2% ao dia. O que fazer?", answer: `<p class="answer-label">Resposta comentada</p><p>Calcular o tempo até o limite, identificar objetos e áreas que crescem, ajustar retenção segura, ampliar capacidade ou reorganizar quando apropriado e criar alertas antecipados. Evitar depender apenas de autoexpansão.</p>` },
    { title: "9. Conta compartilhada", prompt: "Cinco analistas usam o mesmo usuário e senha. Quais riscos e correções?", answer: `<p class="answer-label">Resposta comentada</p><p>Há perda de rastreabilidade, dificuldade de revogação e vazamento de senha. Criar identidades individuais, associá-las a um papel, exigir autenticação adequada, auditar e desativar a conta compartilhada de forma planejada.</p>` },
    { title: "10. Usuário desligado", prompt: "Um funcionário saiu da organização, mas sua conta ainda acessa produção. Qual procedimento?", answer: `<p class="answer-label">Resposta comentada</p><p>Bloquear imediatamente conforme o processo de desligamento, revisar sessões, chaves e acessos associados, transferir propriedade quando necessário, preservar auditoria e investigar uso posterior à saída.</p>` },
    { title: "11. Privilégio excessivo", prompt: "Uma aplicação que apenas lê relatórios utiliza conta administradora. Como corrigir?", answer: `<p class="answer-label">Resposta comentada</p><p>Criar conta de serviço própria, papel somente leitura nos objetos necessários, proteger e rotacionar o segredo, testar a aplicação e revogar o acesso administrativo. Aplicar necessidade de saber e menor privilégio.</p>` },
    { title: "12. Papel por função", prompt: "Como organizar acesso de analistas que precisam apenas consultar três visões?", answer: `<p class="answer-label">Resposta comentada</p><p>Criar um papel com SELECT somente nessas visões, associar os analistas ao papel e revisar periodicamente. Evitar permissões diretas dispersas e acesso às tabelas de origem sem necessidade.</p>` },
    { title: "13. Plano de backup", prompt: "A organização aceita perder no máximo 15 minutos e precisa voltar em duas horas. O que isso representa?", answer: `<p class="answer-label">Resposta comentada</p><p>RPO de 15 minutos e RTO de 2 horas. A estratégia deve ter cópias e logs com frequência suficiente, infraestrutura e procedimento capazes de restaurar no prazo, além de testes que comprovem esses objetivos.</p>` },
    { title: "14. Backup nunca restaurado", prompt: "Os relatórios mostram sucesso diário, mas ninguém fez restauração em um ano. O ambiente está protegido?", answer: `<p class="answer-label">Resposta comentada</p><p>Não há comprovação. Deve-se realizar restauração controlada, validar consistência e aplicação, medir tempo real, documentar dificuldades e ajustar retenção, permissões e procedimento.</p>` },
    { title: "15. Job silencioso", prompt: "O job de backup falhou por cinco dias sem que ninguém percebesse. Como melhorar a automação?", answer: `<p class="answer-label">Resposta comentada</p><p>Registrar resultados, criar alertas acionáveis, definir responsável e escalonamento, limitar tentativas, monitorar ausência de execução e documentar recuperação. Automação sem observabilidade apenas automatiza a falha.</p>` },
    { title: "16. Entrada vulnerável", prompt: "Uma aplicação monta SQL concatenando o texto digitado pelo usuário. Qual é o risco e a correção?", answer: `<p class="answer-label">Resposta comentada</p><p>Há risco de injeção SQL. Usar consultas parametrizadas, validar entrada, limitar privilégios da conta, proteger mensagens de erro, monitorar eventos e revisar outros pontos semelhantes no código.</p>` }
  ]
};

window.STUDY_CONTENT = {
  subjects: window.STUDY_SUBJECTS,
  ...window.STUDY_SUBJECTS.etica
};
