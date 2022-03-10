import { useEffect, useState } from 'react';
import API from '../API';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export function useRecomendationFetch(movieId, mediaType) {
    const [recommended, setRecommended] = useState(initialState);
    const [recommendedLoading, setRecommendedLoading] = useState(false);
    const [recommendedError, setRecommendedError] = useState(false);

    useEffect(() => {
        async function fetchRecomendation() {
            try {
                setRecommendedLoading(true);
                setRecommendedError(false);

                const movie = await API.fetchRecommendations(
                    movieId,
                    mediaType
                );
                setRecommended({
                    ...movie,
                });
                setRecommendedLoading(false);
            } catch {
                setRecommendedError(true);
            }
        }
        fetchRecomendation();
    }, [movieId, mediaType]);

    return { recommended, recommendedLoading, recommendedError };
}
