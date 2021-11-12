import { NextPage } from "next"
import { NewMeetupForm } from "../../components/meetups"
import { useRouter } from "next/router"


const NewMeetupPage: NextPage = () => {
  const router = useRouter()

  const addMeetup = (meetup: any) => {
    fetch("/api/meetups", {
      method: "post",
      body: JSON.stringify(meetup),
      headers: { "Content-Type": "application/json" }
    })
      .then(() => router.replace("/"))
  }

  return <NewMeetupForm addMeetup={addMeetup} />
}

export default NewMeetupPage
