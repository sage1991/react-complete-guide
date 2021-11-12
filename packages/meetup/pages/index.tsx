import type { NextPage, GetStaticProps, GetServerSideProps } from "next"
import { MeetupList } from "../components/meetups"


interface Props {
  meetups: any[]
}

const HomePage: NextPage<Props> = (props) => {
  return <MeetupList meetups={props.meetups} />
}

export default HomePage

// pre-generate page
export const getStaticProps: GetStaticProps = async (props) => {
  const ONE_DAY = 3600 * 24
  const response = await fetch("http://localhost:3000/api/meetup")
  const meetups = await response.json()
  return Promise.resolve({
    props: { meetups },
    revalidate: ONE_DAY  // regenerate page for given period (seconds)
  })
}

// generate page for every request
// export const getServerSideProps: GetServerSideProps = (context) => {
//   return Promise.resolve({
//     props: { meetups: MEETUPS }
//   })
// }
