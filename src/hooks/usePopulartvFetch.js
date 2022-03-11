import { useEffect, useState } from 'react';
import { isPersistedState } from '../helpers';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const usePopulartvFetch = () => {
    const [popularTv, setPopulerTv] = useState(initialState);
    const [popularTvLoading, setPopularTvLoading] = useState(false);
    const [popularTvLoadMore, setPopularTvLoadMore] = useState(false);
    const [popularTvError, setPopularTvError] = useState(false);

    async function fetchPopularTv(page) {
        try {
            setPopularTvError(false);
            setPopularTvLoading(true);

            const tv = await API.fetchPopularTv(page);

            setPopulerTv((prev) => {
                return {
                    ...tv,
                    results:
                        page > 1
                            ? [...prev.results, ...tv.results]
                            : [...tv.results],
                };
            });
        } catch {
            setPopularTvError(true);
        }
        setPopularTvLoading(false);
    }

    // Initial
    useEffect(() => {
        const sessionState = isPersistedState('PopularTvState');

        if (sessionState) {
            setPopulerTv(sessionState);
            return;
        }
        setPopulerTv(initialState);
        fetchPopularTv(1);
    }, []);

    // Load more
    useEffect(() => {
        if (!popularTvLoadMore) return;
        fetchPopularTv(popularTv.page + 1);
        setPopularTvLoadMore(false);
    }, [popularTvLoadMore, popularTv]);

    // Write to session storage
    useEffect(() => {
        sessionStorage.setItem('PopularTvState', JSON.stringify(popularTv));
    }, [popularTv]);

    return {
        popularTv,
        popularTvLoading,
        popularTvError,
        setPopularTvLoadMore,
    };
};
