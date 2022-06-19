interface MovieProps {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface GetMoviesProps {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Array<MovieProps>;
  total_pages: number;
  total_results: number;
}
