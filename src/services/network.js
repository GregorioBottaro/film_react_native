const API_KEY = "026890b0945cbc402813edbeb90f0223";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (query, page) => {
  try {
    const body = query && query.length > 3 ? query : null;
    const resFetch = await fetch(
      BASE_URL +
        "/search/movie?api_key=" +
        API_KEY +
        "&query=" +
        body +
        "&page=" +
        page +
        "&language='fr-FR'",
      {
        method: "GET",
      }
    );
    const resToJon = resFetch.json();
    return resToJon;
  } catch (error) {
    console.error("error fetch movies", error);
    return error;
  }
};

export const fetchTopRated = async (page) => {
  try {
    const resFetch = await fetch(
      BASE_URL +
        "/movie/top_rated?api_key=" +
        API_KEY +
        "&query=" +
        page +
        "&language='fr-FR'",
      {
        method: "GET",
      }
    );
    const resToJon = resFetch.json();
    return resToJon;
  } catch (error) {
    console.error("error fetch movies top rated", error);
    return error;
  }
};
