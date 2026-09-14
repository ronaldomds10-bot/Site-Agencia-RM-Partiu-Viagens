# Video Lazy Loading Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Manter os vídeos atuais enquanto apenas o vídeo em reprodução e o próximo são carregados.

**Architecture:** O primeiro vídeo mantém `src`; os demais usam `data-src`. Funções JavaScript isoladas ativam fontes sob demanda, aguardam o próximo vídeo estar reproduzível e suspendem a rotação quando a aba não está visível.

**Tech Stack:** HTML, JavaScript nativo, HTMLVideoElement, Page Visibility API.

## Global Constraints

- Não alterar vídeos, posters, ordem, textos, layout ou links.
- Manter rotação de seis segundos quando o próximo vídeo estiver pronto.
- Preservar controles manuais e reprodução reduzida quando solicitada pelo sistema.

---

### Task 1: Carregamento progressivo

**Files:**
- Modify: `index.html`
- Test: browser e `npm run build`

**Interfaces:**
- Consumes: elementos `.slide video` e botões em `#controls`
- Produces: `loadVideo(index)`, `prepareNext()` e `show(index)`

- [x] **Step 1: Adiar fontes não iniciais**

Mover o endereço dos vídeos 2–7 de `src` para `data-src` e definir `preload="none"`.

- [x] **Step 2: Implementar carregamento sob demanda**

Adicionar `loadVideo(index)` para atribuir `data-src` a `src` somente ao vídeo solicitado.

- [x] **Step 3: Preparar somente o próximo vídeo**

Adicionar `prepareNext()` após o primeiro vídeo iniciar e após cada troca.

- [x] **Step 4: Evitar troca sem buffer**

Manter o vídeo atual até o próximo emitir `canplay`, preservando o poster como fallback.

- [x] **Step 5: Pausar em aba oculta**

Usar `visibilitychange` para suspender vídeo e temporizador e retomá-los quando a página reaparecer.

- [x] **Step 6: Validar e publicar**

Executar `npm run build`, verificar fontes ativas no navegador, testar controles, fazer commit, push e deploy de produção.
