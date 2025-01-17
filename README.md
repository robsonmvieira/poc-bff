<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Esse é um projeto de demo de conhecimento.

Foi usada boas práticas como clean arch, solid, variáveis de ambiente, validação de inputs, formatação de output, notification pattern, cache, migrations, docker, etc

## Tecnologia usadas

- Nestjs
- Docker
- Postrgres
- Typeorm
- Class Validator
- Uuid
- Jest
- Redis
- Docker-compose
- Dotenvs
- Swagger

## Clone o projeto

 <p>Clone o projeto e navegue até a pasta do código clonado.</p>

```bash
$ git clone https://github.com/robsonmvieira/poc-bff
```

## Instalação

 <p>É necessário ter o docker instalado na máquina.</p>

```bash
$ npm install
```

## Rodando o projeto

 <p>Crie um arquivo .env dentro da pasta env. Há um .env.example como base. </p>

  <p>Na raiz do projeto, rode o comando para levantar os containers</p>

```bash
$ docker-compose up
```

  <p>Uma vez que os containers estejam rodando, pode usar os comandos abaixo para iniciar o projeto</p>

```bash
# development
$ npm run start

# watch mode
$ npm run:dev

# production mode
$ npm run start:prod
```

## Documentação da API

  <p>É possível ver os endpoints disponíveis na aplicação através do swagger. Ao rodar a aplicação, poder acessa na porta</p>

```bash
# no browser
$ localhost:3001/docs
```

## Desenvolvimento

<p>Caso você tenha feito alguma mudança nas entidades e queira/precise adicionar ou alterar alguma dos models e entidades, você pode gerar uma migrations</p>
<p>Como há uma pasta envs para seja fácil usar vários arquivos .envs, o comando das migrations é um pouco customizado.</p>
<p>Há um arquivo(ormconfig.ts) responsável por carregar as variáveis de ambiente, uma vez que o script é rodado com a aplicação no chão e o módulo de config não está rodando.</p>

<p>Esse exemplo é de uma criação de uma migration, onde ele vai criar dentro mais uma migrations dentro do módulo de database.
Uma alternativa é navegar até a pasta e gerar lá a migration só passando o nome que deseja.
</p>

```bash
# Exemplo de criação na raiz do projeto
$ (grep -v '^#' envs/.env | xargs) && npm run typeorm -- -d ormconfig.ts migration:generate ./src/modules/database/migrations/CreateChecklist
```

### Rodar as Migrations

 <p>Para rodar a migration criada</p>

```bash
# Exemplo de criação na raiz do projeto
$ (grep -v '^#' envs/.env | xargs) && npm run typeorm -- -d ./ormconfig.ts migration:run
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Produzido por

- Author - [Robson Maia](https://github.com/robsonmvieira)
- Linkedin - [Linkedin](https://www.linkedin.com/in/robsonmaia/)

## Licença

Nest is [MIT licensed](LICENSE).
