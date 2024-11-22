import { configureStore } from '@reduxjs/toolkit'

import { authUserReducer } from '@/features/authentication'

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
