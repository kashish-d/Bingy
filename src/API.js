import {
    API_KEY,
    API_URL,
    POPULAR_BASE_URL,
    LATEST_BASE_URL,
    UPCOMING_BASE_URL,
    SEARCH_BASE_URL,
    TOP_RATED_BASE_URL,
    POPULARTV_BASE_URL,
    TOP_RATEDTV_BASE_URL,
    TRENDING_BASE_URL,
} from './Config';

const apiRequests = {
    fetchPopularMovies: async (page) => {
        const endpoint = `${POPULAR_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchLatestMovies: async () => {
        const endpoint = `${LATEST_BASE_URL}`;
        return await (await fetch(endpoint)).json();
    },
    fetchUpcomingMovies: async (page) => {
        const endpoint = `${UPCOMING_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchTopRatedMovies: async (page) => {
        const endpoint = `${TOP_RATED_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchMovie: async (movieId) => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images`;
        return await (await fetch(endpoint)).json();
    },
    fetchPopularTv: async (page) => {
        const endpoint = `${POPULARTV_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchTopRatedTv: async (page) => {
        const endpoint = `${TOP_RATEDTV_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchTv: async (tvId) => {
        const endpoint = `${API_URL}/tv/${tvId}?api_key=${API_KEY}&language=en-US&append_to_response=videos,images`;
        return await (await fetch(endpoint)).json();
    },
    fetchSearch: async (searchTerm, page) => {
        const endpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchTrending: async (page) => {
        const endpoint = `${TRENDING_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchMovieCredits: async (movieId) => {
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        return await (await fetch(creditsEndpoint)).json();
    },
    fetchRecommendations: async (movieId, mediaType) => {
        const endpoint = `${API_URL}${mediaType}/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
        return await (await fetch(endpoint)).json();
    },
    fetchTvCredits: async (tvId) => {
        const creditsEndpoint = `${API_URL}tv/${tvId}/credits?api_key=${API_KEY}&language=en-US`;
        return await (await fetch(creditsEndpoint)).json();
    },
};

export default apiRequests;
