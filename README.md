# Central de Estudos v3

Site estático para GitHub Pages com autenticação e sincronização pelo Supabase.

## O que já está pronto

- Cadastro, login, recuperação de senha e encerramento de sessão.
- Progresso do plano de 14 dias salvo por usuário.
- Anotações com salvamento automático.
- Simulados de 20 questões sorteadas de um banco com 30 questões.
- Histórico e melhor resultado dos simulados.
- 28 flashcards, resumos, Pomodoro e buscas de videoaulas.
- Layout responsivo para computador e celular.

## Publicar no GitHub Pages

1. Extraia o ZIP no computador.
2. Abra o repositório que você já criou no GitHub.
3. Apague ou substitua os arquivos da versão anterior.
4. Envie `index.html`, a pasta `assets`, `.nojekyll`, `README.md` e `supabase_setup.sql` para a raiz do repositório.
5. Confirme as alterações no botão **Commit changes**.
6. Aguarde de 1 a 5 minutos e abra o endereço do GitHub Pages.

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

## Banco de dados

O sistema espera estas tabelas:

- `study_progress`
- `study_notes`
- `quiz_results`

Se o SQL passado anteriormente já foi executado com sucesso e essas três tabelas aparecem no **Table Editor**, não é necessário criar tudo novamente. O arquivo `supabase_setup.sql` acompanha o projeto como referência e também adiciona as permissões mínimas para usuários autenticados.

## Teste recomendado

1. Abra o site em uma janela anônima.
2. Crie uma conta com um e-mail que você consiga abrir.
3. Confirme o cadastro pelo e-mail, se a confirmação estiver habilitada.
4. Entre no site.
5. Marque o Dia 1 como concluído e escreva uma anotação.
6. Saia da conta, entre novamente e confira se os dados continuam lá.
7. Abra a mesma conta no celular para confirmar a sincronização.

## Segurança

O arquivo `assets/config.js` contém somente a chave `sb_publishable_`, própria para uso público no navegador. A segurança dos dados é garantida pelas políticas RLS do banco.

Nunca coloque no projeto uma chave que comece com `sb_secret_`, nem uma chave `service_role`.

