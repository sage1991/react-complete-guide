import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { MeetupDetails } from "../../components/meetups/MeetupDetails"


interface Props {
  id: string
  image: string
  title: string
  address: string
  description: string
}

const MeetupDetailPage: NextPage<Props> = (props) => {
  return (
    <MeetupDetails
      image={props.image}
      title={props.title}
      address={props.address}
      description={props.description}
    />
  )
}

export default MeetupDetailPage


type Params = {
  id: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async (props) => {
  const ONE_DAY = 3600 * 24
  const response = await fetch(`http://localhost:3000/api/meetup/${props.params?.id}`)
  const meetup = await response.json()
  return Promise.resolve({
    props: meetup,
    revalidate: ONE_DAY  // regenerate page for given period (seconds)
  })
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/meetup/id")
  const ids: string[] = await response.json()
  return {
    paths: ids.map(id => ({ params: { id } })),
    fallback: false
  }
}
