import React, { FC, useState } from 'react'
import { Header } from "./components/Layout"
import { Meals } from "./components/Meals"
import { Cart } from "./components/Cart"


export const App: FC = () => {
  const [ isCartShown, setIsCartShown ] = useState<boolean>(true)

  const showCart = () => setIsCartShown(true)
  const hideCart = () => setIsCartShown(false)

  return (
    <>
      <Header showCart={showCart} />
      <main>
        <Meals />
      </main>
      <Cart show={isCartShown} hide={hideCart} />
    </>
  );
}
