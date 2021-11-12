import classes from "./MeetupList.module.css"
import { FC } from "react"
import { MeetupItem } from "./MeetupItem"


interface Props {
  meetups: any[]
}

export const MeetupList: FC<Props> = (props) => {
  return (
    <ul className={classes.list}>
      {
        props.meetups.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            image={meetup.image}
            address={meetup.address}
          />
        ))
      }
    </ul>
  )
}
