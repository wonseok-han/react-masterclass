import { apiPath, apiKey } from 'Constants';

const BASE = apiPath;
const KEY = apiKey;

export const getMovies = () => {
  return fetch(`${BASE}/movie/now_playing?api_key=${KEY}`).then((response) =>
    response.json()
  );
};
