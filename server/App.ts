import fastify from 'fastify'
import path from 'path'
import serveStatic from 'serve-static'

import { Router } from './routes/Routes'

class App {
    
    public app: any;
    public router = new Router();
    public pathToClient = '../public/dist/';

    constructor() {
        this.app = fastify({logger: true});
        this.config();
        this.router.routes(this.app);
    }

    private config() {
        /*this.app.addContentTypeParser('*', function (req, done) {
            var data = ''
            req.on('data', chunk => { data += chunk })
            req.on('end', () => {
                done(null, data)
            })
        })*/
        /*this.app.addContentTypeParser('application/json', { parseAs: 'string' }, function (req, body, done) {
            try {
                var json = JSON.parse(body)
                done(null, json)
            } catch (err) {
                err.statusCode = 400
                done(err, undefined)
            }
        })*/
        this.app.use(serveStatic(path.join(__dirname, this.pathToClient)));
    }

}

export default new App().app;