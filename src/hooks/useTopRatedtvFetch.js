import { useEffect, useState } from 'react';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useTopRatedtvFetch = () => {
    const [TopRatedTv, setPopulerTv] = useState(initialState);
    const [TopRatedTvLoading, setTopRatedTvLoading] = useState(false);
    const [TopRatedTvLoadMore, setTopRatedTvLoadMore] = useState(false);
    const [TopRatedTvError, setTopRatedTvError] = useState(false);

    async function fetchTopRatedTv(page) {
        try {
            setTopRatedTvError(false);
            setTopRatedTvLoading(true);

            const movies = await API.fetchTopRatedTv(page);

            setPopulerTv((prev) => {
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
        setPopulerTv(initialState);
        fetchTopRatedTv(1);
    }, []);

    // Load more
    useEffect(() => {
        if (!TopRatedTvLoadMore) return;
        fetchTopRatedTv(TopRatedTv.page + 1);
        setTopRatedTvLoadMore(false);
    }, [TopRatedTvLoadMore, TopRatedTv]);

    return {
        TopRatedTv,
        TopRatedTvLoading,
        TopRatedTvError,
        setTopRatedTvLoadMore,
    };
};
