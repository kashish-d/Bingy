import { useEffect, useState } from 'react';
// import { isPersistedState } from '../helpers';
import API from '../API';

const initialState = {
    page: 0,
    genres: [],
    directors: [],
    actors: [],
    videos: {
        results: [],
    },
    episode_run_time: 0,
    total_pages: 0,
    total_results: 0,
};

export function useMovieFetch(movieId) {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchMovie() {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchMovieCredits(movieId);

                // Get directors only
                const directors = credits.crew.filter(
                    (member) => member.job === 'Director'
                );

                setState({
                    ...movie,
                    actors: credits.cast,
                    directors: directors,
                });
                setLoading(false);
            } catch {
                setError(true);
            }
        }
        // const sessionState = isPersistedState(`Movie${movieId}`);

        // if (sessionState) {
        //     console.log('Grabbing from session Storage,movie');
        //     setState(sessionState);
        //     setLoading(false);
        //     return;
        // }

        fetchMovie();
    }, [movieId]);

    // // Write to sessionStorage
    // useEffect(() => {
    //     sessionStorage.setItem(`Movie${movieId}`, JSON.stringify(state));
    // }, [movieId, state]);

    return { state, loading, error };
}
