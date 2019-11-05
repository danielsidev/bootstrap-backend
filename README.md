# API
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Um modelo de backend nodejs com typescript e gulp.

### Instalação

Requer [Node.js](https://nodejs.org/) v12+ e [Typescript](https://www.typescriptlang.org/) v3+ para rodar.

Abra um termianl, na razi do projeto, e instale as dependências. 
```sh
$ npm install 
```
Abra uma segunda guia no terminal, na raiz do projeto, e execute:
```sh
$ npm run gulp
```
Na primeira guia no terminal, na raiz do projeto, e execute:
```sh
$ npm run dev
```
----
 >O Gulp realizará a transpilação do código .ts em .js, e alocará no diretório dist na raiz do projeto. Esse é o diretório para publicação.
 
 ----
 >O Gulp ficará assistindo os arquivos .ts, logo a cada alteração em um arquivo .ts, dentro de 5 segundos, um novo arquivo .js será gerado.
 ----