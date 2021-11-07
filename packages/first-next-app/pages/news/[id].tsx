import { NextPage } from "next"
import { useRouter } from "next/router"


interface Props {
  id: string
}

const NewsDetail: NextPage = (props) => {
  const router = useRouter()
  console.log(router.query)
  return (
    <>
      <h1>The News {router.query.id} Detail Page</h1>
    </>
  )
}

export default NewsDetail
