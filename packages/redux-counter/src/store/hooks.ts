import { useDispatch as useDispatchFromReactRedux, useSelector as useSelectorFromReactRedux } from "react-redux"
import { RootDispatch, RootState } from "./store"


export const useDispatch = () => useDispatchFromReactRedux<RootDispatch>()

export const useSelector = <T> (
  selector: (state: RootState) => T,
  equalityFn?: (left: T, right: T) => boolean
) => useSelectorFromReactRedux<RootState, T>(selector, equalityFn)
