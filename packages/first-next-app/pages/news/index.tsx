import { NextPage } from "next"
import Link from "next/link"


const News: NextPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        {
          newsList.map(news => {
            return (
              <li key={news.id}>
                <Link href={`/news/${news.id}`}>
                  { news.title }
                </Link>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default News

const newsList = [
  {
    id: 1,
    title: "NextJS is a Great Framework"
  },
  {
    id: 2,
    title: "Antonio Conte must move Heaven and Earth to sign Chiellini, 37, and let him run the show at Tottenham"
  },
  {
    id: 3,
    title: "Son Heung-min scores first Tottenham goal under Antonio Conte to continue amazing record for new managers"
  }
]
