# Card Neve & Esqui Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Substituir o segundo card por uma experiência de neve e esqui.

**Architecture:** Reutilizar o markup e CSS de `.trip-card`, alterando apenas imagem, conteúdo e URL do segundo item.

**Tech Stack:** HTML, CSS, WebP, Next.js e agent-browser.

## Global Constraints

- Manter o WhatsApp `5511987569836`.
- Não alterar os demais cards ou seções.
- Armazenar a imagem localmente e preservar os breakpoints atuais.

---

### Task 1: Substituir o card

**Files:**
- Create: `public/images/destinos/neve-esqui.webp`
- Modify: `index.html`

**Interfaces:**
- Consumes: segundo `.trip-card`.
- Produces: card “Neve & Esqui” clicável.

- [ ] Selecionar e baixar fotografia licenciada de esqui.
- [ ] Atualizar imagem, alt, título, texto, CTA e mensagem do WhatsApp.
- [ ] Verificar 1440, 768, 390 e 320 pixels com agent-browser.
- [ ] Executar build, commit e deploy de produção.
