import axios from "axios";

export async function getPopularMovies() {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/movie");
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
