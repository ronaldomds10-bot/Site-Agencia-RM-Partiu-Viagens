# Redesign editorial com vídeos — RM PARTIU VIAGENS

## Objetivo

Redesenhar a página inicial da RM PARTIU VIAGENS com uma experiência visual sofisticada e cinematográfica, inspirada nos princípios editoriais observados no site da Teresa Perez: navegação discreta em camadas, tipografia de grande escala, imagens imersivas, formas arqueadas, sobreposições e ritmo de revista.

A implementação será uma adaptação original para a identidade, o conteúdo e o público da RM PARTIU VIAGENS. Não serão copiados logotipo, textos, código, ativos, composição exata ou elementos proprietários da referência.

## Regra de marca

O nome será apresentado sempre por extenso e em caixa alta: **RM PARTIU VIAGENS**.

Não serão utilizadas abreviações visíveis como “RM”, “RM Partiu” ou outras variações. O logotipo oficial existente será preservado sem redesenho, alteração de proporção ou modificação de cores.

## Direção visual

### Sensação

- editorial e cinematográfica;
- sofisticada, humana e acolhedora;
- premium sem afastar famílias, casais, viajantes a trabalho e grupos;
- foco em desejo de viajar, cuidado contínuo e atendimento pessoal.

### Paleta

- verde-petróleo profundo e quase preto para grandes superfícies;
- creme quente para fundos editoriais;
- pêssego e laranja da marca para destaques e ações;
- branco suave para títulos e textos sobre mídia;
- dourado apenas como apoio pontual, sem competir com o laranja oficial.

### Tipografia

O hero usará uma fonte sem serifa elegante, de peso leve e escala ampla, com contraste de peso e cor em palavras estratégicas. Textos corridos usarão uma família legível e neutra. O sistema evitará textos menores que 16 px no corpo em telas móveis e limitará a largura das linhas para leitura confortável.

### Formas e efeitos

- recortes verticais com topo arqueado para destinos e imagens de apoio;
- bordas discretas e poucos cartões convencionais;
- sobreposições controladas e transparências apenas quando ajudarem a hierarquia;
- sombras suaves e consistentes;
- movimento baseado em opacidade e transformação, sem animações que provoquem reflow.

## Primeira dobra

O hero ocupará a maior parte da primeira tela e terá:

- vídeo cinematográfico de fundo relacionado ao Brasil ou à experiência de viajar;
- gradiente verde-petróleo para garantir contraste do conteúdo;
- navegação em dois níveis no desktop, simplificada no mobile;
- logotipo oficial e nome completo RM PARTIU VIAGENS;
- mensagem principal sobre cuidado antes, durante e depois;
- uma única ação primária para começar o planejamento;
- duas imagens ou vídeos em recortes arqueados como assinatura visual;
- CTA flutuante de contato inspirado no comportamento da referência, com desenho original.

O formulário completo não ficará dentro do hero. A primeira dobra priorizará emoção, posicionamento e um caminho claro para conversão.

## Seção de destinos em vídeo

A página terá uma seção “Descubra o Brasil” com os principais destinos procurados:

1. Fernando de Noronha;
2. Rio de Janeiro;
3. Lençóis Maranhenses;
4. Gramado e Canela;
5. Foz do Iguaçu;
6. Nordeste, representado por um destino litorâneo com material adequado.

Os destinos serão apresentados em cartões verticais com recorte arqueado, nome, região e CTA para iniciar uma conversa. No desktop, os cartões poderão reproduzir o vídeo quando recebem foco, hover ou destaque. No mobile, somente um vídeo poderá tocar por vez e a experiência não dependerá de hover.

Cada cartão terá imagem estática de fallback para carregamento, economia de dados, falhas e preferência de movimento reduzido.

## Origem e licença dos vídeos

Os vídeos serão selecionados apenas de bibliotecas com licença compatível com uso comercial gratuito e download sem marca d’água, priorizando Pexels, Pixabay e Coverr.

Para cada arquivo será registrado:

- página original do vídeo;
- autor quando informado;
- biblioteca de origem;
- data da consulta;
- licença aplicável;
- destino representado.

Serão evitados clipes com marcas, logotipos, propriedades privadas sensíveis ou pessoas identificáveis em contexto que possa sugerir apoio comercial à RM PARTIU VIAGENS. Os arquivos serão hospedados no próprio projeto, sem players, anúncios ou marcas externas.

## Performance de vídeo

- hero em MP4 e, quando viável, WebM;
- reprodução automática somente sem áudio, com `muted`, `loop` e `playsinline`;
- `poster` obrigatório para cada vídeo;
- preload restrito a metadados ou ao mínimo necessário;
- carregamento tardio dos vídeos abaixo da dobra;
- resolução e bitrate ajustados para web, sem arquivos 4K desnecessários;
- vídeos de destino pausados fora da área visível;
- apenas um vídeo de destino reproduzido simultaneamente em telas móveis;
- fallback para imagens quando a conexão, o navegador ou a preferência do usuário desaconselharem movimento.

## Narrativa e seções

1. **Hero cinematográfico:** apresenta RM PARTIU VIAGENS, promessa de cuidado e CTA principal.
2. **Jornada de cuidado:** antes, check-in, durante e depois, em faixa editorial leve.
3. **Descubra o Brasil:** destinos em vídeo com composição arqueada.
4. **Viagens para cada momento:** lazer, casais, trabalho e grupos em composição editorial assimétrica.
5. **Como cuidamos:** processo do planejamento ao pós-viagem, com fotografia e etapas claras.
6. **Serviços integrados:** passagens, hospedagem, ingressos, transporte, seguro e suporte.
7. **Cotação:** formulário em uma seção própria, com menos competição visual e continuidade pelo WhatsApp.
8. **Dúvidas:** acordeão sobre atendimento e limites do suporte.
9. **Encerramento:** CTA final, Instagram e contato oficial.

## Interações

- navegação sticky com mudança de fundo conforme a rolagem;
- menu móvel acessível e com fechamento previsível;
- estados de hover, foco, pressionado, carregamento e desabilitado;
- vídeos controlados por visibilidade e preferência do usuário;
- transições entre 150 e 300 ms;
- suporte a `prefers-reduced-motion`;
- formulário com botão desabilitado durante o envio e mensagem clara de sucesso ou erro;
- todos os controles interativos com área mínima de 44 × 44 px.

## Responsividade

### Mobile

- hero legível sem esconder completamente a próxima seção;
- vídeo com enquadramento específico e poster adequado;
- navegação compacta, nome completo preservado e CTA acessível;
- títulos ajustados sem cortes;
- destinos navegáveis por rolagem vertical ou carrossel com controles visíveis;
- somente um vídeo de destino em reprodução;
- ausência de rolagem horizontal.

### Tablet

- composição em duas colunas quando houver espaço;
- arcos e sobreposições simplificados para não comprimir o conteúdo;
- formulário e textos com largura confortável.

### Desktop

- hero imersivo com composição assimétrica;
- navegação completa em dois níveis;
- destinos em grade ou trilho editorial amplo;
- uso generoso e intencional de espaço negativo.

## Acessibilidade

- contraste mínimo WCAG AA para textos e controles;
- navegação completa por teclado;
- foco visível;
- textos alternativos para imagens significativas;
- vídeo decorativo ignorado por tecnologias assistivas e conteúdo equivalente disponível em texto;
- controles acessíveis caso qualquer vídeo transmita informação necessária;
- sem significado comunicado somente por cor ou movimento;
- zoom do navegador preservado.

## Arquitetura técnica

A estrutura atual de HTML, CSS e JavaScript servida pelo Next.js será preservada, salvo necessidade técnica comprovada durante o plano. O redesign permanecerá focado no `index.html`, mantendo a API de cotação e os links oficiais.

Novos ativos serão organizados em `public/media/`, com nomes descritivos e um arquivo de créditos/licenças. O JavaScript inline controlará navegação, reprodução por visibilidade e estado do formulário sem adicionar uma biblioteca pesada.

## Restrições

- preservar o WhatsApp `5511987569836`;
- preservar `https://www.instagram.com/rmpartiuviagens`;
- não modificar nem recriar o logotipo;
- não copiar ativos, código, textos ou identidade proprietária da Teresa Perez;
- não inventar depoimentos, números, parceiros ou garantias;
- não afirmar que a RM PARTIU VIAGENS controla decisões de fornecedores;
- não publicar antes de validação e autorização explícita.

## Validação

- build de produção;
- inspeção visual em 375 px, 390 px, tablet, desktop e mobile landscape;
- teste com movimento reduzido;
- teste sem reprodução automática e com vídeo indisponível;
- teste de teclado, foco e contraste;
- verificação de rolagem horizontal, sobreposição e texto cortado;
- teste do menu, âncoras, formulário, WhatsApp e Instagram;
- medição do peso dos vídeos e revisão do impacto no carregamento;
- screenshots das versões desktop e mobile;
- validação final na URL de produção.

## Critério de conclusão

O redesign estará concluído quando o site comunicar, na primeira tela, uma experiência cinematográfica e sofisticada; apresentar o nome RM PARTIU VIAGENS sempre por extenso; usar vídeos de origem registrada e sem marca d’água; preservar legibilidade, desempenho e acessibilidade; e conduzir o visitante com clareza até o WhatsApp.
