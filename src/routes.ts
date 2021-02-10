import { Router, Request, Response } from 'express';
import { saveUser, listUser, login } from './controller/UserController'
import { auth } from './middlewares/auth'
import logger from './utils/logger';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    //logger.info('rota principal ')
    return response.json({ message: 'Hellow Word' })
});
routes.post('/session', login)
routes.post('/users', saveUser)
routes.use(auth)
routes.get('/listuser', listUser)

export default routes;