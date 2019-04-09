import * as Koa from 'koa';
import * as Router from 'koa-router';
import NoteRepo from '../repo/noteRepo';

const routerOpts: Router.IRouterOptions = {
  prefix: '/note',
};

const router: Router = new Router(routerOpts);

router.get('/', async (ctx: Koa.Context) => {
  const repo = new NoteRepo();
  ctx.body = await repo.getAll();
});

router.get('/:id', async (ctx: Koa.Context) => {
  const repo = new NoteRepo();
  ctx.body = await repo.getById(ctx.params.id);
});

router.post('/', async (ctx: Koa.Context) => {
  const repo = new NoteRepo();
  ctx.body = await repo.create(ctx.request.body);
});

router.put('/:id', async (ctx: Koa.Context) => {
  const repo = new NoteRepo();
  ctx.body = await repo.update(ctx.params.id, ctx.request.body);
});

router.delete('/:id', async (ctx: Koa.Context) => {
  const repo = new NoteRepo();
  ctx.body = await repo.delete(ctx.params.id);
});

export default router;