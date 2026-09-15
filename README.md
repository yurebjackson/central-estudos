# Central de Estudos — UNIFSA

Site estático preparado para GitHub Pages.

## Publicação rápida

1. Crie um repositório no GitHub, por exemplo `central-estudos`.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Vá em **Settings > Pages**.
4. Em **Build and deployment**, escolha:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
5. Salve.
6. O GitHub mostrará o endereço público do site.

## Estrutura

- `index.html`
- `assets/styles.css`
- `assets/app.js`
- `.nojekyll`

## Observação

Nesta primeira versão o progresso é salvo via `localStorage`, portanto fica no navegador/dispositivo usado.
A próxima etapa pode integrar Supabase para login e sincronização entre dispositivos.
