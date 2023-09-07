import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { ROUTER } from '@/config';
import { Counter } from '@/features/couter';
import { Home, LoginPage, NotFoundPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />,
    children: [],
  },
  { path: '/counter', element: <Counter /> },
  {
    path: ROUTER.authentication.login,
    element: <LoginPage />,
  },
]);

export function MyRouterProvider() {
  return <RouterProvider router={router} />;
}
