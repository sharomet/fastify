import { FastifyRequest, FastifyReply } from 'fastify'
import { ServerResponse, IncomingMessage } from 'http'

import { IUser } from './User'
import { UserService } from './User.service'

export class UserController {

    private users: IUser[];
    
    //constructor(private userService: UserService){}

    public index(req: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) {
        const userService = new UserService()

        reply.header('Content-Type', 'application/json').code(200)

        userService.getAllUsers()
                   .then(users => {
                        this.users = users
                        reply.send(this.users)
                    })
                   .catch(err => console.log(err))
    }

    public setUsers(req: FastifyRequest<IncomingMessage>, reply: FastifyReply<ServerResponse>) {
        const userService = new UserService()
        userService.addUser(req.body)
                    .then(res => reply.header('Content-Type', 'application/json; charset=utf-8').send(res))
                    .catch(err => console.log(err))
    }

}