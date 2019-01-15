import fastify from 'fastify'
import bodyParser from 'body-parser'
import path from 'path'
import serveStatic from 'serve-static'

import { Router } from './routes/Routes'

class App {
    
    public app: any;
    public router = new Router();
    public pathToClient = '../public/';

    constructor() {
        this.app = fastify({logger: true});
        this.config();
        this.router.routes(this.app);
    }

    private config() {
        this.app.use(bodyParser.json());
        this.app.use(serveStatic(path.join(__dirname, this.pathToClient)));
    }
}

export default new App().app;