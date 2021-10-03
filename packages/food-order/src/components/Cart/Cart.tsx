import React, { FC, ReactNode, useLayoutEffect, useState } from "react"
import { Modal } from "../UI"
import { useCart } from "../../store/cart"
import { CartItem } from "./CartItem"
import { CartItemModel } from "../../model"
import { Checkout } from "./Checkout"
import { Consumer, submitOrder } from "../../api/orders"
import classes from "./Cart.module.css"


interface Props {
  show: boolean
  hide: () => void
}

export const Cart: FC<Props> = (props) => {
  const cart = useCart()
  const [ isCheckoutShown, setIsCheckoutShown ] = useState<boolean>(false)
  const [ onSubmitting, setOnSubmitting ] = useState<boolean>(false)
  const [ didSubmit, setDidSubmit ] = useState<boolean>(false)

  useLayoutEffect(() => {
    if (props.show) {
      setOnSubmitting(false)
      setDidSubmit(false)
      setIsCheckoutShown(false)
    }
  }, [ props.show ])

  const onAddClick = (model: CartItemModel) => () => cart.addItem({ ...model, amount: 1 })
  const onRemoveClick = (model: CartItemModel) => () => cart.removeItem(model.id)
  const onOrderButtonClick = () => setIsCheckoutShown(true)
  const onCancel = () => setIsCheckoutShown(false)

  const onConfirm = async (consumer: Consumer) => {
    try {
      setOnSubmitting(true)
      await submitOrder(consumer, cart.items)
      setDidSubmit(true)
      cart.clear()
    } catch (e) {
      console.error(e)
    } finally {
      setOnSubmitting(false)
    }
  }

  const cartItems = cart.items.map(item => {
    return (
      <CartItem key={item.id}
                name={item.name}
                price={item.price}
                amount={item.amount}
                onAddClick={onAddClick(item)}
                onRemoveClick={onRemoveClick(item)} />
    )
  })

  let modalContents: ReactNode = (
    <>
      <ul className={classes["cart-items"]}>
        { cartItems }
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ cart.totalAmount }</span>
      </div>
      { isCheckoutShown && <Checkout onCancel={onCancel} onConfirm={onConfirm} /> }
      {
        !isCheckoutShown &&
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.hide}>Close</button>
          { cart.items.length > 0 && <button className={classes.button} onClick={onOrderButtonClick}>Order</button> }
        </div>
      }
    </>
  )

  if (onSubmitting) {
    modalContents = <p>Submitting your order... please wait...</p>
  }

  if (didSubmit) {
    modalContents = (
      <>
        <p>Successfully sent the order!</p>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.hide}>Close</button>
        </div>
      </>
    )
  }

  return (
    <Modal show={props.show} onBackdropClick={props.hide}>
      { modalContents }
    </Modal>
  )
}
