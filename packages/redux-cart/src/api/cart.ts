import { CartItemModel } from "../model"


export const updateCart = (carts: CartItemModel[]) => {
  return (
    fetch("https://react-burger-c56a9.firebaseio.com/cart.json", {
      method: "put",
      body: JSON.stringify(carts),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`update cart fail with status: ${response.status}`)
        }
        return response.json()
      })
  )
}


export const fetchCart = (): Promise<CartItemModel[]> => {
  return (
    fetch("https://react-burger-c56a9.firebaseio.com/cart.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`fetch cart fail with status: ${response.status}`)
        }
        return response.json()
      })
      .then((items) => items ?? [])
  )
}
