import { APP_ROUTER } from '@/config'

import { Login } from './pages/login'

export const authenticationRoute = [
  {
    path: APP_ROUTER.authentication.login,
    element: <Login />,
    children: [],
  },
]
