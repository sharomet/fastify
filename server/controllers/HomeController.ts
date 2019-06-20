import { FastifyRequest, FastifyReply } from 'fastify'
import { ServerResponse, IncomingMessage } from 'http'

interface Users {
    name: string
}

export class HomeController {

    public index(req: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) {
        //reply.send({ hello: 'Home Controller' });
        let users = ["name", "Test"];
        
        reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(users)
    }


    public setUsers(req: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) {
        reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(req.body);
    }

}