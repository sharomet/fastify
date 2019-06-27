import { UserRouting } from './users/User.routing'

export class Routes {
    public routes(app: any):void {
        const userRouting = new UserRouting()
        app.register(userRouting.initRouting)
    }
}
