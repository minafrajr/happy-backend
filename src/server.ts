import express, { query } from 'express';
import './database/connection';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

const app = express();
app.use(express.json());

/** 
 * {
// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE, PATCH

// Parâmetros

// GET = Buscar uma informação (lista/item)
// POST = Criando uma informação
// PUT = Editando uma informação
// DELETE = Deletando uma informação

// Query: http://loacalhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (identificar um recurso)
// Body: http://localhost:3333/users/

// app.post('/users/:id',(req,res)=>{

//       console.log(req.query);
//       console.log(req.params);
//       console.log(req.body);

//       return res.json({message: 'Hello World'})
// })
}*/

app.get('/users', (req, res) => {
  return res.json({ message: 'Hello World' });
});

app.post('/orphanages', async (req, res) => {
  const {
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  } = req.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    latitude,
    longitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends,
  });

  await orphanagesRepository.save(orphanage);

  return res.json({ message: 'Hello World' });
});

app.listen(3333);

// banco de dados
// driver FocusNavigationEvent, query MSBlobBuilder, orm
