import fastify from 'fastify'

import { UserController } from './User.controller'
import config from '../config/config.json'

export class UserRouting {
    
    public initRouting(app: any, opts: any, next: any) {
        const userController = new UserController()
        const opt: fastify.RouteShorthandOptions = {
            schema: {
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' },
                            email: { type: 'string' },
                            password: { type: 'string' }
                        }
                    }
                }
            }
        }
        app.post(`${config.apiUrl}/users`, opt, userController.setUsers)
        app.get(`${config.apiUrl}/users`, userController.index)
        next()
    }

}