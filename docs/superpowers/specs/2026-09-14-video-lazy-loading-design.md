# Carregamento inteligente dos vídeos

## Objetivo

Manter os sete vídeos, a ordem, a qualidade e o visual atuais, reduzindo o carregamento inicial e evitando travamentos nas transições.

## Comportamento

- Apenas o primeiro vídeo terá `src` no HTML e começará a carregar com a página.
- Os demais manterão a URL em `data-src`, sem download inicial.
- Durante a reprodução, o JavaScript carregará somente o próximo vídeo.
- A troca automática ocorrerá após seis segundos e apenas quando o próximo vídeo puder reproduzir; até lá, o vídeo atual permanece visível.
- Ao ocultar a aba, a reprodução e o temporizador serão pausados. Ao retornar, serão retomados.
- Os controles manuais continuarão funcionando e carregarão sob demanda o destino escolhido.
- Posters existentes permanecerão como proteção visual durante carregamentos lentos ou falhas.

## Escopo preservado

Não serão alterados vídeos, imagens, textos, layout, duração visual, links, destinos ou identidade da RM PARTIU VIAGENS.

## Validação

- Confirmar que somente o primeiro vídeo inicia uma requisição ao abrir a página.
- Confirmar que o próximo é preparado sem iniciar os outros cinco.
- Testar rotação automática, controles manuais e pausa ao trocar de aba.
- Executar o build e verificar desktop e celular sem erros ou mudanças visuais.
