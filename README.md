- Requisitos e ambiente 

- Visual Studio Code
  Extensões:
- Insomnia ou Postman
- Postgree - para o db
- Docker 


---
   ## Dependencias locais do projeto


    eslint
    express
    express-async-errors
    pg
    typeorm
   ## Dependencias em modo de desenvolvimento -D

     @types/crypto-js
     @types/express 
     @types/js-base64
     @types/jsonwebtoke
     @types/node
     @typescript-eslint/eslint-plugin
     @typescript-eslint/parser
     eslint-config-airbnb-base
     eslint-config-prettier
     eslint-import-resolver-typescript
     eslint-plugin-import
     eslint-plugin-prettier
     prettier
     ts-node-dev
     typescript



  ## recomendo muito dar uma olhada nesse tutorial 
Criando setup Ininical - Referencias.
https://dev.to/melquisedecfelipe/configurando-eslint-no-node-com-express-e-typescript-58p9



- Recursos nescessários na api

   // requisitos funcionais 
- Usuário
 [ ] Cadastrar novo usuário
 [ ] Efeturar login e retornar token de acesso

- PIX
 [ ] Efetuar solicitação de PIX
 [ ] Receber PIX
 
 Regras: 
  - quando receber um pix, salvar na tabela de transação

   ## Meus passos inicias  :
criar o ambiente com ESlint.

dar um yarn start:dev ( para testar)
Criar o arquivo do typeORM ( ORMCONFIG)
E NELE colocar as dados do banco de dados usados

Criar a estrutura de pastas.(
@types(subpasta express),config, entity,middlewares,resource(sbbpastas :pix, transations,user(subpastas:dtos,),routes,shared,utils,

na pasta entities ( criar a primeira entities 'pix')
depois ir no file tsconfig.josn e acrescentar os scripsts 
 "emitDecoratorMetadata": true,
     "strictPropertyInitialization": false,
     "experimentalDecorators": true,
"typeRoots": [
      "./src/@types",
      "./@types",
      "./node_modules/@types"
    ]
(

Criar a entidade 'User.ts'
para isso podemos copiar todo script do file pix para ele e so exluir os desnecessarios 
Criar as primeiras rotas ( pix.routes)
comecar importando objeto {Route} do express
depois de criar todas as rotas 
Criar o arquivo  user.route.ts 
salvar a rota no index.ts
## to be continue
