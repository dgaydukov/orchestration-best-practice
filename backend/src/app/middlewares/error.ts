/**
 * Error handling middleware
 */

import * as Koa from 'koa';
import * as HttpStatus from 'http-status-codes';


export const ErrorMiddleware = async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
        await next();
    } catch (error) {
        ctx.status = error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
        error.status = ctx.status;
        ctx.body = { error };
        ctx.app.emit('error', error, ctx);
    }
}