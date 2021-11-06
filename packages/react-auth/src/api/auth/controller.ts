import { Const } from "../../common"
import { AuthenticationRequest, AuthenticationResult, ChangePasswordRequest, ChangePasswordResult } from "./model"
import { request } from "../../http"


export const signUp = (payload: AuthenticationRequest): Promise<AuthenticationResult> => {
  return request<AuthenticationResult>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${Const.API_KEY}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
}


export const signIn = (payload: AuthenticationRequest): Promise<AuthenticationResult> => {
  return request<AuthenticationResult>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${Const.API_KEY}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
}


export const changePassword = (payload: ChangePasswordRequest): Promise<ChangePasswordResult> => {
  return request<ChangePasswordResult>(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${Const.API_KEY}`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  })
}
