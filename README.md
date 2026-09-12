# FestDrinks

Landing page responsiva para uma empresa de bar e coquetelaria para eventos, construída com HTML5, CSS3 e JavaScript ES Modules.

## Executar localmente

Como o projeto utiliza módulos JavaScript, execute-o por um servidor HTTP. Exemplos:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Personalização

- WhatsApp: altere `WHATSAPP_NUMBER` em `js/whatsapp.js` usando DDI + DDD + número, apenas com dígitos.
- Drinks: edite o array `drinks` em `js/drinks.js`.
- Imagens do Hero: substitua os arquivos em `assets/hero/` mantendo os nomes ou ajuste as classes em `css/components.css`.
- Imagens de eventos e drinks: os assets atuais são placeholders temporários; altere os caminhos no HTML e em `js/drinks.js`.
- Instagram e dados institucionais: atualize os links e textos em `index.html`.
- SEO: defina o domínio público no canonical do `<head>`, no `robots.txt` e crie um `sitemap.xml` com URLs absolutas antes da publicação.
- WhatsApp: substitua `55XXXXXXXXXXX` no link do rodapé e em `js/whatsapp.js` pelo número com DDI + DDD, apenas dígitos.

## Estrutura

- `index.html`: conteúdo e estrutura semântica.
- `css/variables.css`: tokens do design system.
- `css/global.css`: estilos globais e utilitários.
- `css/components.css`: componentes da interface.
- `css/animations.css`: animações e redução de movimento.
- `css/responsive.css`: evolução responsiva mobile-first.
- `js/app.js`: inicialização dos módulos e menu.
- `js/carousel.js`: carrossel do Hero.
- `js/drinks.js`: dados, filtros e detalhes dos drinks.
- `js/selection.js`: estado compartilhado da seleção.
- `js/modal.js`: modais e formulário.
- `js/whatsapp.js`: composição da mensagem e URL.
- `js/animations.js`: revelação progressiva das seções.
