import { Router } from 'express';
import { apiMethod } from '../util/apiMethod';
import { getSteamProfileID, getSteamProfileDetails } from '../controller/userController';

export class AuthRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get('/find/:id', apiMethod(getSteamProfileID));
    this.router.get('/profile/:id', apiMethod(getSteamProfileDetails));
  }
}

const authRouter = new AuthRouter();
export default authRouter.router;
