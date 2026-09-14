# Hero resiliente a zoom

## Objetivo

Garantir que CTAs, destino atual, indicadores e WhatsApp não se sobreponham em nenhuma escala comum de navegador, tanto em notebooks quanto em dispositivos móveis.

## Solução aprovada

O hero deixará de posicionar destino e indicadores de forma absoluta. Esses elementos serão agrupados em um rodapé em fluxo normal. O hero usará uma grade vertical e `min-height: 100svh`, podendo crescer quando zoom, textos ou dimensões reduzirem o espaço disponível.

No desktop, o rodapé terá destino à esquerda e indicadores centralizados, com uma coluna vazia à direita para equilibrar o layout e preservar a área do WhatsApp. Em telas estreitas, o rodapé será empilhado. Somente vídeo, sombra e botão global do WhatsApp permanecerão fora do fluxo.

## Validação

- Larguras de 320, 390, 768, 1054, 1318 e 1440 pixels.
- Alturas reduzidas equivalentes a zoom de até 200%.
- Ausência de interseção entre CTAs, destino, indicadores e WhatsApp.
- Ausência de rolagem horizontal.
- Build de produção e verificação do deployment público.
