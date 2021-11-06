export interface AuthenticationRequest {
  email: string
  password: string
  returnSecureToken: true
}


export interface AuthenticationResult {
  idToken: string
  email: string
  refreshToken: string
  expiresIn: string
  localId: string
}


export interface ChangePasswordRequest {
  idToken: string
  password: string
  returnSecureToken: true
}


export interface ChangePasswordResult {
  localId: string
  email: string
  passwordHash: string
  providerUserInfo: string
  idToken: string
  refreshToken: string
  expiresIn: string
}
