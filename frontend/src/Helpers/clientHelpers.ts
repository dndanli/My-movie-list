import axios from "axios";

export async function getPopularMedia(mediaType: string) {
  try {
    const response = await axios.get(
      `http://localhost:8000/popular/${mediaType}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTrending(mediaType: string) {
  try {
    const response = await axios.get(
      `http://localhost:8000/trending/${mediaType}`
    );
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
      console.log(response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export function postIdForTrailer(id: number) {
  axios
    .post(`http://localhost:8000/getIdForTrailer`, { id: id })
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

export async function getMediaDetails(mediaType: any, movieId: any) {
  try {
    const response = await axios.get(
      `http://localhost:8000/detail/getDetails/${mediaType}/${movieId}`
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

export async function getSearchQueryResponse(clientQuery: any) {
  try {
    const response = await axios.post(
      `http://localhost:8000/search/${clientQuery}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getSearchQueryPageResponse(
  clientQuery: any,
  queryType: string,
  pageNumber: any
) {
  try {
    const response = await axios.post(
      `http://localhost:8000/search/${pageNumber}/${clientQuery}/${queryType}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
export async function getPersonResponse(personId: any) {
  try {
    const response = await axios.get(
      `http://localhost:8000/person/${personId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
}

export async function getTopRatedMovies() {
  try {
    const response = await axios.get(`http://localhost:8000/topRated`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
}
