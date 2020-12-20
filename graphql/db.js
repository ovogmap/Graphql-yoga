import fetch from "node-fetch";
const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovie = (limit) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `&limit=${limit}`;
  }
  return fetch(`${REQUEST_URL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
