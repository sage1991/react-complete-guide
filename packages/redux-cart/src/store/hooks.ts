import {
  useSelector as useSelectorFromReactRedux,
  useDispatch as useDispatchFromReactRedux
} from "react-redux"
import { RootDispatch, RootState } from "./store"


export const useSelector = <T> (
  selector: (state: RootState) => T,
  equalityFn?: (left: T, right: T) => boolean
) => useSelectorFromReactRedux<RootState, T>(selector, equalityFn)

export const useDispatch = () => useDispatchFromReactRedux<RootDispatch>()
