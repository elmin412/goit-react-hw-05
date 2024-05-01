import axios from "axios";

const url = 'https://api.themoviedb.org/3/trending/movie/day';
const options = {
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2E1Y2Y4MDI4NzAxOTExNGNlMjQzYTg2MmYyMzEzYSIsInN1YiI6IjY2MmE0MjM4ODg2MzQ4MDExZGFlNTE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qg2k437iycFq5BJ9M2Cya9spQQi55ilSmr8oXaFcXvU'
  }
};

export const getMovies = async () => {
  const response = await axios.get(url, options, {
    params: {
      language: "en-US",
    }
  });
  return response.data.results
  
}

export const getMoviesById = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}`
  const response = await axios.get(url, options, {
    params: {
      language: "en-US",
    }
  });
  return response.data
};


export const getMoviesSearch = async (searchMovie) => {
  const url = `https://api.themoviedb.org/3/search/movie`
  
  const response = await axios.get(url,options, {
    params: {
      language: "en-US",
      query: searchMovie,
      page: 1,
    }
  });
  return response.data.results;
  
};

export const getMoviesCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`
  const response = await axios.get(url, options, {
    params: {
      language: "en-US",
    }
  });
  return response.data
};

export const getMoviesReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews`
  const response = await axios.get(url, options, {
    params: {
      language: "en-US",
    }
  });
  return response.data;
};