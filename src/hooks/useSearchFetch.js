import { useEffect, useState } from 'react';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useSearchFetch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchState, setSearchState] = useState(initialState);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchLoadMore, setSearchLoadMore] = useState(false);
    const [searchError, setSearchError] = useState(false);

    async function fetchSearch(page, searchTerm = '') {
        try {
            if (!searchTerm) {
                return;
            }
            setSearchError(false);
            setSearchLoading(true);

            const movies = await API.fetchSearch(searchTerm, page);

            setSearchState((prev) => {
                return {
                    ...movies,
                    results:
                        page > 1
                            ? [...prev.results, ...movies.results]
                            : [...movies.results],
                };
            });
        } catch {
            setSearchError(true);
        }
        setSearchLoading(false);
    }

    // Initial and Search
    useEffect(() => {
        setSearchState(initialState);
        fetchSearch(1, searchTerm);
    }, [searchTerm]);

    // Load more
    useEffect(() => {
        if (!searchLoadMore) return;
        fetchSearch(searchState.page + 1, searchTerm);
        setSearchLoadMore(false);
    }, [searchTerm, searchLoadMore, searchState]);

    return {
        searchState,
        searchLoading,
        searchError,
        searchTerm,
        setSearchTerm,
        setSearchLoadMore,
    };
};
