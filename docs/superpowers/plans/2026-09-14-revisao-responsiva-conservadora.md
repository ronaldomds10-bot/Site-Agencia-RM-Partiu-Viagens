# Revisão Responsiva Conservadora Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corrigir sobreposições, duplicação de conteúdo e falhas responsivas em toda a página da RM Partiu Viagens sem redesenhar sua identidade.

**Architecture:** Manter a implementação de página única e corrigir os contratos de layout diretamente no CSS e HTML existentes. O slide do carrossel passa a controlar sua própria grade, o atributo `hidden` recebe uma regra incontornável e os breakpoints reservam espaço real para conteúdo e controles.

**Tech Stack:** HTML semântico, CSS responsivo, JavaScript nativo, Next.js apenas como servidor local do conteúdo existente, agent-browser para validação.

## Global Constraints

- Preservar cores, tipografia, imagens, textos, animações e tom premium.
- Preservar o WhatsApp `5511987569836` e o Instagram `https://www.instagram.com/rmpartiuviagens`.
- Manter a estrutura atual e não adicionar dependências.
- Não publicar nem implantar as mudanças.
- Validar em 1440 × 900, 768 × 1024 e 390 × 844.

---

### Task 1: Estabilizar o carrossel editorial e remover a duplicação visual

**Files:**
- Modify: `index.html` — estilos de `.journey-stage`, `.journey-slide`, conteúdo, colagem, controles e `[hidden]`.
- Test: inspeção DOM e screenshots locais.

**Interfaces:**
- Consumes: markup existente `.journey-slide`, `.journey-content`, `.journey-collage`, `.journey-controls` e `#destinos-antigo`.
- Produces: um único carrossel visível, com slide ativo em grade no desktop e fluxo vertical abaixo de 850 px.

- [ ] **Step 1: Registrar a geometria defeituosa**

Executar no navegador uma leitura de `getBoundingClientRect()` para o palco, conteúdo, colagem e controles em 1440, 768 e 390 px. Confirmar conteúdo começando em `x = 0`, colagem fora da altura útil e seção antiga visível.

- [ ] **Step 2: Corrigir o contrato de layout**

Adicionar `display: grid`, colunas, alinhamento, espaçamento e padding a `.journey-slide`; reservar a faixa inferior dos controles; adaptar o slide para bloco/grade de uma coluna nos breakpoints existentes; adicionar `[hidden] { display: none !important; }`.

- [ ] **Step 3: Verificar o carrossel**

Executar screenshots e geometria nas três larguras. Clicar nas setas e indicadores e confirmar que apenas um slide está ativo e que texto, CTA, fotos e controles permanecem dentro do palco.

- [ ] **Step 4: Commit da correção estrutural**

```powershell
git add -- index.html
git commit -m "fix: stabilize editorial journey layout"
```

### Task 2: Corrigir hero, CTAs e elemento flutuante em todos os breakpoints

**Files:**
- Modify: `index.html` — estilos do hero, grupos de ações, controles inferiores e WhatsApp flutuante.
- Test: inspeção de colisões e screenshots locais.

**Interfaces:**
- Consumes: `.hero`, `.hero-copy`, `.hero-actions`, `.destination`, `.controls` e `.floating` existentes.
- Produces: CTAs em linha quando couberem e empilhados no mobile, sem colisão com indicadores ou WhatsApp.

- [ ] **Step 1: Medir os elementos interativos**

Coletar retângulos dos links `.btn`, botões e `.floating` nas três larguras e comparar interseções entre pares visíveis.

- [ ] **Step 2: Ajustar zonas seguras e alturas**

Substituir medidas frágeis por `clamp()`, `min()` ou espaçamento responsivo; garantir altura mínima do hero compatível com seu conteúdo; reservar borda inferior e lateral para o WhatsApp; manter alvos de toque com pelo menos 44 px.

- [ ] **Step 3: Verificar navegação e ações**

Testar âncoras do menu e CTAs, validar URLs de WhatsApp e Instagram e acionar o fechamento do assistente flutuante.

- [ ] **Step 4: Commit dos ajustes de interação**

```powershell
git add -- index.html
git commit -m "fix: prevent responsive action collisions"
```

### Task 3: Revisar as demais seções e concluir a validação

**Files:**
- Modify: `index.html` — somente regras responsivas necessárias para Brasil, Como cuidamos, Planejamento, Sobre, Avaliações, FAQ e rodapé.
- Create: `output/audit-desktop-after.png`
- Create: `output/audit-tablet-after.png`
- Create: `output/audit-mobile-after.png`
- Test: build, auditoria de acessibilidade e smoke test no navegador.

**Interfaces:**
- Consumes: seções e links existentes.
- Produces: página completa sem overflow, cortes ou colisões nas larguras-alvo.

- [ ] **Step 1: Auditar overflow e colisões da página inteira**

Executar script no navegador que compare `scrollWidth` com `innerWidth`, liste elementos que ultrapassem a viewport e detecte interseções de elementos interativos visíveis.

- [ ] **Step 2: Aplicar os menores ajustes necessários**

Corrigir apenas grid, gap, padding, largura máxima, quebra de texto e tamanho fluido nos seletores comprovadamente defeituosos; preservar conteúdo e direção visual.

- [ ] **Step 3: Executar validação técnica**

```powershell
npm run build
Select-String -Path index.html -Pattern "5511987569836|https://www.instagram.com/rmpartiuviagens"
```

Esperado: build concluído sem erro e links oficiais presentes.

- [ ] **Step 4: Executar validação visual e acessível**

Capturar a página inteira em 1440 × 900, 768 × 1024 e 390 × 844; executar auditoria WCAG A/AA; testar carrossel, âncoras e fechamento do assistente. Corrigir regressões encontradas e repetir os checks afetados.

- [ ] **Step 5: Commit final**

```powershell
git add -- index.html
git commit -m "fix: complete responsive page polish"
```
