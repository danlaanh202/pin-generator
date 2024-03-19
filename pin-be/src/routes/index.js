import imageRoutes from './imageRoutes';

function route(app) {
  app.use('/images', imageRoutes);
}

export default route;
