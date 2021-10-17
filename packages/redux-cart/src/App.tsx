import React, { FC, useEffect, useRef } from "react"
import { Layout } from "./components/layout"
import { Cart } from "./components/cart"
import { Products } from "./components/shop"
import { useUI } from "./context"
import { Notification } from "./components/ui"
import { fetchCart, updateCart, useDispatch, useSelector } from "./store"


export const App: FC = (props) => {
  const { isShowCart } = useUI()
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.cart.notification)
  const items = useSelector((state) => state.cart.items)
  const didMount = useRef<boolean>(false)

  useEffect(() => {
    dispatch(fetchCart())
  }, [])

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }

    dispatch(updateCart(items))
  }, [ items, dispatch ])

  return (
    <>
      { notification && <Notification {...notification} /> }
      <Layout>
        { isShowCart && <Cart /> }
        <Products />
      </Layout>
    </>
  )
}
