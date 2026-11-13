# Publicação definitiva — Locaweb

Domínio preferencial: https://festdrinkss.com.br/  
Repositório de desenvolvimento: https://github.com/igorphellipe/festdrinks  
Idioma: pt-BR. Documento atualizado em 12/11/2026.

**Este procedimento substitui todas as instruções anteriores de hospedagem e DNS. Preparação local concluída; publicação não executada.**

## Dados de infraestrutura pendentes

O responsável informou que aguarda a conclusão da configuração da hospedagem. Ainda não foram fornecidos: plano, plataforma/servidor, diretório público, domínio vinculado no painel, host/porta/protocolo de transferência, destino DNS e disponibilidade de SSL. Não há senhas ou credenciais neste repositório. Obter esses dados no painel ou suporte antes da publicação.

## Compatibilidade técnica

Site estático, uma página index.html com navegação por âncoras. HTML5, seis folhas CSS e oito módulos JavaScript nativos. Sem package.json, build, framework, backend, PHP, banco de dados, API própria ou envio de e-mail.

O navegador carrega os scripts, renderiza o catálogo e mantém seleção em memória. O formulário valida campos localmente e abre wa.me com a mensagem codificada. Google Fonts é uma dependência externa de fonte; WhatsApp e Instagram são canais externos. Não há credenciais de API.

Compatível com hospedagem que sirva arquivos estáticos por HTTPS e MIME correto. Confirmar no plano: index.html como documento inicial, .js como JavaScript (text/javascript ou application/javascript), .css como text/css, .webp como image/webp, .mp4 como video/mp4 e XML/texto adequados. Servir JS como HTML ou com MIME incorreto quebra ES Modules. Testar reprodução e suporte a requisições parciais dos vídeos após publicar.

Não existe roteamento SPA por caminhos. Não criar fallback global para index.html: URLs inexistentes devem retornar 404, e arquivos JS ausentes não podem retornar HTML. Não há necessidade funcional de .htaccess, web.config ou rewrite. Nenhum desses arquivos foi criado.

## Conteúdo a enviar

Extrair o conteúdo de publicacao/festdrinks-locaweb.zip diretamente no diretório público indicado pelo painel. Se o gerenciador não extrair ZIP, extrair localmente e transferir os arquivos. Não deixar o ZIP na área pública.

~~~text
<DIRETORIO_PUBLICO_CONFIRMADO_NO_PAINEL>/
├── index.html
├── robots.txt
├── sitemap.xml
├── LICENSE
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── global.css
│   ├── components.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── app.js
│   ├── animations.js
│   ├── carousel.js
│   ├── drinks.js
│   ├── events.js
│   ├── modal.js
│   ├── selection.js
│   └── whatsapp.js
└── assets/
    ├── drinks/
    ├── hero/
    ├── icons/
    ├── logo/
    ├── servicos/
    └── videos/
~~~

O nome remoto da pasta não altera as URLs se ela estiver associada à raiz do domínio. Não criar uma subpasta festdrinks por conta própria.

O pacote usa lista permitida: index.html, robots.txt, sitemap.xml, LICENSE, css/, js/ e assets/. Inclui 143 arquivos. Não contém .git/, .gitignore, .gitattributes, arquivos .env, credenciais, CNAME, documentação, backups, configurações de editor ou o próprio ZIP. Código front-end e todos os arquivos publicados são públicos por natureza.

O pacote é uma fotografia local. Se os arquivos do site mudarem, regenerar antes de enviar; não usar um ZIP desatualizado. O diretório publicacao/ está ignorado pelo Git.

## Transferência — somente com autorização

1. Confirmar domínio, diretório público, protocolo, host e porta no painel; não adivinhar.
2. Fazer backup da versão remota antes de substituir arquivos. Não sobrescrever arquivos gerenciados pela hospedagem ou outro site.
3. Usar o gerenciador disponível ou cliente de transferência. Preferir FTPS/SFTP quando oferecidos e confirmados; SFTP e FTPS são protocolos diferentes. Não assumir SSH ou SFTP incluídos no plano.
4. No WebFTP, a Locaweb orienta acessar a área Arquivos e FTP ou Publique seus arquivos. Consultar [o guia oficial](https://www.locaweb.com.br/ajuda/wiki/como-acessar-o-webftp-hospedagem-de-sites/).
5. Enviar apenas o conteúdo permitido, preservando nomes e capitalização. Se houver index.php ou outra página inicial remota, confirmar prioridade e substituição com backup; não apagar automaticamente.
6. Validar transferências e URLs públicas antes de considerar a publicação concluída. Não executar push ou upload sem autorização.

## DNS — obter valores reais da Locaweb

Obter no painel/suporte os registros e destinos atribuídos ao plano para festdrinkss.com.br e www. Não reutilizar endereços de outra hospedagem. Não há IP, nameserver ou destino CNAME presumido neste documento.

Há duas possibilidades a confirmar com a Locaweb: manter a zona atual e aplicar os registros fornecidos ou delegar para os nameservers exatos informados. Antes de trocar delegação, inventariar e preservar MX, SPF, DKIM, DMARC, TXT de verificação e demais serviços. Não remover toda a zona DNS.

A Locaweb descreve a associação do domínio e configuração da zona em [seu guia oficial](https://www.locaweb.com.br/ajuda/wiki/como-configurar-a-zona-dns-de-dominios-fora-da-locaweb-hospedagem-de-sites/). A disponibilidade e os valores concretos dependem do painel. Não foi alterado DNS nesta preparação.

## HTTPS e endereço preferencial

Solicitar/ativar certificado conforme o plano, cobrindo raiz e www se ambos forem usados. A [documentação de SSL da Locaweb](https://www.locaweb.com.br/ajuda/wiki/como-emitir-o-certificado-lets-encrypt-hospedagem-de-sites/) descreve opções que variam por ambiente; não presumir certificado emitido nem renovação configurada.

Validar certificado antes de forçar HTTPS. O endereço final desejado é https://festdrinkss.com.br/. Se o painel oferecer redirecionamento, confirmar funcionamento e configurar em uma única camada após autorização. Evitar regras concorrentes no registrador, painel e aplicação. Não foram adicionados redirects em HTML/JavaScript nem regras de servidor.

Não presumir suporte a .htaccess. Antes de qualquer regra ou header de cache, confirmar servidor/plano. CSS e JS não têm nomes com hash: cache longo imutável nesses arquivos pode manter versões antigas. Compressão, cache e Range de vídeos devem ser verificados no servidor antes de ajustar performance.

## Validação após publicação

DNS, sem substituir resultados pelo valor esperado:

~~~powershell
Resolve-DnsName festdrinkss.com.br -Type A
Resolve-DnsName festdrinkss.com.br -Type AAAA
Resolve-DnsName www.festdrinkss.com.br -Type CNAME
~~~

AAAA só é exigido se IPv6 estiver configurado; www pode usar outro tipo de registro aprovado pelo provedor. Conferir com os destinos reais informados pelo painel.

HTTPS e cadeia de redirecionamentos, sem ignorar erros de certificado:

~~~powershell
curl.exe -I -L --max-redirs 5 https://festdrinkss.com.br/
curl.exe -I -L --max-redirs 5 http://festdrinkss.com.br/
curl.exe -I -L --max-redirs 5 https://www.festdrinkss.com.br/
curl.exe -I -L --max-redirs 5 http://www.festdrinkss.com.br/
curl.exe -I https://festdrinkss.com.br/sitemap.xml
curl.exe -I https://festdrinkss.com.br/robots.txt
~~~

Confirmar por GET: página final 200, certificado válido, domínio preferencial sem loop, sitemap XML e robots texto com conteúdo correto. Conferir favicon, CSS, importações JS, imagens, fontes, vídeos, canonical e metadados. Testar URL inexistente: deve ser 404. No navegador, checar Network/Console, MIME, recursos mistos e navegação mobile/tablet/desktop. Validar menus, carrossel, filtros, modais, seleção e erros do formulário; conferir mensagem de WhatsApp com dados de teste sem enviar mensagem real.

Verificar por URL que .git/HEAD, .env, README.md, AUDITORIA.md, DOMINIO.md e o ZIP não estão disponíveis. Não copiar arquivos privados para “protegê-los” com robots: a exclusão ocorre no pacote, antes do envio.

## SEO e Search Console

Canonical, sitemap, Open Graph, Twitter e JSON-LD já usam https://festdrinkss.com.br/. Há apenas uma página válida; âncoras e filtros não entram como páginas no sitemap.

Manter Brasília/DF no conteúdo. Entorno de aproximadamente 100 km é a área operacional indicada pelo responsável, condicionada às localidades realmente atendidas. Sem lista confirmada, não acrescentar municípios nem um círculo geográfico indiscriminado ao JSON-LD.

1. Criar propriedade de Domínio festdrinkss.com.br no Search Console.
2. Aplicar o TXT real fornecido pelo Google no DNS autoritativo, após autorização; manter o TXT. Não registrar token em documentação pública.
3. Após HTTPS e publicação confirmados, verificar propriedade e enviar https://festdrinkss.com.br/sitemap.xml.
4. Inspecionar a página, conferir canonical e renderização, solicitar indexação e acompanhar erros/impressões/cliques.
5. Atualizar ou importar propriedade no Bing se desejado. Não há garantia de indexação ou posição.

[Verificação oficial do Search Console](https://support.google.com/webmasters/answer/9008080).

## Checklist e pendências

- [ ] Receber dados do plano, servidor e diretório público.
- [ ] Confirmar domínio e dados de transferência no painel.
- [ ] Revisar pacote e autorizar upload; manter backup remoto.
- [ ] Confirmar valores DNS reais e preservar serviços de e-mail.
- [ ] Autorizar apontamento e publicação.
- [ ] Confirmar SSL válido e domínio preferencial, sem loops.
- [ ] Validar recursos, formulário e interface em navegador.
- [ ] Validar exclusão de arquivos privados e respostas 404.
- [ ] Confirmar sitemap/robots e Search Console.
- [ ] Medir Lighthouse e Core Web Vitals após publicação.

Não houve acesso ao painel, publicação, push, alteração de DNS ou configuração remota. Testes locais e limitações estão em [AUDITORIA.md](AUDITORIA.md).
