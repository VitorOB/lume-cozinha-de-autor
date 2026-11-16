# BRIEFING — Projeto 02A: Lume — Cozinha de Autor (restaurante de alto padrão)

## 0. Contexto (leia primeiro)

Este é um site demonstrativo para o portfólio de um serviço de criação de sites. Ele será mostrado a donos de restaurantes reais.

- O portfólio já tem um site de padaria: claro, acolhedor, em tons de creme e terracota. **Este precisa ser visualmente oposto**, com estrutura, ritmo e linguagem diferentes, para mostrar versatilidade.
- O site deve passar exclusividade e experiência, como os sites de restaurantes premiados. Não pode parecer um template.
- Conteúdo generalizável: nada de detalhes operacionais tão específicos que um restaurante real não possa adaptar. **Não mostre preços.**
- Fora do escopo: backend, banco de dados, sistema de reservas real, pagamentos e depoimentos ou avaliações.

## 1. Prioridades (em caso de conflito, siga esta ordem)

1. Experiência visual imersiva e sofisticada, impecável no celular.
2. Acessibilidade WCAG 2.2 AA, incluindo `prefers-reduced-motion`.
3. Desempenho: Lighthouse mobile ≥ 90, **mesmo com as animações**.
4. Código organizado, com todos os dados em `src/data/site.ts`.

## 2. A marca

**Lume — Cozinha de Autor.** Restaurante contemporâneo de alta gastronomia, com cozinha autoral, ingredientes brasileiros de pequenos produtores e técnica francesa. Funciona só no jantar e trabalha com menu degustação e carta à la carte reduzida.

Público: casais, celebrações, executivos, turistas gastronômicos.

Tom de voz: contido, elegante e preciso. Frases curtas, sem exageros e sem clichês ("experiência inesquecível", "sabores únicos"). A sofisticação aparece no que não é dito.

## 3. Identidade visual

### Paleta (tema escuro)

| Uso | Cor |
|---|---|
| Fundo principal (quase preto quente) | `#141210` |
| Fundo de seções alternadas | `#1E1B18` |
| Texto principal (marfim) | `#F2EDE4` |
| Texto secundário | `#B8AFA2` |
| Destaque (dourado champagne): detalhes, linhas e botões | `#C9A96E` |
| Texto sobre botão dourado | `#141210` |

Verifique o contraste de todas as combinações. Na dúvida, clareie o texto secundário.

### Tipografia

- Títulos: **Cormorant Garamond**, em tamanhos grandes. Nunca use os pesos finos em textos pequenos.
- Texto e interface: **Manrope**.
- Use letras maiúsculas espaçadas em rótulos pequenos (ex.: "MENU DEGUSTAÇÃO").

### Direção

- Layout editorial e assimétrico, com muito espaço negativo.
- Fotos grandes, escuras e com contraste dramático. Pratos fotografados de cima ou em close, com o ambiente na penumbra.
- Linhas finas douradas como divisores.
- Nada de cartões com sombra no estilo SaaS e nada de ícones coloridos. É o oposto do site da padaria.

## 4. Plano de animação

Use a biblioteca **Motion** (`motion`), ou CSS com IntersectionObserver se ficar mais leve. Não use GSAP.

1. **Hero:** vídeo de fundo em loop, sem som, com `playsInline` e `poster`. Mostra um prato sendo finalizado ou uma chama, em `public/video/hero.mp4`, com menos de 3 MB e no máximo 720p. Se não encontrar um vídeo adequado e gratuito no Pexels, use a foto do hero com um zoom lento (efeito Ken Burns, cerca de 20 s).
2. **Título do hero:** revela linha por linha na entrada (fade e deslocamento de 20px, intervalo de 120 ms).
3. **Revelação na rolagem:** títulos e imagens entram com fade e leve deslocamento, uma vez só, sem repetir ao voltar.
4. **Parallax sutil** nas fotos grandes, com no máximo 40px de deslocamento. **Desligue no celular.**
5. **Menu degustação:** as etapas aparecem em sequência conforme a rolagem.
6. **Hover:** zoom de 1.03 nas fotos e sublinhado dourado animado nos links.

Regras:

- Com `prefers-reduced-motion: reduce`, tudo fica estático: o vídeo é trocado pelo poster e nada se move.
- O vídeo tem um botão acessível de pausar/reproduzir (critério 2.2.2 da WCAG).
- Anime só `transform` e `opacity`. Nada de animação que cause layout shift.
- O conteúdo precisa estar legível mesmo se o JavaScript falhar.

## 5. Estrutura (one-page)

### 5.1 Cabeçalho

- Transparente sobre o hero; ganha fundo escuro ao rolar.
- Logo textual "LUME".
- Menu: A casa · Menu · Chef · Ambiente · Reservas.
- Botão "Reservar".
- Menu mobile em tela cheia, com animação suave e totalmente acessível (`aria-expanded`, Esc fecha, foco gerenciado).

### 5.2 Hero (tela cheia)

- Vídeo ou foto de fundo com sobreposição escura para garantir contraste.
- Título curto e marcante no tom da marca.
- Uma linha de apoio.
- Botões: "Reservar uma mesa" e "Conhecer o menu".
- Indicador discreto de rolagem.

### 5.3 Manifesto

Um parágrafo curto e grande, centralizado, sobre a filosofia da cozinha. Pode ter uma palavra-chave em itálico dourado.

### 5.4 Menu degustação (elemento-assinatura)

- Linha do tempo vertical com 7 etapas, cada uma com nome do prato e ingredientes principais em uma linha. Use foto em 2 ou 3 etapas, não em todas.
- Mencione a harmonização de vinhos como opcional.
- Sem preço. Termine com um botão "Reservar para o menu degustação".

### 5.5 À la carte (resumo)

Duas colunas tipográficas, sem fotos: entradas, principais e sobremesas, com 3 itens cada. Acrescente a observação "o menu muda com as estações".

### 5.6 O chef

Foto do chef na cozinha (de costas, de perfil ou com o rosto pouco visível), mini-biografia fictícia e uma citação curta.

### 5.7 Ambiente

Galeria assimétrica com 4 ou 5 fotos do salão, do bar e dos detalhes. Nada de carrossel automático.

### 5.8 Reservas

- Dias e horários (jantar, de terça a sábado).
- Política simples: tolerância e traje sugerido.
- Botão de WhatsApp com mensagem pré-preenchida pedindo data, horário e número de pessoas.
- Espaço preparado para um link externo de reservas (`reservationUrl` em `site.ts`). Se o campo estiver vazio, mostre só o botão do WhatsApp.

### 5.9 Localização e rodapé

- Endereço fictício marcado como demonstrativo e bloco no lugar do mapa (sem embed).
- Redes sociais com `aria-disabled` e a etiqueta "demonstrativo". Nada de links que finjam funcionar.
- Crédito do portfólio: "Site demonstrativo criado por [NOME] — quer um site assim para o seu restaurante? [Fale comigo]", com link para `creatorWhatsapp`.

## 6. Configuração centralizada (`src/data/site.ts`)

Todos os textos, o menu, os horários, o endereço, as redes e o contato ficam nesse arquivo.

```ts
export const contact = {
  whatsappNumber: "",   // 5531999999999 — preencher antes de publicar
  whatsappMessage: "Olá! Gostaria de reservar uma mesa no Lume. Data: , horário: , pessoas: ",
  reservationUrl: "",   // link de plataforma de reservas, se houver
  creatorName: "",
  creatorWhatsapp: "",
};
```

Se `whatsappNumber` estiver vazio, use `https://wa.me/?text=...`. Nunca invente números.

## 7. Imagens e vídeo

- Busque e baixe as fotos no Pexels ou no Unsplash. Se houver `PEXELS_API_KEY` ou `UNSPLASH_ACCESS_KEY` no `.env`, use a API oficial. Nunca invente URLs.
- **Abra cada imagem para conferir** se ela combina com a direção escura e sofisticada. Rejeite fotos claras, com cara de banco de imagem genérico ou com marca d'água.
- Arquivos: `hero.jpg` (também usado como poster), `prato-1.jpg` a `prato-3.jpg`, `chef.jpg`, `ambiente-1.jpg` a `ambiente-5.jpg` e o vídeo opcional `public/video/hero.mp4`.
- Registre os créditos em `CREDITS.md`.

**Otimização desde o início** (lição do projeto anterior):

- WebP em 2 tamanhos (800 e 1600px), com `srcset`/`sizes`.
- `fetchpriority="high"` e nenhum lazy loading na imagem do hero.
- `loading="lazy"` no resto, com `width` e `height` definidos.
- Pré-carregar a fonte dos títulos.

## 8. Stack

- React, TypeScript, Vite, Tailwind CSS, Lucide React e Motion. Nenhuma outra dependência.
- Deploy na Vercel, na raiz.

Estrutura:

```
src/components, src/sections, src/data/site.ts, public/images, public/video
```

## 9. Acessibilidade e SEO

- HTML semântico, um único `h1` e link "Pular para o conteúdo".
- Navegação completa por teclado com foco visível (anel dourado).
- Alvos de toque de pelo menos 44px, zoom de 200% e telas de 320px sem rolagem horizontal.
- `lang="pt-BR"`.
- `title`, `meta description`, Open Graph, favicon em SVG e JSON-LD do tipo `Restaurant`.

## 10. Como trabalhar

1. Inspecione a pasta.
2. Apresente o plano: componentes, direção visual e lista de mídias encontradas.
3. Implemente seção por seção, com textos finais em português brasileiro.
4. Rode `tsc --noEmit`, lint e build, e corrija o que aparecer.
5. Relatório final:
   - Arquivos criados.
   - O que precisa ser preenchido.
   - Mídias faltantes.
   - O que não foi possível testar visualmente.

Não afirme que fez testes visuais se não os executou.
