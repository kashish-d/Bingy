import { useEffect, useState } from 'react';
import { isPersistedState } from '../helpers';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

// helpers

export const usePopularFetch = () => {
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [loadMore, setLoadMore] = useState(false);
    const [error, setError] = useState(false);

    async function fetchPopularMovies(page) {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchPopularMovies(page);

            setState((prev) => {
                return {
                    ...movies,
                    results:
                        page > 1
                            ? [...prev.results, ...movies.results]
                            : [...movies.results],
                };
            });
        } catch {
            setError(true);
        }
        setLoading(false);
    }

    // Initial
    useEffect(() => {
        const sessionState = isPersistedState('PopularState');

        if (sessionState) {
            setState(sessionState);
            return;
        }
        console.log('Grabbing from Api, Popular');
        setState(initialState);
        fetchPopularMovies(1);
    }, []);

    // Load more
    useEffect(() => {
        if (!loadMore) return;
        fetchPopularMovies(state.page + 1);
        setLoadMore(false);
    }, [loadMore, state]);

    // Writing in session storage
    useEffect(() => {
        sessionStorage.setItem('PopularState', JSON.stringify(state));
    }, [state]);

    return {
        state,
        loading,
        error,
        setLoadMore,
    };
};
