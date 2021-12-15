import 'express-async-errors';
import express from 'express';
import { createConnection } from 'typeorm';
import cors from 'cors';
import {globalErrors} from './middlewares/globalErros'
import routes from './routes';


  // Caso a conexao com banco de dados nao fosse  ok entraria  no "catch"
createConnection().then(connection => {
  const app = express();
  const PORT = 3333;
  
  app.use(cors())
  app.use(express.json())
  app.use(routes);

  app.use(globalErrors);
  
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Servidor  está rodando na porta 3333 e a conexao com o banco de dados foi ok at http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.log("Unable to connect to the database", error)
});
