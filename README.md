# FestDrinks

Site estático de bar e coquetelaria para eventos, em HTML5, CSS3 e JavaScript ES Modules.

- Domínio oficial: https://festdrinkss.com.br/
- Hospedagem definitiva: Locaweb.
- Repositório de desenvolvimento: https://github.com/igorphellipe/festdrinks
- Idioma: pt-BR.
- Atendimento: Brasília/DF e entorno de aproximadamente 100 km, limitado às localidades realmente atendidas. Não há lista adicional de municípios confirmada no conteúdo público.

## Desenvolvimento

Não há instalação de dependências nem etapa de build. Use um servidor HTTP para carregar módulos JavaScript; não abra index.html por file://. Exemplo, se Python estiver instalado:

~~~sh
python -m http.server 8000
~~~

Acesse http://localhost:8000/. Não publique esse endereço nos metadados.

## Estrutura

- index.html: conteúdo, SEO, formulário e modais.
- css/: estilos, responsividade e animações.
- js/: catálogo, seleção, modais, menu, carrossel, vídeos e composição de URL WhatsApp.
- assets/: imagens, ícones e vídeos.
- robots.txt e sitemap.xml: rastreamento e URL canônica.
- LICENSE: licença do projeto.
- DOMINIO.md: procedimento de DNS, hospedagem, HTTPS e Search Console.
- AUDITORIA.md: diagnóstico, alterações, testes e pendências.

## Publicação na Locaweb

O diretório público deve ser confirmado no painel do plano contratado. Não presumir public_html, www, htdocs, servidor web ou suporte a .htaccess.

O conteúdo do pacote local publicacao/festdrinks-locaweb.zip deverá ser enviado diretamente a esse diretório, com index.html em sua raiz, após autorização. O pacote não inclui o próprio diretório publicacao, Git, documentação ou arquivos de desenvolvimento.

As instruções atuais em [DOMINIO.md](DOMINIO.md) substituem integralmente os procedimentos de hospedagem anteriores. Não há CNAME de hospedagem no projeto nem regra de rewrite SPA.

## Personalização

Edite o catálogo em js/drinks.js e preserve nomes/capitalização dos arquivos. O telefone atual é 5561992703375, presente em js/whatsapp.js, index.html e JSON-LD; mudanças devem ser autorizadas e sincronizadas. O formulário não envia dados para backend próprio: abre uma URL WhatsApp codificada.

Não publique o repositório inteiro por FTP. Consulte a lista permitida e o checklist antes de qualquer transferência. Não há deploy automático.
