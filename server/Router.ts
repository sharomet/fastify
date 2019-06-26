import { HomeController } from './controllers'
import { UserRouting } from './users/User.routing'

export class Router {

    private apiUrl = '/api';
    private homeController: HomeController = new HomeController();

    public routes(app: any):void {

        const userRouting = new UserRouting()

        app.get(this.apiUrl, this.homeController.index)

        app.register(userRouting.initRouting)
    }
}
