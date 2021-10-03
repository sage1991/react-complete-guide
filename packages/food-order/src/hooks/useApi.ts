import { useCallback, useState } from "react"


export type Api<T> = (...args: any[]) => Promise<T>

export const useApi = <T extends Api<P>, P> (api: T) => {
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<string>()

  const request = useCallback(async (...args: Parameters<T>) => {
    setLoading(true)
    setError(undefined)

    try {
      return await api(...args)
    } catch (e) {
      setError(e.message)
      throw e
    } finally {
      setLoading(false)
    }
  }, [ api ]) as T

  return { loading, error, request }
}
