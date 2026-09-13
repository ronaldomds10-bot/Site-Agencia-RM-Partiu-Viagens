# Reescrita completa do site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Execute this plan task-by-task in the current session. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reescrever toda a comunicação do site para posicionar a RM Partiu Viagens pelo atendimento humano antes, durante e depois da viagem e publicar o resultado em produção.

**Architecture:** Preservar o HTML único servido por `app/route.ts` e alterar apenas conteúdo, metadados e os textos de integração necessários. Manter o formulário existente como entrada para a API Next.js, atualizando a mensagem enviada ao WhatsApp para refletir o novo posicionamento.

**Tech Stack:** HTML, CSS e JavaScript inline; Next.js 16; TypeScript; Vercel.

## Global Constraints

- Preservar o logotipo, a identidade visual, o WhatsApp `5511987569836` e o Instagram oficial.
- Não inventar avaliações, métricas, certificações, garantias ou depoimentos.
- Não prometer controle sobre decisões de companhias aéreas, hotéis ou fornecedores.
- Manter o foco em atendimento humano antes, durante e depois da viagem.
- Validar desktop e mobile e não publicar antes de build e testes.

---

### Task 1: Conteúdo, conversão e metadados

**Files:**
- Modify: `index.html`

**Interfaces:**
- Consumes: IDs de seção, seletores CSS e eventos JavaScript existentes.
- Produces: página reescrita sem alterar os contratos do formulário e da navegação.

- [ ] **Step 1:** Atualizar title, description, canonical, Open Graph e Twitter Card com a URL oficial e a promessa de atendimento humano.
- [ ] **Step 2:** Reescrever navegação, hero, formulário e diferenciais com um CTA principal claro: “Planejar minha viagem com a RM”.
- [ ] **Step 3:** Reescrever perfis de viagem, destinos, serviços, processo, argumento de contraste, FAQ, CTA final e rodapé.
- [ ] **Step 4:** Revisar rótulos acessíveis, textos alternativos, status do formulário e mensagens pré-preenchidas do WhatsApp.
- [ ] **Step 5:** Executar `git diff --check` e revisar todas as ocorrências de textos antigos com `rg`.

### Task 2: Mensagem da API de cotação

**Files:**
- Modify: `app/api/quote/route.ts`

**Interfaces:**
- Consumes: JSON com `name`, `destination`, `date`, `travelers`, `style` e `notes`.
- Produces: JSON `{ ok: true, whatsappUrl: string }` ou `{ error: string }`.

- [ ] **Step 1:** Corrigir e humanizar mensagens de validação e o texto inicial enviado ao WhatsApp.
- [ ] **Step 2:** Executar `npm run build` e confirmar compilação sem erros.

### Task 3: Validação funcional e responsiva

**Files:**
- Create: `reports/metadata.json`
- Create: `reports/visual-smoke/*`

**Interfaces:**
- Consumes: aplicação local compilada e URL local.
- Produces: evidência de metadados, screenshots e verificação de navegação/WhatsApp.

- [ ] **Step 1:** Iniciar a aplicação local com `npm run dev`.
- [ ] **Step 2:** Executar o lint de metadados da skill de marketing.
- [ ] **Step 3:** Executar teste responsivo em desktop e mobile e capturar screenshots.
- [ ] **Step 4:** Testar menu, âncoras, formulário, links do Instagram e links do WhatsApp.
- [ ] **Step 5:** Corrigir qualquer regressão encontrada e repetir build e verificações afetadas.

### Task 4: GitHub e produção

**Files:**
- Modify: somente os arquivos aprovados nas tarefas anteriores.

**Interfaces:**
- Consumes: branch `main` validada e projeto Vercel `rm-partiu-viagens` vinculado.
- Produces: commit no GitHub e deployment de produção na Vercel.

- [ ] **Step 1:** Revisar `git status`, `git diff` e confirmar que não há mudanças alheias ao trabalho.
- [ ] **Step 2:** Criar commit com resumo da reescrita e dos testes executados.
- [ ] **Step 3:** Enviar a branch `main` para `origin`.
- [ ] **Step 4:** Publicar com `vercel --prod --yes` e registrar a URL final.
- [ ] **Step 5:** Abrir a URL de produção e confirmar título, hero, CTA e resposta HTTP.
