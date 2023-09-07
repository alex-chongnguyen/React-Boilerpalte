import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { Counter } from '@/features/couter';
import { Home, NotFoundPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />,
    children: [],
  },
  { path: '/counter', element: <Counter /> },
]);

export function MyRouterProvider() {
  return <RouterProvider router={router} />;
}
