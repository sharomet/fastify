import { UserController } from './User.controller'

export class UserRouting {

    public initRouting(app: any, opts: any, next: any) {
        const apiUrl: string = '/api';
        const userController = new UserController()
        const optst = {
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
        app.post(apiUrl + '/users', optst, userController.setUsers)
        app.get(apiUrl + '/users', userController.index)
        next()
    }

}