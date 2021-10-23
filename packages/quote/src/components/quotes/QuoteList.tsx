import React, { FC, useMemo } from "react"
import classes from "./QuoteList.module.css"
import { Quote } from "../../model"
import { QuoteItem } from "./QuoteItem"
import { useHistory, useLocation } from "react-router-dom"


interface Props {
  quotes: Quote[]
}

export const QuoteList: FC<Props> = (props) => {
  const history = useHistory()
  const location = useLocation()
  const ascending = useMemo(() => new URLSearchParams(location.search).get("sort") === "asc", [ location.search ])

  const quotes = sort(props.quotes, ascending)

  const onSortButtonClick = () => {
    history.replace({
      pathname: location.pathname,
      search: `?sort=${ascending ? "desc" : "asc"}`
    })
  }

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={onSortButtonClick}>
          Sort { ascending ? "Ascending" : "Descending" }
        </button>
      </div>
      <ul className={classes.list}>
        { quotes.map((quote) => <QuoteItem {...quote} key={quote.id} />) }
      </ul>
    </>
  )
}

const sort = (quotes: Quote[], asc: boolean) => {
  const coefficient = asc ? 1 : -1
  return [ ...quotes ].sort((prev, next) => coefficient * (prev.id > next.id ? 1 : -1))
}
