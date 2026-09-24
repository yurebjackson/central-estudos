# Central de Estudos v6

Site estático para GitHub Pages com autenticação e sincronização pelo Supabase.

## O que já está pronto

- Cadastro, login, recuperação de senha e encerramento de sessão.
- Duas disciplinas independentes: Ética e Cidadania e Administração de Banco de Dados.
- Progresso de cada plano de 14 dias salvo por usuário e por disciplina.
- Anotações com salvamento automático.
- Simulados de 20 questões sorteadas, com bancos de questões separados.
- Histórico e melhor resultado dos simulados.
- Ética e Cidadania organizada conforme as 12 unidades exibidas no ambiente acadêmico.
- Banco de Dados organizado conforme as 12 unidades exibidas no ambiente acadêmico.
- 120 flashcards, 24 módulos aprofundados, 120 questões comentadas, 32 atividades práticas, Pomodoro e 26 tópicos de videoaulas.
- Layout responsivo para computador e celular.

## Atualização da versão 5 para a versão 6

Esta atualização reorganiza Banco de Dados para acompanhar as 12 unidades oficiais: funções dos SGBDs, arquiteturas centralizadas e distribuídas, manutenção, responsabilidades do DBA, performance, inicialização e desativação, espaço, usuários, privilégios, backup, automação e segurança.

Na disciplina de Banco de Dados, a versão 6 contém:

- 12 unidades oficiais e aprofundadas;
- plano de estudo de 14 dias reorganizado;
- 60 flashcards;
- 60 questões comentadas para sorteio nos simulados;
- 16 situações práticas;
- 13 tópicos de videoaulas e pesquisas guiadas.

Não é necessário executar SQL novamente para atualizar da versão 5 para a versão 6. Basta substituir os arquivos no GitHub.

## Atualização da versão 4 para a versão 5

Esta atualização amplia e reorganiza o conteúdo da disciplina de Cidadania, Ética, Educação, Negociação e Sustentabilidade. Ela não altera a estrutura das tabelas do Supabase.

Se a versão 4 já está funcionando, basta substituir os arquivos do site no GitHub. Não execute novamente a migração do banco e não apague seus dados.

Na disciplina de Ética e Cidadania, a versão 5 contém:

- 12 unidades oficiais e aprofundadas;
- plano de estudo de 14 dias reorganizado;
- 60 flashcards;
- 60 questões comentadas para sorteio nos simulados;
- 16 situações práticas;
- 13 tópicos de videoaulas e pesquisas guiadas.

## Publicar no GitHub Pages

1. Extraia o ZIP no computador.
2. Abra o repositório que você já criou no GitHub.
3. Se ainda estiver na versão 3, execute `supabase_migration_v4.sql` no SQL Editor do Supabase. Se a versão 4 já funciona, pule esta etapa.
4. Apague ou substitua os arquivos da versão anterior.
5. Envie `index.html`, a pasta `assets`, `.nojekyll`, `README.md`, `supabase_setup.sql` e `supabase_migration_v4.sql` para a raiz do repositório.
6. Confirme as alterações no botão **Commit changes**.
7. Aguarde de 1 a 5 minutos e abra o endereço do GitHub Pages.

O arquivo principal precisa continuar com o nome `index.html` e a pasta `assets` deve permanecer ao lado dele.

## Configurar o endereço no Supabase

Esta etapa permite que o link de confirmação de e-mail e o link para recuperar a senha retornem ao seu site.

1. Copie o endereço completo do seu GitHub Pages. Exemplo: `https://seuusuario.github.io/central-estudos/`.
2. No Supabase, abra **Authentication**.
3. Entre em **URL Configuration**.
4. Em **Site URL**, cole o endereço completo do seu site.
5. Em **Redirect URLs**, adicione o mesmo endereço.
6. Salve.

Não use a URL do Supabase nesse campo. Use a URL da página publicada no GitHub.

## Atualização do banco de dados

Se a versão anterior já está funcionando, abra o arquivo `supabase_migration_v4.sql`, copie todo o conteúdo e execute uma vez em **Supabase → SQL Editor → New query → Run**. A migração preserva o progresso, as anotações e os simulados existentes e os associa à disciplina de Ética.

Depois da execução, as tabelas terão a coluna `subject`, que mantém os dados de cada disciplina separados.

## Instalação nova do banco de dados

O sistema utiliza estas tabelas:

- `study_progress`
- `study_notes`
- `quiz_results`

Em uma instalação nova, execute `supabase_setup.sql`. Em uma instalação que já usava a versão 3, execute somente `supabase_migration_v4.sql`.

## Teste recomendado

1. Abra o site em uma janela anônima.
2. Crie uma conta com um e-mail que você consiga abrir.
3. Confirme o cadastro pelo e-mail, se a confirmação estiver habilitada.
4. Entre no site.
5. Marque o Dia 1 de Ética e escreva uma anotação.
6. Troque para Banco de Dados e confirme que o progresso e as anotações começam separados.
7. Saia da conta, entre novamente e confira se os dados continuam lá.
8. Abra a mesma conta no celular para confirmar a sincronização.

## Segurança

O arquivo `assets/config.js` contém somente a chave `sb_publishable_`, própria para uso público no navegador. A segurança dos dados é garantida pelas políticas RLS do banco.

Nunca coloque no projeto uma chave que comece com `sb_secret_`, nem uma chave `service_role`.
