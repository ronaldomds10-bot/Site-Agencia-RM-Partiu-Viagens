# Planejador de viagem — 2026-10-07

Implementado `/planejar` no padrão existente: HTML, CSS e JavaScript servidos por Route Handler Next.js. Estilos da página inicial reutilizados; nenhuma dependência adicionada. Menu, botão inicial e seção de planejamento levam à nova rota. WhatsApp direto preservado.

O cálculo usa centavos inteiros e arredonda a parcela para cima. O prazo começa no mês atual (America/Sao_Paulo) e termina antes do mês da viagem. Meta atingida dispensa essa restrição. Formulário fica somente em memória; analytics recebe apenas nomes de eventos.

Verificações executadas em navegador Chromium com Playwright:

- Obrigatoriedade, números negativos, orçamento zero, centavos inválidos, viajantes e meses fracionários, data passada e prazo incompatível.
- R$ 1.000 / 3 = R$ 333,34; um centavo dividido por três; saldo zero com reserva igual ou maior que o orçamento.
- Destino indefinido, recálculo, remoção de resultado antigo, resumo codificado e texto tratado sem HTML.
- Clique WhatsApp interceptado sem envio; eventos de início, conclusão e clique sem dados do formulário.
- Três acessos na home, âncoras e layouts de 360, 768 e 1440px sem rolagem horizontal.
- TypeScript `tsc --noEmit --incremental false` e `git diff --check` aprovados. Nenhum build local.

Screenshots: [celular](planner-360.png), [desktop](planner-1440.png).

Metadados conferidos no HTML; lint Python não executado porque Python não está instalado. Analytics retorna 404 no servidor local, como esperado fora da Vercel. Verificação publicada realizada após o deploy.
