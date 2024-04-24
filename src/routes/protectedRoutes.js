import { Suspense } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import lazyImport from '../utils/lazyImport'
import Loading from '../views/Loading'

const { Lens } = lazyImport(() => import('../views/dataViewer/Lens'), 'Data Viewer');
const { Dashboard } = lazyImport(() => import('../views/Dashboard'), 'Dashboard');
const { Profile } = lazyImport(() => import('../views/Profile'), 'Profile');
const { Users } = lazyImport(() => import('../views/Users'), 'Users');

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export const protectedRoutes = [
  {
    path: '/app',
    element: <App />,
    children: [
      { path: '/app', element: <Lens /> },
      // { path: '/discussions/*', element: <DiscussionsRoutes /> },
      { path: '/app/users', element: <Users /> },
      { path: '/app/profile', element: <Profile /> },
      // { path: '/', element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];