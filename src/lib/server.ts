import { GetResponseType } from "../types/response";
import { API_KEY } from "./constants";

export const getPopularMovies = async (): Promise<GetResponseType> => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data: GetResponseType = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};

export const getTopRatedMovies = async (): Promise<GetResponseType> => {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data: GetResponseType = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};

export const getUpcomingMovies = async (): Promise<GetResponseType> => {
  const url =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    const data: GetResponseType = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movies:", error);
    throw error;
  }
};
