import { Router } from 'express';
import OrphangeController from './controllers/OrphanagesController';

const routes = Router();

routes.post('/orphanages', OrphangeController.create);

export default routes;
