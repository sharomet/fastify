import { FastifyRequest, FastifyReply } from 'fastify'
import { ServerResponse, IncomingMessage } from 'http'

interface Users {
    name: string
}

export class UserController {

    public index(req: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) {
        let users = [
            {"id": 1, "name": "Alexander"},
            {"id": 2, "name": "John"},
            {"id": 3, "name": "Michel"}
        ];
        reply.header('Content-Type', 'application/json').code(200)
        reply.send(users)
    }

    public setUsers(req: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) {
        reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send(req.body)
    }

}