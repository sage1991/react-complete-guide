import React, { FC } from "react"
import { QuoteForm } from "../../components/quotes/QuoteForm"
import { useHistory } from "react-router-dom"
import { Quote } from "../../model"
import { useApi } from "../../hooks"
import { postQuote } from "../../api"


export const NewQuote: FC = () => {
  const api = useApi(postQuote, "dummy")
  const history = useHistory()

  const addQuote = async (quote: Omit<Quote, "id">) => {
    const { status } = await api.call(quote)
    if (status === "resolved") {
      history.push("/quotes")
    }
  }

  return <QuoteForm loading={api.status === "pending"} addQuote={addQuote} />
}
