import { FastifyRequest, FastifyReply } from 'fastify'
import { ServerResponse, IncomingMessage } from 'http'

import { HomeController } from '../controllers'

export class Router {

    private apiUrl = '/api/';
    private homeController: HomeController = new HomeController();

    public routes(app: any) {

        app.get(this.apiUrl, (req: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>)=> this.homeController.index(req, reply))

        app.post(this.apiUrl + 'users', (req: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => this.homeController.setUsers(req, reply))
        /*app.post(this.apiUrl + 'users', (req: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) => {
            reply
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(req.body);
        })*/
    }

}