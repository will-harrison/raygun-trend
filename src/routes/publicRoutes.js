import lazyImport from '../utils/lazyImport';

const { AuthRoutes } = lazyImport(() => ({ factory: import('../views/Auth'), name: 'AuthRoutes' }));

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];