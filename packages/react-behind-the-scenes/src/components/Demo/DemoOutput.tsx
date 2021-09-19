import React, { FC, memo } from "react"
import { MyParagraph } from "./MyParagraph"


/**
 * [ React.memo ]
 * - Component which wrapped by React.memo is only re-evaluated when it's props changed
 */
interface Props {
  show: boolean
}

export const DemoOutput: FC<Props> = memo((props) => {
  console.log("DemoOutput Component re-evaluated")
  return <MyParagraph>{ props.show && "This is new line!" }</MyParagraph>
})
