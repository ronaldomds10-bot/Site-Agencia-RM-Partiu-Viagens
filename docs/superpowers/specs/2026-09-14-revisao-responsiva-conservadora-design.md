# Revisão responsiva conservadora do site RM Partiu Viagens

## Objetivo

Corrigir os defeitos visuais e responsivos da página inteira sem alterar a identidade da RM Partiu Viagens, o conteúdo editorial, o logotipo ou os canais oficiais. A entrega deve eliminar sobreposições, cortes e áreas vazias indevidas em desktop, tablet e mobile.

## Escopo aprovado

- Manter a estrutura atual do site e trabalhar nos arquivos existentes.
- Preservar cores, tipografia, imagens, textos, animações e tom premium, salvo pequenos ajustes de espaçamento necessários para legibilidade.
- Preservar o WhatsApp `5511987569836` e o Instagram `https://www.instagram.com/rmpartiuviagens`.
- Corrigir o carrossel editorial de experiências e remover visualmente a seção antiga duplicada.
- Revisar todas as seções nas larguras de referência de 390, 768 e 1440 pixels.
- Não publicar, implantar ou alterar serviços externos.

## Diagnóstico confirmado

O carrossel editorial posiciona cada `.journey-slide` de forma absoluta, mas aplica a grade de duas colunas apenas ao contêiner `.journey-stage`. Como os slides deixam o fluxo e não são grades, `.journey-content` e `.journey-collage` não ocupam as colunas pretendidas. O conteúdo começa na borda esquerda, as imagens descem para fora da área útil e os controles passam sobre outros elementos.

A seção legada `#destinos-antigo` tem o atributo `hidden`, porém regras autorais de layout podem prevalecer sobre o estilo padrão do navegador. Assim, a seção antiga volta a aparecer logo abaixo do carrossel novo, produzindo conteúdo duplicado.

No mobile, alturas mínimas rígidas e elementos fixos ou absolutos deixam pouca margem para variações de texto. O botão flutuante do WhatsApp também pode disputar a área inferior com controles e chamadas para ação.

## Solução de layout

### Carrossel editorial

Cada `.journey-slide` será a unidade de layout do carrossel. No desktop, o slide ativo usará uma grade de duas colunas, com conteúdo à esquerda e colagem de imagens à direita. O contêiner continuará responsável por delimitar a altura, o fundo e o recorte da transição.

Em tablet e mobile, cada slide passará para uma composição vertical. A altura será suficiente para texto, CTA, imagens e controles, sem depender de deslocamentos negativos. As imagens continuarão sobrepostas de modo controlado, dentro de uma caixa com dimensões responsivas.

Os slides inativos continuarão invisíveis e sem interação. Indicadores e setas ocuparão uma faixa inferior reservada, com áreas de toque de pelo menos 44 pixels e sem colisão com o CTA.

### Seção antiga

Uma regra explícita para `[hidden]` garantirá que `#destinos-antigo` permaneça fora do layout e da árvore visual. O HTML legado será mantido por enquanto para limitar o risco da mudança e facilitar uma eventual recuperação, mas não será exibido.

### Hero e botões

O hero manterá o tratamento fotográfico e a hierarquia atual. Alturas, espaçamentos e posição dos elementos inferiores serão ajustados para que o conteúdo caiba em telas baixas e estreitas. CTAs formarão uma linha quando houver espaço e uma pilha consistente no mobile.

O botão flutuante do WhatsApp respeitará uma zona segura nas bordas. Em telas pequenas, poderá usar apresentação compacta quando necessário, sem encobrir navegação, controles ou CTAs.

### Demais seções

As seções Brasil, Como cuidamos, Planejamento, Sobre, Avaliações, FAQ e rodapé serão revisadas sem redesenho. Ajustes serão limitados a grade, alinhamento, espaçamento, tamanho fluido de texto, largura de botões e prevenção de overflow.

## Comportamento e acessibilidade

- Manter navegação por âncoras e comportamento do carrossel.
- Manter todos os links oficiais e ações existentes.
- Garantir que controles clicáveis tenham nome acessível e foco visível.
- Respeitar `prefers-reduced-motion` nas transições existentes quando possível sem reestruturar o projeto.
- Não adicionar formulários, dependências ou integrações.

## Validação

A validação será feita no navegador local em 1440 × 900, 768 × 1024 e 390 × 844, incluindo:

- capturas de página inteira após as mudanças;
- ausência de rolagem horizontal;
- ausência de elementos fora da viewport ou colisões entre botões;
- carrossel funcional por setas e indicadores;
- navegação por âncoras;
- links de WhatsApp e Instagram preservados;
- fechamento do assistente flutuante;
- auditoria automatizada de acessibilidade básica;
- compilação do projeto sem erro.

## Critérios de aceite

1. A área marcada pelo usuário não apresenta sobreposição, recorte ou vazio indevido.
2. Somente o carrossel editorial novo aparece na seção de destinos.
3. Nenhum botão se sobrepõe a outro elemento nas três larguras de referência.
4. Não há rolagem horizontal, texto cortado ou conteúdo inacessível.
5. Os links oficiais, as âncoras e as interações continuam funcionando.
6. A aparência continua reconhecível como o site atual da RM Partiu Viagens.

## Fora do escopo

- Redesenho do logotipo ou mudança de identidade visual.
- Reescrita ampla de conteúdo.
- Migração de framework ou separação do site em novos sistemas.
- Backend, banco de dados, autenticação ou Agents API.
- Publicação ou implantação.
