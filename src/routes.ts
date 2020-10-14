import { Router } from 'express';
import OrphangeController from './controllers/OrphanagesController';

const routes = Router();

//index, show, update, delete
routes.post('/orphanages', OrphangeController.create);
routes.get('/orphanages', OrphangeController.index);
routes.get('/orphanages/:id', OrphangeController.show);

export default routes;
