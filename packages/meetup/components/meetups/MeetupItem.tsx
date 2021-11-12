import classes from "./MeetupItem.module.css"
import { FC } from "react"
import { Card } from "../ui"
import { useRouter } from "next/router"


interface Props {
  id: string
  title: string
  image: string
  address: string
}

export const MeetupItem: FC<Props> = (props) => {
  const router = useRouter()
  const showDetail = () => router.push(`/meetup/${props.id}`)

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{ props.title }</h3>
          <h3>{ props.address }</h3>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetail}>Show Details</button>
        </div>
      </Card>
    </li>
  )
}
