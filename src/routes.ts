import { Router }  from 'express';
import BookController from './controllers/BookController';

const routes = Router();
const bookController = new BookController();

routes.get('/books', bookController.index);

export default routes;