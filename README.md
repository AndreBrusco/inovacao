# Inovação — PFG 2025 | ILB

Plataforma EAD da disciplina **Inovação** do Programa de Formação Gerencial (PFG 2025) do Instituto Legislativo Brasileiro — Senado Federal.

🔗 **Site publicado:** https://andrebrusco.github.io/inovacao/

---

## Sobre o projeto

10 módulos com pílulas de conhecimento diretas ao ponto, rastreamento de progresso via localStorage e design responsivo alinhado à identidade visual do Senado Federal.

**Módulos:**
1. O que é Inovação?
2. Identificação e Definição de Problemas
3. Design Thinking
4. Mentalidade Ágil
5. Jobs to Be Done
6. UX e a Jornada do Usuário
7. IA e Inovação no Setor Público
8. MVP e Prototipagem
9. Foco em Resultados
10. Difusão da Inovação

---

## Stack

- React 18 + Vite
- Tailwind CSS
- React Router (HashRouter para compatibilidade com GitHub Pages)
- Lucide React (ícones)

---

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse em `http://localhost:5173/inovacao/`

---

## Deploy

O deploy é automático via GitHub Actions a cada push na branch `main`.

Para configurar manualmente:
1. Vá em **Settings > Pages** no repositório
2. Em **Source**, selecione a branch `gh-pages`
3. Aguarde o primeiro deploy pelo Actions

---

## Adicionando vídeos

No arquivo `src/data/modules.js`, adicione a propriedade `videoUrl` ao módulo desejado:

```js
{
  id: 1,
  videoUrl: 'https://drive.google.com/file/d/SEU_ID/preview',
  // ...
}
```

---

Facilitador: **André Brusco** · PFG 2025 · Instituto Legislativo Brasileiro
