import React, { createContext, FC, useCallback, useContext, useState } from "react"


interface UIAction {
  showCart: (isShowCart?: boolean) => void
}

interface UIState {
  isShowCart: boolean
}

// @ts-ignore
const UIContext = createContext<UIState & UIAction>()

export const UIProvider: FC = (props) => {
  const [ isShowCart, setIsShowCart ] = useState<boolean>(false)
  const showCart = useCallback((__isShowCart: boolean = true) => setIsShowCart(__isShowCart), [])

  return (
    <UIContext.Provider value={{ isShowCart, showCart }}>
      { props.children }
    </UIContext.Provider>
  )
}

export const useUI = () => useContext(UIContext)
