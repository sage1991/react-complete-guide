import { useCallback, useState } from "react"


type Api = (...args: any[]) => Promise<any>
type PromisedReturn<P extends Api> = ReturnType<P> extends PromiseLike<infer T> ? T : P
type ApiState<T> = { data: T, status: "resolved" }
                | { status: "rejected", error: string }
                | { status: "pending" }


export const useApi = <T extends Api, P extends PromisedReturn<T>> (api: T, initialValue?: P) => {
  const [ state, setState ] = useState<ApiState<P>>(initialValue ? { status: "resolved", data: initialValue } : { status: "pending" })

  const call = useCallback((...args: Parameters<T>): Promise<ApiState<P>> => {
    setState({ status: "pending" })
    return (
      api(...args)
        .then<ApiState<P>>(result => {
          return { status: "resolved", data: result }
        })
        .catch<ApiState<P>>(e => {
          return { status: "rejected", error: e.message }
        })
        .then((__state) => {
          setState(__state)
          return __state
        })
    )
  }, [ api ])

  return { call, ...state }
}
