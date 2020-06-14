# Connec

Connec é uma aplicação WEB com o intuito de solucionar problemas relacionados ao gerenciamento de filas de hospitais nas questões de gerenciamento de órgãos e também auxiliar hospitais a terem um maior controle sobre o processo.

## Instalação

Obrigatório o uso de:
```bash
nvm - Node Version Manager.
git-bash - Versionamento de código e git-flow.

node >= 11.14.0 : Dê preferência a mesma ou uma LTS.
npm >= 6.7.0 : Dê preferência a mesma.
```
nvm https://github.com/coreybutler/nvm-windows

git-bash https://git-scm.com/downloads 


## Desenvolvimento
Após a instalação e verificação das tecnologias citadas, é preciso ter em mente alguns scripts para iniciar o ambiente de desenvolvimento:
```bash
npm install          : Instalar dependências no repositório;
npm start            : Ambiente de desenvolvimento com o webpack e o servidor;
npm run build        : Para compilação dos arquivos apenas;
npm run lint:js:     : Testar se os script estão de acordo com o eslint;
npm run lint:js:fix: : Testar scripts e ajustes automáticos no código;
```

## Fluxo de alterações no código
Este repositório utiliza git como ferramenta para versionamento e manutenção de código, então é obrigatório o uso de git-flow. https://www.atlassian.com/br/git/tutorials/comparing-workflows/gitflow-workflow.

Tendo isso em mente, usamos o padrão de uma branch ramificada para uso apenas de desenvolvimento, segue o padrão a ser seguido:

1º Sempre que haver necessidade de uma nova alteração, ir para a branch develop
```bash
git checkout develop
```

2º Apartir da develop, realizar o pull para evitar conflitos
```bash
git pull origin develop
```

3º Criar uma branch para conter suas alterações
```bash
git checkout -b '[tipo]/titulo relevante a alteração'
```

4ª A cada commit é importante seguir o padrão conforme https://commitlint.js.org/#/ .
```bash
git commit -m '[tipo](paginaAlterada): descricao'
```

5ª Realizar a Pull Request marcando algum administrador no github, é importante que a master se mantém intocada, sendo atualizada periodicamente. Fazer a pull request como: [ sua branch -> develop ]
```bash
git push -u origin 'suaBranch'
```

## Padrões

O repositório contém o husky.js como tecnologia para manter padrão de commit, então é necessário se atentar ao commitar alterações para sempre manter o nosso histórico atualizado.

Recomendado o uso da extensão do VSCODE para Eslint, assim facilitando o desenvolvimento e evitando problemas porque o código também deve estar conforme regras do Eslint padrão. Também usamos o PUG como template para HTML, que também possui seu próprio linter.

Realizar commits ou push fora do padrão e ou com arquivos errados sem seguir o linter, nosso repositório irá automaticamente cancelar seu commit ou push.