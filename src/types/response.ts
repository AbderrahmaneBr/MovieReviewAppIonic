import { MovieType } from "./movie";

export interface GetResponseType {
  page: number;
  results: MovieType[];
  total_pages: number;
  total_results: number;
}
