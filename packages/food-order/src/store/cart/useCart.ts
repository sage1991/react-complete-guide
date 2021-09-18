import { useContext } from "react"
import { Cart, CartContext } from "./context"

export const useCart = (): Cart => useContext(CartContext)
