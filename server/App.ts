import fastify from 'fastify'
import path from 'path'
import serveStatic from 'serve-static'

import config from './config/config.json'
import { Routes } from './Routes'
import { DataBase } from './config/DataBase'

class App {
    
    public app: any;
    private router = new Routes();

    constructor() {
        this.app = fastify({logger: true});
        this.config();
        this.router.routes(this.app);
    }

    private config() {
        new DataBase()
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
        this.app.use(serveStatic(path.join(__dirname, config.pathToClient)));
    }

}

export default new App().app;