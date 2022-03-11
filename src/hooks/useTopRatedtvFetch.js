import { useEffect, useState } from 'react';
import { isPersistedState } from '../helpers';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useTopRatedtvFetch = () => {
    const [TopRatedTv, setTopRatedTv] = useState(initialState);
    const [TopRatedTvLoading, setTopRatedTvLoading] = useState(false);
    const [TopRatedTvLoadMore, setTopRatedTvLoadMore] = useState(false);
    const [TopRatedTvError, setTopRatedTvError] = useState(false);

    async function fetchTopRatedTv(page) {
        try {
            setTopRatedTvError(false);
            setTopRatedTvLoading(true);

            const movies = await API.fetchTopRatedTv(page);

            setTopRatedTv((prev) => {
                return {
                    ...movies,
                    results:
                        page > 1
                            ? [...prev.results, ...movies.results]
                            : [...movies.results],
                };
            });
        } catch {
            setTopRatedTvError(true);
        }
        setTopRatedTvLoading(false);
    }

    // Initial and Search
    useEffect(() => {
        const sessionState = isPersistedState('TopRatedTvState');

        if (sessionState) {
            setTopRatedTv(sessionState);
            return;
        }
        setTopRatedTv(initialState);
        fetchTopRatedTv(1);
    }, []);

    // Load more
    useEffect(() => {
        if (!TopRatedTvLoadMore) return;
        fetchTopRatedTv(TopRatedTv.page + 1);
        setTopRatedTvLoadMore(false);
    }, [TopRatedTvLoadMore, TopRatedTv]);

    // Write to session storage
    useEffect(() => {
        sessionStorage.setItem('TopRatedTvState', JSON.stringify(TopRatedTv));
    }, [TopRatedTv]);

    return {
        TopRatedTv,
        TopRatedTvLoading,
        TopRatedTvError,
        setTopRatedTvLoadMore,
    };
};
