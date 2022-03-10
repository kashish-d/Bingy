import { useEffect, useState } from 'react';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useTrendingFetch = () => {
    const [Trending, setTrending] = useState(initialState);
    const [TrendingLoading, setTrendingLoading] = useState(false);
    const [TrendingLoadMore, setTrendingLoadMore] = useState(false);
    const [TrendingError, setTrendingError] = useState(false);

    async function fetchTrending(page) {
        try {
            setTrendingError(false);
            setTrendingLoading(true);
            const trending = await API.fetchTrending(page);

            setTrending((prev) => {
                return {
                    ...trending,
                    results:
                        page > 1
                            ? [...prev.results, ...trending.results]
                            : [...trending.results],
                };
            });
        } catch {
            setTrendingError(true);
        }
        setTrendingLoading(false);
    }

    // Initial and Search
    useEffect(() => {
        setTrending(initialState);
        fetchTrending(1);
    }, []);

    // Load more
    useEffect(() => {
        if (!TrendingLoadMore) return;
        fetchTrending(Trending.page + 1);
        setTrendingLoadMore(false);
    }, [TrendingLoadMore, Trending]);

    return {
        Trending,
        TrendingLoading,
        TrendingError,
        setTrendingLoadMore,
    };
};
