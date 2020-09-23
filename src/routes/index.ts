import { Router }  from 'express';
import routesBooks from './routes.books';

const routes = Router();

routes.use('/books', routesBooks);

export default routes;