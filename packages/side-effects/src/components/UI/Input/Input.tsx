import React from "react"
import classes from "./Input.module.css"


interface Props {
  label: string
  id?: string
  type?: string
  value?: string
  valid?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className={`${classes.control} ${props.valid ? "" : classes.invalid}`.trim()}>
      <label htmlFor={props.id}>{ props.label }</label>
      <input ref={ref}
             id={props.id}
             type={props.type}
             value={props.value}
             onChange={props.onChange}
             onBlur={props.onBlur} />
    </div>
  )
})

