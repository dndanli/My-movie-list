import axios from "axios";

export async function getPopularMovies() {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/v1/movie/popular"
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getNowPlayingMovies() {
  try {
    const response = await axios.get(
      "http://localhost:8080/api/v1/movie/nowPlaying"
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMovieTrailer(movieId: number) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/v1/movie/trailer${movieId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export function postMovieId(movieId: number) {
  axios
    .post(`http://localhost:8080/api/v1/movie/getMovieId`, { id: movieId })
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.error(e);
    });
}
