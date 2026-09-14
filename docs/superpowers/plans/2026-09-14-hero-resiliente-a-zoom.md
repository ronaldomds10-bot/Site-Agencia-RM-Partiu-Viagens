# Hero Resiliente a Zoom Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Impedir sobreposições no hero sob zoom e viewports extremos.

**Architecture:** Agrupar metadados inferiores em `.hero-footer` e usar grid em fluxo normal. Permitir que o hero cresça conforme o conteúdo, mantendo apenas a mídia de fundo absoluta.

**Tech Stack:** HTML, CSS responsivo, JavaScript nativo e Next.js.

## Global Constraints

- Preservar identidade, textos, vídeos, links e comportamento do carrossel.
- Não adicionar dependências.
- Publicar em `https://rmpartiuviagens.vercel.app/` após validação.

---

### Task 1: Reestruturar o hero

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: `.hero-copy`, `.destination` e `.controls`.
- Produces: `.hero-footer` em fluxo normal.

- [ ] Envolver destino e controles em `.hero-footer`.
- [ ] Transformar `.hero` em grade vertical com altura mínima dinâmica.
- [ ] Remover posicionamento absoluto dos elementos inferiores.
- [ ] Empilhar o rodapé em larguras estreitas.

### Task 2: Validar e publicar

**Files:**
- Test: `index.html`

**Interfaces:**
- Consumes: hero reestruturado.
- Produces: deployment público sem colisões.

- [ ] Medir interseções em 320, 390, 768, 1054, 1318 e 1440 px.
- [ ] Confirmar ausência de overflow horizontal e erros de console.
- [ ] Executar `npm run build`.
- [ ] Commitar e executar `npx vercel deploy --prod --yes`.
- [ ] Validar a URL pública com navegador automatizado.
