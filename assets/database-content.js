window.STUDY_SUBJECTS.banco = {
  shortTitle: "Banco de Dados",
  title: "Banco de Dados Relacional",
  description: "Do modelo conceitual ao SQL: aprenda a projetar, consultar, proteger e controlar dados relacionais.",
  planTitle: "Banco de Dados Relacional em 14 dias",
  planDescription: "Trilha baseada no plano de ensino da UNIFSA: conceitos, MER, normalização, SQL, controle e transações.",
  summaryTitle: "Curso completo de Banco de Dados Relacional",
  summaryDescription: "Treze módulos com exemplos, comandos SQL, comparações e pontos que costumam aparecer em prova.",
  videoDescription: "Curso e videoaulas selecionadas sobre modelagem, normalização, SQL, constraints e transações.",
  notePlaceholder: "Exemplo: PRIMARY KEY identifica uma linha; FOREIGN KEY referencia uma chave de outra tabela e mantém integridade referencial...",
  studyTips: ["Escreva a definição e um exemplo de tabela.", "Digite o comando SQL sem copiar.", "Explique o resultado esperado antes de executar."],
  practiceTitle: "Laboratório de Banco de Dados",
  practiceDescription: "Use o pequeno banco acadêmico abaixo para resolver exercícios de modelagem e SQL.",
  practiceIntro: `<h3>Banco usado nos exercícios</h3><p>Imagine um sistema acadêmico com três tabelas. Leia o esquema antes de abrir as respostas.</p><pre><code>ALUNO (id_aluno PK, nome, email UNIQUE, cidade)
CURSO (id_curso PK, nome, carga_horaria)
MATRICULA (id_matricula PK, id_aluno FK,
           id_curso FK, data_matricula, nota)</code></pre><p><strong>MATRICULA</strong> resolve a relação muitos-para-muitos: um aluno pode cursar vários cursos e cada curso pode receber vários alunos.</p>`,
  plan: [
    { day: 1, title: "Dados, informação e banco de dados", task: "Aprenda conceitos básicos, vantagens do banco e diferença entre dado e informação." },
    { day: 2, title: "SGBD e arquitetura", task: "Estude funções do SGBD, usuários, catálogo, independência e modelos de dados." },
    { day: 3, title: "Modelo relacional", task: "Revise relação, tupla, atributo, domínio, grau, cardinalidade e valor nulo." },
    { day: 4, title: "Chaves e integridade", task: "Compare superchave, chave candidata, primária, alternativa e estrangeira." },
    { day: 5, title: "Modelo Entidade-Relacionamento", task: "Estude entidades, atributos, relacionamentos, cardinalidade e participação." },
    { day: 6, title: "Do conceitual ao lógico", task: "Mapeie entidades e relacionamentos 1:1, 1:N e N:N para tabelas." },
    { day: 7, title: "Normalização", task: "Estude anomalias, dependências funcionais, 1FN, 2FN e 3FN. Faça a revisão." },
    { day: 8, title: "SQL e DDL", task: "Pratique CREATE DATABASE, CREATE TABLE, ALTER e DROP com tipos de dados." },
    { day: 9, title: "Constraints", task: "Use PRIMARY KEY, FOREIGN KEY, NOT NULL, UNIQUE, CHECK e DEFAULT." },
    { day: 10, title: "DML", task: "Pratique INSERT, UPDATE e DELETE, observando filtros e integridade." },
    { day: 11, title: "DQL e operadores", task: "Pratique SELECT, WHERE, DISTINCT, LIKE, IN, BETWEEN, IS NULL e ORDER BY." },
    { day: 12, title: "Agregações e JOINs", task: "Estude COUNT, SUM, AVG, GROUP BY, HAVING, INNER e LEFT JOIN." },
    { day: 13, title: "DCL, TCL e transações", task: "Revise GRANT, REVOKE, COMMIT, ROLLBACK, SAVEPOINT e propriedades ACID." },
    { day: 14, title: "Projeto e revisão final", task: "Modele um sistema, escreva tabelas, resolva o laboratório e faça o simulado." }
  ],
  summaries: [
    {
      title: "Dados, informação e banco de dados",
      subtitle: "Conceitos fundamentais e finalidade",
      html: `<p><strong>Dado</strong> é um fato registrado sem interpretação completa, como <code>8,5</code>. <strong>Informação</strong> é o dado contextualizado: “a nota final de Ana foi 8,5”. Um <strong>banco de dados</strong> é uma coleção organizada de dados relacionados, criada para representar parte do mundo real e atender necessidades.</p>
      <h4>Por que usar um banco?</h4><ul><li>Reduzir redundância descontrolada e inconsistência.</li><li>Compartilhar dados com controle de acesso.</li><li>Aplicar regras de integridade.</li><li>Recuperar informações com rapidez.</li><li>Realizar backup, recuperação e controle de concorrência.</li></ul>
      <h4>Banco x arquivos isolados</h4><p>Arquivos isolados tendem a duplicar dados e espalhar regras. O banco centraliza a estrutura e permite que um SGBD controle armazenamento, segurança, transações e consultas.</p>
      <p><strong>Atenção:</strong> banco de dados é o conjunto de dados; SGBD é o software que o gerencia.</p>`
    },
    {
      title: "SGBD, usuários e arquitetura",
      subtitle: "O software que administra o banco",
      html: `<p>Um <strong>Sistema Gerenciador de Banco de Dados</strong> oferece mecanismos para definir, armazenar, consultar, modificar, proteger e recuperar dados. Exemplos: PostgreSQL, MySQL, Oracle Database e SQL Server.</p>
      <h4>Funções principais</h4><ul><li>Processamento e otimização de consultas.</li><li>Controle de concorrência e transações.</li><li>Autorização, auditoria, backup e recuperação.</li><li>Catálogo de metadados, que descreve tabelas, colunas e restrições.</li></ul>
      <h4>Usuários</h4><ul><li><strong>DBA:</strong> segurança, disponibilidade e desempenho.</li><li><strong>Projetista:</strong> modela dados e regras.</li><li><strong>Desenvolvedor:</strong> cria aplicações e consultas.</li><li><strong>Usuário final:</strong> acessa por sistemas e relatórios.</li></ul>
      <p><strong>Independência de dados</strong> é alterar armazenamento ou estrutura com menor impacto sobre os programas.</p>`
    },
    {
      title: "Modelo relacional",
      subtitle: "Relações, tuplas, atributos e domínios",
      html: `<p>No modelo relacional, dados são representados por <strong>relações</strong>, normalmente visualizadas como tabelas.</p>
      <table class="comparison"><thead><tr><th>Termo</th><th>Significado</th></tr></thead><tbody><tr><td>Relação</td><td>Estrutura lógica correspondente à tabela.</td></tr><tr><td>Tupla</td><td>Linha ou ocorrência registrada.</td></tr><tr><td>Atributo</td><td>Coluna que representa uma característica.</td></tr><tr><td>Domínio</td><td>Conjunto de valores válidos.</td></tr><tr><td>Grau</td><td>Quantidade de atributos.</td></tr><tr><td>Cardinalidade</td><td>Quantidade de tuplas.</td></tr></tbody></table>
      <h4>Propriedades</h4><p>Cada célula deve ter valor atômico; tuplas precisam ser distinguíveis; valores pertencem a um domínio; e a ordem das linhas não é garantida sem <code>ORDER BY</code>.</p>
      <p><strong>NULL</strong> representa valor ausente, desconhecido ou não aplicável. Não é zero nem texto vazio.</p>`
    },
    {
      title: "Chaves e integridade",
      subtitle: "Identificação e relacionamento entre tabelas",
      html: `<table class="comparison"><thead><tr><th>Chave</th><th>Função</th></tr></thead><tbody><tr><td>Superchave</td><td>Identifica uma tupla, ainda que tenha atributos excedentes.</td></tr><tr><td>Candidata</td><td>Superchave mínima.</td></tr><tr><td>Primária (PK)</td><td>Candidata escolhida; única e não nula.</td></tr><tr><td>Alternativa</td><td>Candidata não escolhida como primária.</td></tr><tr><td>Estrangeira (FK)</td><td>Referencia chave de outra tabela.</td></tr><tr><td>Composta</td><td>Formada por mais de um atributo.</td></tr></tbody></table>
      <h4>Integridade</h4><ul><li><strong>Entidade:</strong> PK única e não nula.</li><li><strong>Referencial:</strong> FK aponta para valor existente ou é nula quando permitido.</li><li><strong>Domínio:</strong> valores respeitam tipo e regras.</li></ul>
      <p>Ações <code>CASCADE</code>, <code>RESTRICT</code> e <code>SET NULL</code> devem refletir a regra de negócio.</p>`
    },
    {
      title: "Modelo Entidade-Relacionamento",
      subtitle: "Entidades, atributos, relacionamentos e cardinalidades",
      html: `<p>O <strong>MER</strong> descreve objetos do domínio e suas associações sem depender de um SGBD. O diagrama costuma ser chamado DER.</p>
      <h4>Elementos</h4><ul><li><strong>Entidade:</strong> objeto distinguível, como Aluno.</li><li><strong>Atributo:</strong> propriedade, como nome ou data.</li><li><strong>Relacionamento:</strong> associação, como Aluno realiza Matrícula.</li></ul>
      <h4>Atributos</h4><p>Podem ser simples ou compostos; monovalorados ou multivalorados; armazenados ou derivados; identificadores ou descritivos. Atributo multivalorado geralmente vira outra tabela.</p>
      <h4>Cardinalidade</h4><ul><li><strong>1:1:</strong> uma ocorrência se associa a no máximo uma da outra entidade.</li><li><strong>1:N:</strong> uma do lado 1 pode se associar a várias do lado N.</li><li><strong>N:N:</strong> várias de ambos os lados; exige tabela associativa.</li></ul>
      <p>Participação total indica obrigatoriedade; parcial indica opcionalidade.</p>`
    },
    {
      title: "Modelos conceitual, lógico e físico",
      subtitle: "Do problema real à implementação",
      html: `<table class="comparison"><thead><tr><th>Nível</th><th>Foco</th><th>Elementos</th></tr></thead><tbody><tr><td>Conceitual</td><td>Negócio</td><td>Entidades, atributos, relacionamentos e regras.</td></tr><tr><td>Lógico</td><td>Modelo relacional</td><td>Tabelas, colunas, PKs, FKs e normalização.</td></tr><tr><td>Físico</td><td>Implementação</td><td>Tipos específicos, índices, armazenamento e scripts.</td></tr></tbody></table>
      <h4>Mapeamento</h4><ul><li>Entidade forte normalmente vira tabela.</li><li>Atributo simples vira coluna.</li><li>Relacionamento 1:N leva a FK ao lado N.</li><li>Relacionamento N:N vira tabela associativa.</li><li>Atributo multivalorado vira nova tabela.</li></ul>
      <p>Valide o modelo com regras de negócio e exemplos antes de implementar.</p>`
    },
    {
      title: "Normalização de dados",
      subtitle: "Anomalias, dependências e formas normais",
      html: `<p><strong>Normalização</strong> organiza relações para reduzir redundâncias prejudiciais e anomalias de inserção, atualização e exclusão.</p>
      <h4>Anomalias</h4><ul><li><strong>Inserção:</strong> não se registra um fato sem outro desnecessário.</li><li><strong>Atualização:</strong> o mesmo valor precisa mudar em várias linhas.</li><li><strong>Exclusão:</strong> apagar uma linha remove informação que deveria permanecer.</li></ul>
      <h4>Formas normais</h4><ul><li><strong>1FN:</strong> valores atômicos e sem grupos repetitivos.</li><li><strong>2FN:</strong> 1FN e cada atributo não-chave depende da chave completa.</li><li><strong>3FN:</strong> 2FN e sem dependência transitiva de atributo não-chave.</li></ul>
      <p><strong>Memorização:</strong> 1FN elimina grupos; 2FN dependência parcial; 3FN dependência transitiva.</p>`
    },
    {
      title: "SQL, categorias e tipos de dados",
      subtitle: "A linguagem dos bancos relacionais",
      html: `<p><strong>SQL</strong> é linguagem declarativa: informa-se o resultado desejado e o SGBD escolhe o plano de execução.</p>
      <table class="comparison"><thead><tr><th>Categoria</th><th>Finalidade</th><th>Comandos</th></tr></thead><tbody><tr><td>DDL</td><td>Definir estruturas</td><td>CREATE, ALTER, DROP</td></tr><tr><td>DML</td><td>Modificar dados</td><td>INSERT, UPDATE, DELETE</td></tr><tr><td>DQL</td><td>Consultar</td><td>SELECT</td></tr><tr><td>DCL</td><td>Controlar acesso</td><td>GRANT, REVOKE</td></tr><tr><td>TCL</td><td>Controlar transações</td><td>COMMIT, ROLLBACK, SAVEPOINT</td></tr></tbody></table>
      <p>Tipos comuns incluem inteiros, decimais, caracteres, texto, data/hora e booleanos. O tipo deve corresponder ao significado e à faixa dos valores.</p>`
    },
    {
      title: "DDL e criação de estruturas",
      subtitle: "CREATE, ALTER, DROP e TRUNCATE",
      html: `<pre><code>CREATE TABLE aluno (
  id_aluno INTEGER PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  email VARCHAR(180) UNIQUE,
  nascimento DATE
);

ALTER TABLE aluno ADD COLUMN cidade VARCHAR(80);
DROP TABLE aluno;</code></pre>
      <ul><li><code>CREATE</code>: cria objeto.</li><li><code>ALTER</code>: modifica estrutura.</li><li><code>DROP</code>: remove objeto e dados.</li><li><code>TRUNCATE</code>: remove linhas preservando a estrutura, com comportamento dependente do SGBD.</li></ul>
      <p>Defina nomes claros, tipos adequados e constraints junto da estrutura.</p>`
    },
    {
      title: "Constraints no SQL",
      subtitle: "Regras aplicadas pelo próprio SGBD",
      html: `<p><strong>Constraints</strong> impedem dados inválidos de entrar no banco.</p><pre><code>CREATE TABLE matricula (
  id_matricula INTEGER PRIMARY KEY,
  id_aluno INTEGER NOT NULL,
  id_curso INTEGER NOT NULL,
  nota DECIMAL(4,2) CHECK (nota BETWEEN 0 AND 10),
  status VARCHAR(20) DEFAULT 'ativa',
  UNIQUE (id_aluno, id_curso),
  FOREIGN KEY (id_aluno) REFERENCES aluno(id_aluno),
  FOREIGN KEY (id_curso) REFERENCES curso(id_curso)
);</code></pre>
      <ul><li><code>NOT NULL</code>: exige valor.</li><li><code>UNIQUE</code>: impede repetição.</li><li><code>PRIMARY KEY</code>: identifica a linha.</li><li><code>FOREIGN KEY</code>: mantém referência.</li><li><code>CHECK</code>: valida condição.</li><li><code>DEFAULT</code>: fornece padrão quando omitido.</li></ul>`
    },
    {
      title: "DML: inserir, atualizar e excluir",
      subtitle: "INSERT, UPDATE e DELETE",
      html: `<pre><code>INSERT INTO aluno (id_aluno, nome, email)
VALUES (1, 'Ana Lima', 'ana@email.com');

UPDATE aluno
SET cidade = 'Teresina'
WHERE id_aluno = 1;

DELETE FROM aluno
WHERE id_aluno = 1;</code></pre>
      <p><strong>Cuidado:</strong> <code>UPDATE</code> ou <code>DELETE</code> sem <code>WHERE</code> pode afetar todas as linhas. Em operação crítica, execute antes um <code>SELECT</code> com o mesmo filtro e use transação.</p>
      <p>Modificações também precisam satisfazer constraints e integridade referencial.</p>`
    },
    {
      title: "DQL: filtros, agregação e JOIN",
      subtitle: "SELECT, operadores, grupos e combinação de tabelas",
      html: `<pre><code>SELECT a.nome, c.nome AS curso, m.nota
FROM matricula m
JOIN aluno a ON a.id_aluno = m.id_aluno
JOIN curso c ON c.id_curso = m.id_curso
WHERE m.nota >= 7
ORDER BY a.nome;</code></pre>
      <h4>Cláusulas</h4><ul><li><code>SELECT</code> escolhe colunas; <code>FROM</code> indica fontes.</li><li><code>WHERE</code> filtra linhas.</li><li><code>GROUP BY</code> forma grupos; <code>HAVING</code> filtra grupos.</li><li><code>ORDER BY</code> ordena.</li></ul>
      <h4>Operadores</h4><p>Comparação, <code>AND/OR/NOT</code>, <code>LIKE</code>, <code>IN</code>, <code>BETWEEN</code> e <code>IS NULL</code>. Agregações: <code>COUNT, SUM, AVG, MIN, MAX</code>.</p>
      <p><code>INNER JOIN</code> retorna correspondências; <code>LEFT JOIN</code> preserva todas as linhas da tabela à esquerda.</p>`
    },
    {
      title: "DCL, TCL e transações",
      subtitle: "Segurança, COMMIT, ROLLBACK e ACID",
      html: `<p>A <strong>DCL</strong> controla privilégios. <code>GRANT</code> concede e <code>REVOKE</code> remove. Aplique o menor privilégio: apenas o acesso necessário.</p>
      <pre><code>START TRANSACTION;
UPDATE conta SET saldo = saldo - 100 WHERE id = 1;
UPDATE conta SET saldo = saldo + 100 WHERE id = 2;
COMMIT;
-- ROLLBACK; desfaz antes do commit</code></pre>
      <h4>ACID</h4><ul><li><strong>Atomicidade:</strong> todas as operações ou nenhuma.</li><li><strong>Consistência:</strong> regras permanecem válidas.</li><li><strong>Isolamento:</strong> concorrência sem interferência incorreta.</li><li><strong>Durabilidade:</strong> após commit, a mudança persiste.</li></ul>
      <p><code>SAVEPOINT</code> marca ponto para rollback parcial, conforme o SGBD.</p>`
    }
  ],
  flashcards: [
    ["Qual é a diferença entre dado e informação?", "Dado é fato bruto; informação é dado contextualizado e interpretado."],
    ["O que é banco de dados?", "Coleção organizada de dados relacionados que representa um domínio."],
    ["Banco de dados e SGBD são iguais?", "Não. O banco é o conjunto de dados; o SGBD é o software gerenciador."],
    ["Cite três funções do SGBD.", "Consultas, integridade, segurança, transações, concorrência, backup ou recuperação."],
    ["O que são metadados?", "Dados que descrevem tabelas, colunas, tipos e restrições."],
    ["Qual é o papel do DBA?", "Administrar segurança, disponibilidade, desempenho, backup e manutenção."],
    ["O que é uma relação?", "Estrutura lógica do modelo relacional, visualizada como tabela."],
    ["O que é uma tupla?", "Uma linha ou ocorrência da relação."],
    ["O que é um atributo?", "Coluna ou característica representada na relação."],
    ["O que é domínio?", "Conjunto de valores válidos para um atributo."],
    ["O que é grau?", "Quantidade de atributos da relação."],
    ["NULL é igual a zero?", "Não. Representa ausência, desconhecimento ou não aplicabilidade."],
    ["O que é superchave?", "Conjunto de atributos que identifica uma tupla, podendo ter excedentes."],
    ["O que é chave candidata?", "Superchave mínima."],
    ["O que é chave primária?", "Chave candidata escolhida, única e não nula."],
    ["O que é chave estrangeira?", "Atributo que referencia chave de outra tabela."],
    ["O que é integridade de entidade?", "A PK deve ser única e não nula."],
    ["O que é integridade referencial?", "A FK aponta para valor existente ou é nula quando permitido."],
    ["O que é entidade no MER?", "Objeto distinguível do domínio, como Aluno ou Curso."],
    ["O que é cardinalidade 1:N?", "Uma ocorrência do lado 1 se relaciona a várias do lado N."],
    ["Como mapear N:N?", "Criar tabela associativa com FKs das entidades."],
    ["Conceitual x lógico?", "Conceitual representa o negócio; lógico traduz para tabelas e chaves."],
    ["O que é normalização?", "Organização de relações para reduzir redundância e anomalias."],
    ["O que exige a 1FN?", "Valores atômicos e ausência de grupos repetitivos."],
    ["O que elimina a 2FN?", "Dependências parciais de chave composta."],
    ["O que elimina a 3FN?", "Dependências transitivas entre atributos não-chave."],
    ["O que é DDL?", "Definição de estruturas: CREATE, ALTER e DROP."],
    ["O que é DML?", "Manipulação de dados: INSERT, UPDATE e DELETE."],
    ["O que é DQL?", "Consulta de dados, principalmente SELECT."],
    ["O que é DCL?", "Controle de acesso: GRANT e REVOKE."],
    ["O que é TCL?", "Controle de transações: COMMIT, ROLLBACK e SAVEPOINT."],
    ["WHERE x HAVING?", "WHERE filtra linhas; HAVING filtra grupos."],
    ["Para que serve ORDER BY?", "Ordenar explicitamente o resultado."],
    ["INNER x LEFT JOIN?", "INNER retorna correspondências; LEFT preserva todas as linhas da esquerda."],
    ["O que significa ACID?", "Atomicidade, Consistência, Isolamento e Durabilidade."],
    ["COMMIT x ROLLBACK?", "COMMIT confirma; ROLLBACK desfaz alterações não confirmadas."]
  ],
  quiz: [
    { q: "Um dado torna-se informação quando:", o: ["É apagado", "Recebe contexto e interpretação", "É duplicado", "É criptografado"], a: 1, e: "Informação é dado com significado." },
    { q: "SGBD é:", o: ["Uma tabela", "Software que gerencia bancos", "Tipo de coluna", "Consulta"], a: 1, e: "Controla definição, acesso, segurança e recuperação." },
    { q: "Uma vantagem do SGBD é:", o: ["Aumentar inconsistência", "Aplicar integridade e acesso", "Eliminar consultas", "Impedir backup"], a: 1, e: "Regras e segurança são funções essenciais." },
    { q: "Metadados descrevem:", o: ["Só usuários", "Estruturas dos dados", "Só senhas", "A rede"], a: 1, e: "O catálogo registra tabelas, colunas, tipos e constraints." },
    { q: "Uma tupla corresponde a:", o: ["Tabela", "Linha", "Coluna", "Banco"], a: 1, e: "Tupla é uma ocorrência da relação." },
    { q: "Domínio é:", o: ["Nome da tabela", "Conjunto de valores válidos", "Quantidade de linhas", "Uma FK"], a: 1, e: "Define valores possíveis." },
    { q: "O grau de uma relação é:", o: ["Número de linhas", "Número de atributos", "Número de usuários", "Número de índices"], a: 1, e: "Grau mede atributos." },
    { q: "Sobre NULL:", o: ["É sempre zero", "Pode ser desconhecido", "É texto vazio", "É falso"], a: 1, e: "NULL não equivale a zero ou vazio." },
    { q: "Chave candidata é:", o: ["Superchave mínima", "Qualquer FK", "Coluna repetida", "Tabela associativa"], a: 0, e: "Identifica sem atributos excedentes." },
    { q: "A PRIMARY KEY:", o: ["Aceita duplicados", "Pode ser nula", "Identifica cada linha", "Só ordena"], a: 2, e: "É única e não nula." },
    { q: "A FOREIGN KEY:", o: ["Criptografa", "Relaciona tabelas", "Soma colunas", "Remove duplicatas"], a: 1, e: "Aponta para chave válida." },
    { q: "Integridade referencial impede:", o: ["Ordenação", "Referência inexistente", "SELECT", "Índice"], a: 1, e: "Uma FK não deve apontar para linha inexistente." },
    { q: "No MER, entidade é:", o: ["Comando SQL", "Objeto do domínio", "JOIN", "Transação"], a: 1, e: "Representa objeto ou conceito relevante." },
    { q: "Relacionamento N:N vira:", o: ["Coluna texto", "Tabela associativa", "Índice simples", "NULL"], a: 1, e: "Ela armazena FKs dos dois lados." },
    { q: "No 1:N, a FK normalmente fica:", o: ["No lado N", "No lado 1", "Fora", "Em ambos"], a: 0, e: "Cada linha do lado N referencia o lado 1." },
    { q: "Modelo conceitual foca:", o: ["Tipos do SGBD", "Regras do negócio", "Arquivos físicos", "Backup"], a: 1, e: "É independente de implementação." },
    { q: "Modelo físico inclui:", o: ["Só entidades", "Tipos específicos e índices", "Regras verbais", "Nenhuma tecnologia"], a: 1, e: "Materializa no SGBD." },
    { q: "Normalização busca reduzir:", o: ["Segurança", "Redundância e anomalias", "Consultas", "Tipos"], a: 1, e: "Organiza dependências." },
    { q: "Anomalia de atualização ocorre quando:", o: ["O mesmo fato muda em várias linhas", "Uma consulta ordena", "Uma chave é única", "Há login"], a: 0, e: "Redundância pode gerar inconsistência." },
    { q: "A 1FN exige:", o: ["Valores atômicos", "Ausência de FK", "Uma coluna", "Chave composta"], a: 0, e: "Elimina grupos repetitivos." },
    { q: "A 2FN trata de:", o: ["Dependência parcial", "Permissões", "Transações", "Ordenação"], a: 0, e: "Atributos não-chave dependem da chave inteira." },
    { q: "A 3FN elimina:", o: ["Todas as chaves", "Dependência transitiva", "Consultas", "Domínios"], a: 1, e: "Não-chave não deve depender de outro não-chave." },
    { q: "Qual é DDL?", o: ["CREATE TABLE", "SELECT", "COMMIT", "GRANT"], a: 0, e: "CREATE define estrutura." },
    { q: "ALTER TABLE:", o: ["Consulta", "Modifica estrutura", "Confirma transação", "Concede acesso"], a: 1, e: "ALTER modifica objeto existente." },
    { q: "Qual impede nulo?", o: ["UNIQUE", "NOT NULL", "DEFAULT", "CHECK sempre"], a: 1, e: "NOT NULL exige valor." },
    { q: "UNIQUE garante:", o: ["Padrão", "Não repetição", "Relacionamento", "Rollback"], a: 1, e: "Impõe unicidade." },
    { q: "CHECK serve para:", o: ["Validar condição", "Criar usuário", "Ordenar", "Somar"], a: 0, e: "Restringe valores por expressão." },
    { q: "INSERT:", o: ["Adiciona linhas", "Remove tabela", "Concede privilégios", "Desfaz"], a: 0, e: "Insere novas tuplas." },
    { q: "UPDATE sem WHERE pode:", o: ["Não fazer nada", "Alterar todas as linhas", "Excluir tabela", "Criar índice"], a: 1, e: "O filtro define as linhas." },
    { q: "DELETE FROM aluno WHERE id=5:", o: ["Remove tabela", "Remove a linha", "Apaga coluna", "Confirma"], a: 1, e: "DELETE remove linhas." },
    { q: "WHERE é aplicado:", o: ["Depois de HAVING", "Às linhas antes do grupo", "Só à ordem", "A permissões"], a: 1, e: "Filtra registros de entrada." },
    { q: "HAVING filtra:", o: ["Grupos agregados", "Tabelas", "Permissões", "Transações"], a: 0, e: "Atua após GROUP BY." },
    { q: "COUNT(*) retorna:", o: ["Média", "Quantidade de linhas", "Máximo", "Soma"], a: 1, e: "COUNT conta ocorrências." },
    { q: "INNER JOIN retorna:", o: ["Todas da esquerda", "Somente correspondências", "Só nulos", "Tabela física"], a: 1, e: "Exige correspondência." },
    { q: "LEFT JOIN retorna:", o: ["Só correspondências", "Todas da esquerda e correspondências", "Só direita", "Sem nulos"], a: 1, e: "Sem correspondência, a direita aparece NULL." },
    { q: "Atomicidade significa:", o: ["Tudo ou nada", "Mais velocidade", "Só leitura", "Acesso público"], a: 0, e: "A transação não fica parcial." },
    { q: "COMMIT:", o: ["Desfaz", "Confirma", "Cria tabela", "Revoga"], a: 1, e: "Torna alterações definitivas." },
    { q: "ROLLBACK:", o: ["Ordena", "Desfaz não confirmadas", "Concede", "Cria chave"], a: 1, e: "Retorna ao estado anterior." },
    { q: "GRANT e REVOKE são:", o: ["DDL", "DCL", "DQL", "TCL"], a: 1, e: "Controlam privilégios." },
    { q: "Menor privilégio significa:", o: ["Todos admins", "Só acesso necessário", "Sem backup", "Tudo público"], a: 1, e: "Reduz riscos." }
  ],
  videos: [
    { title: "O que é um Banco de Dados?", description: "Modelos, relacional e SQL.", channel: "Curso em Vídeo", url: "https://www.youtube.com/watch?v=Ofktsne-utM" },
    { title: "Curso completo de Modelagem", description: "Modelagem relacional com projeto prático.", channel: "Bóson Treinamentos", url: "https://www.youtube.com/watch?v=Kd1yqYjylCg" },
    { title: "Modelo Entidade-Relacionamento", description: "Entidades, relacionamentos e modelo.", channel: "Bóson Treinamentos", url: "https://www.youtube.com/watch?v=W2Z1STnjNJo" },
    { title: "Atributos e relacionamentos", description: "Tipos de atributo e conceitos do MER.", channel: "Bóson Treinamentos", url: "https://www.youtube.com/watch?v=fwW-D3FlHRc" },
    { title: "Normalização - 1FN", description: "Primeira forma normal.", channel: "Bóson Treinamentos", url: "https://www.youtube.com/watch?v=eRaAMNjCFYw" },
    { title: "Normalização - 2FN", description: "Dependências parciais.", channel: "Bóson Treinamentos", url: "https://www.youtube.com/watch?v=6ER9lWOk-cY" },
    { title: "Normalização - 3FN", description: "Dependências transitivas.", channel: "Bóson Treinamentos", url: "https://www.youtube.com/watch?v=usA8QKvEHWw" },
    { title: "Curso SQL completo", description: "SELECT, filtros, JOINs, DML e constraints.", channel: "Dev Aprender", url: "https://www.youtube.com/watch?v=G7bMwefn8RQ" },
    { title: "SELECT, WHERE, GROUP BY e JOIN", description: "SQL do zero com exemplos.", channel: "Leonardo Bissoli", url: "https://www.youtube.com/watch?v=G7bMwefn8RQ" },
    { title: "WHERE x HAVING", description: "Filtros de linhas e grupos.", channel: "Hashtag Programação", url: "https://www.youtube.com/watch?v=_6VJrz7iyps" },
    { title: "COMMIT e ROLLBACK", description: "Transações no MySQL.", channel: "Bóson Treinamentos", url: "https://www.youtube.com/watch?v=jfvnHWVJz-E" },
    { title: "Constraints em SQL", description: "PK, FK, UNIQUE, NOT NULL e CHECK.", channel: "Pesquisa guiada", query: "SQL constraints primary foreign key unique not null check português" }
  ],
  practice: [
    { title: "Identifique as chaves", prompt: "No esquema ALUNO, CURSO e MATRICULA, quais são as chaves primárias e estrangeiras?", answer: `<p class="answer-label">Resposta</p><p>PKs: <code>ALUNO.id_aluno</code>, <code>CURSO.id_curso</code> e <code>MATRICULA.id_matricula</code>. FKs: <code>MATRICULA.id_aluno</code> e <code>MATRICULA.id_curso</code>.</p>` },
    { title: "Explique a tabela associativa", prompt: "Por que MATRICULA é necessária em vez de colocar id_curso em ALUNO?", answer: `<p class="answer-label">Resposta</p><p>A relação é N:N. MATRICULA transforma-a em dois relacionamentos 1:N e armazena dados do vínculo, como data e nota.</p>` },
    { title: "Crie a tabela CURSO", prompt: "Escreva o DDL com id inteiro, nome obrigatório e carga horária positiva.", answer: `<p class="answer-label">Uma solução</p><pre><code>CREATE TABLE curso (
  id_curso INTEGER PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  carga_horaria INTEGER NOT NULL
    CHECK (carga_horaria > 0)
);</code></pre>` },
    { title: "Insira um aluno", prompt: "Insira Ana Lima, ana@email.com, Teresina, com id 1.", answer: `<p class="answer-label">Uma solução</p><pre><code>INSERT INTO aluno (id_aluno, nome, email, cidade)
VALUES (1, 'Ana Lima', 'ana@email.com', 'Teresina');</code></pre>` },
    { title: "Liste todos os alunos", prompt: "Mostre nome e cidade em ordem alfabética.", answer: `<p class="answer-label">Uma solução</p><pre><code>SELECT nome, cidade
FROM aluno
ORDER BY nome ASC;</code></pre>` },
    { title: "Filtre por cidade", prompt: "Liste os alunos de Teresina.", answer: `<p class="answer-label">Uma solução</p><pre><code>SELECT *
FROM aluno
WHERE cidade = 'Teresina';</code></pre>` },
    { title: "Busca pelo nome", prompt: "Encontre alunos cujo nome começa com Maria.", answer: `<p class="answer-label">Uma solução</p><pre><code>SELECT *
FROM aluno
WHERE nome LIKE 'Maria%';</code></pre>` },
    { title: "Atualize uma nota", prompt: "Altere para 8,5 a nota da matrícula id 10.", answer: `<p class="answer-label">Uma solução</p><pre><code>UPDATE matricula
SET nota = 8.5
WHERE id_matricula = 10;</code></pre><p>Sem WHERE, todas as notas seriam alteradas.</p>` },
    { title: "Conte matrículas", prompt: "Mostre id do curso e quantidade de matrículas.", answer: `<p class="answer-label">Uma solução</p><pre><code>SELECT id_curso, COUNT(*) AS quantidade
FROM matricula
GROUP BY id_curso;</code></pre>` },
    { title: "Filtre grupos", prompt: "Mostre cursos com pelo menos 10 matrículas.", answer: `<p class="answer-label">Uma solução</p><pre><code>SELECT id_curso, COUNT(*) AS quantidade
FROM matricula
GROUP BY id_curso
HAVING COUNT(*) >= 10;</code></pre>` },
    { title: "Junte aluno e curso", prompt: "Mostre nome do aluno e nome do curso de cada matrícula.", answer: `<p class="answer-label">Uma solução</p><pre><code>SELECT a.nome AS aluno, c.nome AS curso
FROM matricula m
JOIN aluno a ON a.id_aluno = m.id_aluno
JOIN curso c ON c.id_curso = m.id_curso;</code></pre>` },
    { title: "Alunos sem matrícula", prompt: "Liste alunos que ainda não possuem matrícula.", answer: `<p class="answer-label">Uma solução</p><pre><code>SELECT a.*
FROM aluno a
LEFT JOIN matricula m
  ON m.id_aluno = a.id_aluno
WHERE m.id_matricula IS NULL;</code></pre>` },
    { title: "Proteja uma atualização", prompt: "Como atualizar notas com possibilidade de desfazer?", answer: `<p class="answer-label">Uma solução</p><pre><code>START TRANSACTION;
UPDATE matricula SET nota = nota + 0.5
WHERE nota < 9.5;
-- confira os dados
COMMIT;
-- ou ROLLBACK;</code></pre>` },
    { title: "Normalize uma tabela", prompt: "Uma tabela repete nome_aluno e nome_curso em cada matrícula. Como separar?", answer: `<p class="answer-label">Resposta</p><p>Crie ALUNO, CURSO e MATRICULA. Dados do aluno dependem de id_aluno, dados do curso de id_curso e nota depende do vínculo entre aluno e curso.</p>` }
  ]
};

window.STUDY_CONTENT = {
  subjects: window.STUDY_SUBJECTS,
  ...window.STUDY_SUBJECTS.etica
};
