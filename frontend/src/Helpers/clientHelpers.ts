import axios from "axios";

export async function getPopularMovies() {
  try {
    const response = await axios.get("http://localhost:8000/popular");
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTrending() {
  try {
    const response = await axios.get("http://localhost:8000/trending");
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTrailer() {
  try {
    const response = await axios.get(
      `http://localhost:8000/getIdForTrailer/trailer`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export function postIdForTrailer(movieId: number) {
  axios
    .post(`http://localhost:8000/getIdForTrailer`, { id: movieId })
    .catch((e) => {
      console.error(e);
    });
}

export function postMovieIdToDetail(movieId: number) {
  axios
    .post(`http://localhost:8000/detail/getMovieId`, { id: movieId })
    .catch((e) => {
      console.error(e);
    });
}

export async function getMovieData() {
  try {
    const response = await axios.get(
      `http://localhost:8000/detail/getMovieData`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUpcoming() {
  try {
    const response = await axios.get(`http://localhost:8000/upcoming`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
