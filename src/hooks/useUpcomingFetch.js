import { useEffect, useState } from 'react';
import { isPersistedState } from '../helpers';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useUpcomingFetch = () => {
    const [upcoming, setUpcoming] = useState(initialState);
    const [UpcomingLoading, setUpcomingLoading] = useState(false);
    const [UpcomingLoadMore, setUpcomingLoadMore] = useState(false);
    const [UpcomingError, setUpcomingError] = useState(false);

    async function fetchUpcomingMovies(page) {
        try {
            setUpcomingError(false);
            setUpcomingLoading(true);

            const upcomingMovies = await API.fetchUpcomingMovies(page);

            setUpcoming((prev) => {
                return {
                    ...upcomingMovies,
                    results:
                        page > 1
                            ? [...prev.results, ...upcomingMovies.results]
                            : [...upcomingMovies.results],
                };
            });
        } catch {
            setUpcomingError(true);
        }
        setUpcomingLoading(false);
    }

    // Initial
    useEffect(() => {
        const sessionState = isPersistedState('UpcomingState');

        if (sessionState) {
            setUpcoming(sessionState);
            return;
        }
        setUpcoming(initialState);
        fetchUpcomingMovies(1);
    }, []);

    // Load more
    useEffect(() => {
        if (!UpcomingLoadMore) return;
        fetchUpcomingMovies(upcoming.page + 1);
        setUpcomingLoadMore(false);
    }, [upcoming, UpcomingLoadMore]);

    // Writing in session storage
    useEffect(() => {
        sessionStorage.setItem('UpcomingState', JSON.stringify(upcoming));
    }, [upcoming]);

    return {
        upcoming,
        UpcomingLoading,
        UpcomingError,
        setUpcomingLoadMore,
    };
};
