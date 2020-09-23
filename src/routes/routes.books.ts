import { Router } from 'express';
import { Request, Response } from 'express';

const routesBooks = Router();

routesBooks.get('/', (request: Request, response: Response) => {
    response.json({msg: "Lista de livros"});
});

export default routesBooks;