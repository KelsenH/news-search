import { Article } from "./article";

export interface SearchResponse {
  status: string,
  totalResults: number,
  articles: Article[]
}
