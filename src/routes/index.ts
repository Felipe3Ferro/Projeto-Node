import { Router } from 'express';

const routes = Router();

routes.get('/', (request, respose) => respose.json({ message: 'Ola Mundo' }));

export default routes;
