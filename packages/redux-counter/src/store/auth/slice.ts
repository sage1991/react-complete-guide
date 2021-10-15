import { CaseReducer, createSlice } from "@reduxjs/toolkit"


export interface AuthState {
  authenticated: boolean
}

const login: CaseReducer<AuthState> = (state) => {
  state.authenticated = true
}

const logout: CaseReducer<AuthState> = (state) => {
  state.authenticated = false
}

const INITIAL_STATE: AuthState = {
  authenticated: false
}

const slice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  reducers: {
    login,
    logout
  }
})

export const { reducer, actions } = slice
export type AuthAction = typeof actions
