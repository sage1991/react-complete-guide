export interface FetchMovieResponse {
  count: number
  next: any
  previous: any
  results: FetchMovieResult[]
}

export interface FetchMovieResult {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: string[]
  planets: string[]
  starships: string[]
  vehicles: string[]
  species: string[]
  created: string
  edited: string
  url: string
}
