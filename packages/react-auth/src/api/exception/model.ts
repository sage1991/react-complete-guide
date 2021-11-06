
export interface ApiException {
  error: {
    errors: {
      domain: string
      reason: string
      message: string
    }[]
    code: number
    message: string
  }
}
