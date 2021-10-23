import React, { FC, useEffect } from "react"
import { Route, useParams, Link, useRouteMatch } from "react-router-dom"
import { Comments } from "../../components/comments"
import { HighlightedQuote } from "../../components/quotes"
import { useApi } from "../../hooks"
import { fetchQuote } from "../../api"
import { LoadingSpinner } from "../../components/ui"
import { NoQuotesFound } from "../../components/quotes/NoQuotesFound"


interface Params {
  quoteId: string
}

export const QuoteDetail: FC = () => {
  const api = useApi(fetchQuote)
  const { quoteId } = useParams<Params>()
  const match = useRouteMatch()

  useEffect(() => {
    api.call(quoteId)
  }, [ api.call, quoteId ])

  if (api.status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    )
  }

  if (api.status === "rejected") {
    return (
      <p className="centered focused">
        { api.error }
      </p>
    )
  }

  if (!api.data) {
    return <NoQuotesFound />
  }

  return (
    <>
      <HighlightedQuote text={api.data.text} author={api.data.author} />
      <Route exact path={match.path}>
        <div className="centered">
          <Link to={`${match.url}/comments`} className="btn--flat">
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments quoteId={quoteId} />
      </Route>
    </>
  )
}
