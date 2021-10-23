import { Quote } from "../model"


export const fetchQuotes = async (): Promise<Quote[]> => {
  const response = await fetch("https://react-burger-c56a9.firebaseio.com/quotes.json")
  if (!response.ok) {
    throw new Error(`fetch quotes fail with ${response.status}`)
  }
  const body = await response.json() as { [id: string]: Omit<Quote, "id"> } ?? {}
  return Object.entries(body).map<Quote>(([ id, quote ]) => {
    return { id, ...quote }
  })
}


export const fetchQuote = async (quoteId: string): Promise<Quote> => {
  const response = await fetch(`https://react-burger-c56a9.firebaseio.com/quotes/${quoteId}.json`)
  if (!response.ok) {
    throw new Error(`fetch quote fail with ${response.status}`)
  }
  const body = await response.json() as Omit<Quote, "id">
  return { id: quoteId, ...body }
}


export const postQuote = async (quote: Omit<Quote, "id">): Promise<string> => {
  const response = await fetch("https://react-burger-c56a9.firebaseio.com/quotes.json", {
    method: "post",
    body: JSON.stringify(quote),
    headers: { "Content-Type": "application/json" }
  })
  if (!response.ok) {
    throw new Error(`post quote fail with ${response.status}`)
  }
  return response.json()
}
