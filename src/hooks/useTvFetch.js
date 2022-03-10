import { useEffect, useState } from 'react';
import API from '../API';

const initialState = {
    page: 0,
    genres: [],
    directors: [],
    actors: [],
    videos: {
        results: [],
    },
    seasons: [],
    episode_run_time: [],
    total_pages: 0,
    total_results: 0,
};

export function useTvFetch(tvId) {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchTv() {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchTv(tvId);
                const credits = await API.fetchTvCredits(tvId);

                setState({
                    ...movie,
                    actors: credits.cast,
                });
                setLoading(false);
            } catch {
                setError(true);
            }
        }
        fetchTv();
    }, [tvId]);

    return { state, loading, error };
}
