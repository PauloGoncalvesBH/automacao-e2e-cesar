# Automação E2E - CESAR
[![E2E library: protractor](https://img.shields.io/badge/e2e%20library-protractor-blue)](https://www.npmjs.com/package/protractor)
[![library: protractor-helper](https://img.shields.io/badge/library-protractor--helper-blue.svg)](https://www.npmjs.com/package/protractor-helper)

## Execução

### Pré-requisitos

- [Git](https://git-scm.com/download/) e [Node.js](https://nodejs.org/en/download/) instalados.

### Instalando as dependências e executando os testes

Todos os comandos abaixos são executados no _prompt de comando_.

**1** - Clone o repositório e acesse o diretório criado:

```sh
git clone git@github.com:PauloGoncalvesBH/automacao-e2e-cesar.git && cd automacao-e2e-cesar
```

**2** - Instale as dependências necessárias para rodar os testes:

```sh
npm ci --production
```
> O comando `npm ci` instala as dependências de forma limpa.

**3** - E, finalmente, execute os testes:

```sh
npm test
```

## Sobre o projeto

### Integração contínua

[![Build Status](https://github.com/PauloGoncalvesBH/automacao-e2e-cesar/workflows/Testes%20E2E/badge.svg)](https://github.com/PauloGoncalvesBH/automacao-e2e-cesar/actions)

A cada `git push` na branch Master os testes são executados para garantir a integridade do projeto.

### Padronização

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Toda mensagem de commit é verificada se está de acordo com a convenção de boa prática de commit. _Para saber mais, [clique aqui](https://github.com/conventional-changelog/commitlint#what-is-commitlint) e [aqui](https://commitlint.js.org/#/concepts-commit-conventions)._

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Antes de cada `git commit` o [prettier](https://github.com/prettier/prettier) entra em ação garantindo que todos os arquivos `js` e `json` estão em um estilo consistente.

> Caso ocorra algum problema em alguma dessas etapas, o comando é abortado, impedindo de que mensagem fora do padrão ou código fora do padrão seja enviado ao repositório central.
