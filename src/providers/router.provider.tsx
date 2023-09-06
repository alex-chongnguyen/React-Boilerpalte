import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';

import { Home, NotFoundPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
]);

export function MyRouterProvider() {
  return <RouterProvider router={router} />;
}
