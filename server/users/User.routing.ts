import { UserController } from './User.controller'
import config from '../config/config.json'
import { User } from './User'

export class UserRouting {

    user: User = {
        name: 'Alex',
        email: 'test@mail.com'
    }

    public initRouting(app: any, opts: any, next: any) {
        const userController = new UserController()
        const opt = {
            schema: {
                response: {
                    200: {
                        type: 'object',
                        properties: {
                            name: { type: 'string' }
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