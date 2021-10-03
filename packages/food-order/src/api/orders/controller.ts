import { Consumer, OrderResponse } from "./model"
import { CartItemModel } from "../../model"


export const submitOrder = (consumer: Consumer, items: CartItemModel[]): Promise<OrderResponse> => {
  return (
    fetch("https://react-burger-c56a9.firebaseio.com/orders.json", {
      method: "post",
      body: JSON.stringify({ consumer, items })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`request failed with status ${response.status}`)
        }
        return response.json()
      })
  )
}
