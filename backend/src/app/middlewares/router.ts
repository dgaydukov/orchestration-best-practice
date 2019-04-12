/**
 * Router middleware
 */

import * as Koa from 'koa';
import * as Router from 'koa-router';
import authRouter from '../api/auth.controller';
import noteRouter from '../api/note.controller';
import { API_VERSION } from '../env';

const router = new Router({
    prefix: `/${API_VERSION}`
});

router.get('/', async (ctx: Koa.Context) => {
    ctx.body = `Node.js Quickstart App, API version: ${API_VERSION}`;
});

router.use(authRouter.routes(), authRouter.allowedMethods());
router.use(noteRouter.routes(), noteRouter.allowedMethods());


export const RouterMiddleware = router.routes();