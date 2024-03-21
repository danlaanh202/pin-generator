import commonRoutes from './commonRoutes';

function route(app) {
  app.use('/images', commonRoutes);
}

export default route;
