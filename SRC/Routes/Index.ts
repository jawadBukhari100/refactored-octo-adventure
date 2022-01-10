import express from 'express';
import { AdminRoutesApi } from "./Admin.Routes";
import { QuestionRoutesApi } from "./question.routes";
export class MainRouter {
    router: express.Router;
    constructor() {
        this.router = express.Router();
        this.routes();
    }
    routes() {
        this.router.use('/admin', AdminRoutesApi);
        this.router.use('/question', QuestionRoutesApi);
       

    }


}
export const MainApi = new MainRouter().router;
