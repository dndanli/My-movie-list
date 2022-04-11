import axios from "axios";

import "dotenv/config";
const apiKey = process.env.API_KEY;

export const fetchPopularMedia = async (mediaType: string) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    return response.data;
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
