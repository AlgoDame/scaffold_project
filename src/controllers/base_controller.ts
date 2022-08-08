import { Request, Response, NextFunction, Router } from "express";
import { UserHandler } from "../services/users/user_handler";

export class BaseController extends AuthController {
    /**
     * Create the routes.
     *
     * @method loadRoutes
     */
    public loadRoutes(prefix: string, router: Router) {
        this.registerUser(prefix, router);
        

    }


    private registerUser(prefix: string, router: Router): any {
        router.post(prefix + "/register", async (req: Request, res: Response) => {
            new UserHandler().create(req, res);
        });
    }

   

}
