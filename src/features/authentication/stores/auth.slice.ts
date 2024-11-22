import { createSlice } from '@reduxjs/toolkit'

import { TUser } from '@/interfaces'

export interface AuthUserState {
  authUser: TUser | null
}

const initialState: AuthUserState = {
  authUser: null,
}

export const authUserSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload
    },
    removeAuthUser: (state) => {
      state.authUser = null
    },
  },
})

export const { setAuthUser, removeAuthUser } = authUserSlice.actions

export const authUserReducer = authUserSlice.reducer
