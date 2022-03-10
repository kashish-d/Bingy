// This is the one to work on
// Configuration for TMDB API

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_API_KEY;
// Movies
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const TOP_RATED_BASE_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const UPCOMING_BASE_URL = `${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;
const LATEST_BASE_URL = `${API_URL}movie/latest?api_key=${API_KEY}&language=en-US`;
const TRENDING_BASE_URL = `${API_URL}trending/all/day?api_key=${API_KEY}`;

// TV
const POPULARTV_BASE_URL = `${API_URL}tv/popular?api_key=${API_KEY}&language=en-US`;
const TOP_RATEDTV_BASE_URL = `${API_URL}tv/top_rated?api_key=${API_KEY}&language=en-US`;

// Search
const SEARCH_BASE_URL = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w780';

export {
    API_KEY,
    API_URL,
    POPULAR_BASE_URL,
    TOP_RATED_BASE_URL,
    UPCOMING_BASE_URL,
    LATEST_BASE_URL,
    SEARCH_BASE_URL,
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE,
    POPULARTV_BASE_URL,
    TOP_RATEDTV_BASE_URL,
    TRENDING_BASE_URL,
};
