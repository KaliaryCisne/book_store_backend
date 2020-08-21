import { Request, Response, request} from 'express';

const books: Array<any> = [];

 export default class BookController {
     
    index(request: Request, response :Response) {
        return response.json(books);
    }
 }