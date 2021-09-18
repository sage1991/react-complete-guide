import React, { FC, useState } from 'react'
import { Header } from "./components/Layout"
import { Meals } from "./components/Meals"
import { Cart } from "./components/Cart"
import { CartProvider } from "./store/cart"


export const App: FC = () => {
  const [ isCartShown, setIsCartShown ] = useState<boolean>(false)

  const showCart = () => setIsCartShown(true)
  const hideCart = () => setIsCartShown(false)

  return (
    <CartProvider>
      <Header showCart={showCart} />
      <main>
        <Meals />
      </main>
      <Cart show={isCartShown} hide={hideCart} />
    </CartProvider>
  );
}
