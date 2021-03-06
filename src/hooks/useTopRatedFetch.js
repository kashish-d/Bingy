import { useEffect, useState } from 'react';
import { isPersistedState } from '../helpers';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useTopRatedFetch = () => {
    const [toprated, setToprated] = useState(initialState);
    const [TopRatedLoading, setTopRatedLoading] = useState(false);
    const [TopRatedLoadMore, setTopRatedLoadMore] = useState(false);
    const [TopRatedError, setTopRatedError] = useState(false);

    async function fetchTopRatedMovies(page) {
        try {
            setTopRatedError(false);
            setTopRatedLoading(true);

            const topRatedMovies = await API.fetchTopRatedMovies(page);

            setToprated((prev) => {
                return {
                    ...topRatedMovies,
                    results:
                        page > 1
                            ? [...prev.results, ...topRatedMovies.results]
                            : [...topRatedMovies.results],
                };
            });
        } catch {
            setTopRatedError(true);
        }
        setTopRatedLoading(false);
    }

    // Initial
    useEffect(() => {
        const sessionState = isPersistedState('TopRatedState');

        if (sessionState) {
            setToprated(sessionState);
            return;
        }
        setToprated(initialState);
        fetchTopRatedMovies();
    }, []);

    // Load more
    useEffect(() => {
        if (!TopRatedLoadMore) return;
        fetchTopRatedMovies(toprated.page + 1);
        setTopRatedLoadMore(false);
    }, [toprated, TopRatedLoadMore]);

    // Write to session storage
    useEffect(() => {
        sessionStorage.setItem('TopRatedState', JSON.stringify(toprated));
    }, [toprated]);

    return {
        toprated,
        TopRatedLoading,
        TopRatedError,
        setTopRatedLoadMore,
    };
};
