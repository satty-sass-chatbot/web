# Satty Sass Chatbot

Este projeto é uma aplicação web utilizando a arquitetura de micro frontends com Vite, React e TypeScript. A aplicação é dividida em quatro módulos principais: `auth`, `dashboard`, `host` e `ui`.

## Estrutura do Projeto



### auth

O módulo `auth` é responsável pela autenticação dos usuários.

### dashboard

O módulo `dashboard` é responsável por exibir o painel de controle.

### host

O módulo `host` é o container principal que integra os diferentes micro frontends.

### ui

O módulo `ui` contém componentes reutilizáveis que podem ser compartilhados entre os diferentes micro frontends.

## Instalação

Para instalar as dependências de cada módulo, execute os seguintes comandos:

```sh
cd auth
npm install

cd ../dashboard
npm install

cd ../host
npm install

cd ../ui
npm install

cd auth
npm run dev

cd ../dashboard
npm run dev

cd ../host
npm run dev

cd ../ui
npm run dev

Build
Para construir os módulos para produção, execute os seguintes comandos:

cd auth
npm run build

cd ../dashboard
npm run build

cd ../host
npm run build

cd ../ui
npm run build

Pré-visualização
Para pré-visualizar a aplicação após o build, execute os seguintes comandos:

cd auth
npm run serve

cd ../dashboard
npm run serve

cd ../host
npm run preview

cd ../ui
npm run serve

Testes
Para executar os testes, navegue até o diretório ui e execute:

cd ui
npm run test


Configuração do Tailwind CSS
Cada módulo possui sua própria configuração do Tailwind CSS. As configurações podem ser encontradas nos arquivos tailwind.config.js de cada módulo.

Configuração do ESLint
Cada módulo possui sua própria configuração do ESLint. As configurações podem ser encontradas nos arquivos eslint.config.js de cada módulo.