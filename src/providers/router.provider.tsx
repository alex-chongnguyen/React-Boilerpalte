import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from '@/components/errors'
import { authenticationRoute } from '@/features/authentication/route'

const router = createBrowserRouter([
  {
    path: '/',
    element: <></>,
    errorElement: <NotFound />,
    children: [],
  },
  ...authenticationRoute,
])

export function MyRouterProvider() {
  return <RouterProvider router={router} />
}
