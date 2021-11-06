export const request = async <T> (input: RequestInfo, init?: RequestInit): Promise<T> => {
  const response = await fetch(input, init)
  const body = await response.json()
  return response.ok ? body : Promise.reject(body)
}
