import React, { FC, useEffect } from "react"
import { QuoteList } from "../../components/quotes/QuoteList"
import { useApi } from "../../hooks"
import { fetchQuotes } from "../../api"
import { LoadingSpinner } from "../../components/ui"
import { NoQuotesFound } from "../../components/quotes/NoQuotesFound"


export const AllQuotes: FC = () => {
  const api = useApi(fetchQuotes)

  useEffect(() => {
    api.call()
  }, [ api.call ])


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

  if (!api.data || api.data.length === 0) {
    return <NoQuotesFound />
  }

  return <QuoteList quotes={api.data} />
}
