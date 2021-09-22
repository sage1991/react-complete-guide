import { useCallback, useState } from "react"

type API = (...args: any[]) => Promise<any>

export const useAPI = <P extends API> (api: P) => {
  const [ loading, setLoading ] = useState<boolean>(false)
  const [ error, setError ] = useState<string | null>(null)

  const proxyAPI = useCallback(async (...args: Parameters<P>) => {
    setLoading(true)
    setError(null)

    try {
      return await api(...args)
    } catch (e) {
      setError(e.message ?? "Something went wrong...")
      throw e
    } finally {
      setLoading(false)
    }
  }, [ api ]) as P

  return { loading, error, api: proxyAPI }
}
