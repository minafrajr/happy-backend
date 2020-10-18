//  Rota = conjunto
//  Recurso = usuário

//  Métodos HTTP = GET, POST, PUT, DELETE, PATCH

//  Parâmetros

//  GET = Buscar uma informação (lista/item)
//  POST = Criando uma informação
//  PUT = Editando uma informação
//  DELETE = Deletando uma informação

//  Query: http:loacalhost:3333/users?search=diego
//  Route Params: http:localhost:3333/users/1 (identificar um recurso)
//  Body: http:localhost:3333/users/

//  app.post('/users/:id',(req,res)=>{

//        console.log(req.query);
//        console.log(req.params);
//        console.log(req.body);

//        return res.json({message: 'Hello World'})
//  })

import express from 'express';
import 'express-async-errors';
import './database/connection';
import routes from './routes';
import path from 'path';
import errorHandler from './errors/handler';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);
