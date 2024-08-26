# Guia de comandos do projeto: Estilização/Sintaxe e TypeScript

## Instalação do Node.js

```bash
# Iniciando projeto Node.JS
npm init -y
```

## Instalação do TypeScript

```bash
# Instalação de dependências
npm i -D typescript tsx tsup

# Types para Node.js
npm i -D @types/node

# Iniciando projeto TypeScript
npx tsc --init

# Configuração do arquivo tsconfig.json
{
    "compilerOptions": {
        "target": "ES6",
        "module": "CommonJS",
        "moduleResolution": "node",
        "rootDir": "./src",
        "outDir": "./dist",
        "strict": true,
        "esModuleInterop": true,
        "removeComments": true
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}
```

## Instalação do Prettier e EsLint

```bash

# Instalação das dependências
npm i -D eslint eslint-config-prettier
npm i -D prettier

# Configuração do arquivo .eslintrc.json
npm init @eslint/config
```

## Instalação do Husky

```bash
# Instalação das dependências
npm i -D husky
npm pkg set scripts.prepare="husky install"
npm run prepare

# Configuração do arquivo .husky/pre-commit
npm run fix
```

## Scripts padrão

```json
"scripts": {
    "dist": "tsup src",
    "fix": "prettier . --write && eslint --fix .",
    "prepare": "husky install",
    "start:dev": "tsx --env-file=.env.dev src/index.ts",
    "start:watch": "tsx watch --env-file=.env.dev src/index.ts",
    "start:dist": "npm run dist && node dist/src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
}
```
