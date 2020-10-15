import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';
import OrphangeController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

//index, show, update, delete
routes.get('/orphanages', OrphangeController.index);
routes.get('/orphanages/:id', OrphangeController.show);
routes.post('/orphanages', upload.array('images'), OrphangeController.create);

export default routes;
