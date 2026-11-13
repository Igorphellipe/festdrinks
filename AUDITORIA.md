# Auditoria técnica — preparação para Locaweb

Data: 12/11/2026. Domínio: https://festdrinkss.com.br/. Hospedagem definitiva: Locaweb. Desenvolvimento: https://github.com/igorphellipe/festdrinks.

Este relatório e [DOMINIO.md](DOMINIO.md) substituem as instruções anteriores de deploy. Preparação local concluída, sem publicação nem alteração de infraestrutura.

## Diagnóstico

Inspecionados inventário completo, index.html, oito módulos JS, seis folhas CSS, 125 assets, robots.txt, sitemap.xml, documentação, licença e configurações locais. Arquitetura estática de página única, sem build, instalação de dependências, framework, PHP, backend ou banco de dados. Não há rotas SPA por caminhos: navegação por âncoras, filtros e modais. Não requer rewrite nem fallback de rotas.

Formulário valida entradas no navegador e compõe URL WhatsApp; sem API própria, SMTP ou persistência de formulário no servidor. Seleção em memória. Dependência externa: Google Fonts; canais externos: WhatsApp e Instagram.

Compatibilidade com Locaweb é condicional ao plano servir os arquivos por HTTP/HTTPS com MIME correto e documento inicial index.html. O plano, servidor, diretório público, protocolo de transferência, DNS e SSL ainda não foram informados pelo responsável, que aguarda a configuração. Não se presumiu suporte a .htaccess, SSH ou SFTP.

## Problemas confirmados e tratamento

| Prioridade | Evidência | Tratamento |
|---|---|---|
| Alta | CNAME e guias locais ainda descreviam a hospedagem anterior | CNAME removido; guias substituídos por Locaweb |
| Alta | Copiar toda a raiz enviaria .git, relatórios e configurações de desenvolvimento | Pacote por lista permitida, sem esses arquivos |
| Média | Não há dados do diretório público/servidor/plano para estabelecer destino remoto | Pendência explícita; nenhum caminho ou IP inventado |
| Média | HTTPS, MIME, headers e domínio publicado não foram verificados no novo servidor | Checklist de validação após publicação |
| Baixa | Documentação de publicação precisava distinguir repositório de hospedagem | README e guia atualizados; repositório serve ao desenvolvimento |

Nenhum problema de recurso ausente foi encontrado nas 147 referências locais verificadas.

## SEO, acessibilidade e desempenho

Conferidos e mantidos: canonical absoluto, og:url, imagens Open Graph/Twitter e URLs/IDs JSON-LD em https://festdrinkss.com.br/; sitemap XML de uma única URL; robots com sitemap oficial. Favicon existente. Idioma pt-BR, charset, viewport, título/descrições locais, um H1, âncoras válidas, alternativas textuais das imagens HTML e associação de erros aos campos.

Organization/Service sem preços, avaliações, endereço ou horários inventados. Brasília/DF permanece como área confirmada no JSON-LD. O entorno de aproximadamente 100 km indicado pelo responsável não foi convertido em cobertura indiscriminada nem em lista de municípios não confirmados.

Preservadas melhorias anteriores: preload do hero conforme breakpoint, prioridade alta da primeira imagem, lazy loading das imagens secundárias, fonte com display=swap e preconnect, dimensões/recortes CSS existentes e redução de movimento. Nesta atualização de infraestrutura não foi necessário alterar SEO, CSS, JS, imagens ou texto visível. Não há novas métricas de melhoria de performance para reportar.

Cache, compressão, redirects e regras de servidor ficam condicionados ao ambiente real. Não foi criado .htaccess/web.config. Não há recomendação de cache imutável longo para CSS/JS sem versionamento por hash.

## Segurança de publicação

Pacote com lista permitida: index.html, robots.txt, sitemap.xml, LICENSE, css/, js/ e assets/. Contém 143 arquivos e 29.569.044 bytes de ZIP nesta preparação. Integridade de cada entrada verificada por SHA-256 contra a origem.

Excluídos: .git, .gitattributes, .gitignore, arquivos de editor, documentação, relatórios, arquivos privados, CNAME e o próprio pacote. Nenhum .env, backend, executável ou credencial de hospedagem foi incluído. Configurações do repositório não são necessárias para servir o site. Todos os recursos front-end são públicos por natureza.

A exclusão local do pacote não comprova ausência de arquivos privados já existentes no servidor. Conferir isso após upload. Não usar robots como proteção de segredos. Headers de segurança e listagem de diretórios devem ser avaliados no plano real sem bloquear scripts inline, fontes ou mídias.

## Arquivos modificados nesta atualização

- README.md: arquitetura, infraestrutura definitiva e publicação por lista permitida.
- DOMINIO.md: guia Locaweb, estrutura de upload, DNS sem valores presumidos, HTTPS, Search Console e checklist.
- AUDITORIA.md: este diagnóstico e resultados atuais.
- CNAME: removido por ser específico da hospedagem anterior.
- .gitignore: criado para ignorar /publicacao/.
- publicacao/festdrinks-locaweb.zip: artefato local gerado, não destinado ao Git nem a ficar disponível publicamente.

Nenhum arquivo da aplicação, metadado, CSS, JS ou asset foi modificado neste lote. Não houve push, upload, DNS, alteração de configuração remota ou deploy.

## Testes executados nesta atualização

1. Comparação byte a byte dos 17 arquivos de HTML/CSS/JS/robots/sitemap: preservados.
2. Sintaxe dos oito módulos JavaScript em vm.Script, removendo import/export apenas durante o teste; não é teste de loader do navegador.
3. Execução isolada de catálogo, seleção e WhatsApp: 109 IDs únicos e imagens existentes.
4. Adicionar, alternar, remover seleção e notificar assinantes: aprovado.
5. Composição do orçamento com todas as categorias, dados de evento, acentos e caracteres especiais: aprovado, telefone mantido; nenhuma mensagem enviada.
6. 147 referências locais: arquivos presentes, capitalização e resolução sob a raiz do domínio conferidas.
7. Idioma, H1 único, IDs únicos, âncoras, alternativas de imagens HTML e aria-describedby: conferidos.
8. JSON-LD parseado, canonical e área declarada conferidos; sitemap parseado como XML no PowerShell e URL oficial confirmada.
9. Nenhuma dependência do prefixo antigo nem recurso HTTP encontrada no HTML/CSS/JS. Namespace HTTP do sitemap não é conteúdo misto.
10. ZIP inspecionado: 143 entradas de arquivo dentro da lista permitida. SHA-256 de cada entrada coincide com a origem.

## Testes não executados e limitações

Sem acesso ao painel ou servidor Locaweb: não foram testados publicação, DNS atual, certificado, redirects, MIME, compressão, cache, disponibilidade, 404 ou permissões remotas. Não inferir HTTPS ativo a partir das URLs nos arquivos.

Não houve teste em navegador nesta etapa. Menus, animações, carrossel, filtros, modais, erros do formulário e reprodução de vídeos dependem da validação visual e funcional após publicação. Não há medição Lighthouse, LCP, CLS ou INP, nem certificação WCAG. Ferramentas de navegador/Lighthouse não estavam instaladas no runtime da auditoria anterior; não foram instaladas nesta atualização. Não há comandos de build ou suíte de testes declarados no projeto.

## Recomendações e pendências

- Receber plano, servidor, diretório público e recursos de transferência do painel antes do upload.
- Obter os valores DNS reais da hospedagem e preservar registros de e-mail/verificação.
- Validar SSL para raiz e www; configurar endereço preferencial em uma única camada somente após confirmar suporte.
- Testar MIME dos módulos e mídias, erros 404 e exclusão de arquivos privados remotos.
- Testar navegação, foco, contraste, teclado, responsividade e fluxo completo de orçamento.
- Reprodução de vídeos por teclado/desktop e pausa do carrossel permanecem como recomendações de comportamento; não foram alteradas.
- Avaliar aviso de privacidade do encaminhamento dos dados ao WhatsApp conforme a operação real, sem criar política fictícia.
- Confirmar municípios atendidos antes de expandir SEO local.
- Medir desempenho depois da publicação; vídeos atuais somam 22.378.697 bytes. Não foram recomprimidos para preservar visual.
- Verificar propriedade de domínio por TXT no Search Console, enviar sitemap e acompanhar canonical, indexação e consultas locais.

A estrutura completa de upload e os procedimentos de validação estão em [DOMINIO.md](DOMINIO.md). Publicação depende de dados do painel e autorização; o pacote local não representa um site publicado.
