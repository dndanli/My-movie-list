import axios from "axios";

import "dotenv/config";
const apiKey = process.env.API_KEY;
export const fetchPopularMedia = async (mediaType: string) => {
  const responseArray: Array<Object> = [];
  const pages = 5;

  try {
    for (let numberOfPages = 1; numberOfPages < pages; numberOfPages++) {
      const response = await axios.get(
        `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${apiKey}&language=en-US&page=${numberOfPages}`
      );
      responseArray.push(response.data);
    }
    return responseArray;
  } catch (err) {
    console.error(err);
  }
};

export const fetchTrending = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchTrailer = async (id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${apiKey}&language=en-US`,
      {
        headers: {
          responseType: "application/json",
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchUpcoming = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchMediaDetails = async (mediaType: string, id: number) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${apiKey}&append_to_response=credits,videos`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const fetchClientQuery = async (clientQuery: string) => {
  const responseArray: Array<Object> = [];
  try {
    const movieResponse = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${clientQuery}&language=en-US&page=1&include_adult=false`
    );
    const tvShowResponse = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${clientQuery}&language=en-US&page=1&include_adult=false`
    );
    const peopleResponse = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${apiKey}&query=${clientQuery}&language=en-US&page=1&include_adult=false`
    );

    responseArray.push(
      movieResponse.data,
      tvShowResponse.data,
      peopleResponse.data
    );
    return responseArray;
  } catch (err) {
    console.error(err);
  }
};

export const fetchPerson = async (personId: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${personId}}?api_key=${apiKey}&append_to_response=tv_credits,movie_credits&language=en-US`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
