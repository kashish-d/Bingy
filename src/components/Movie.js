import { useParams } from 'react-router-dom';
import { useMovieFetch } from '../hooks/useMovieFetch';
import MovieInfo from './MovieInfo/MovieInfo';
import Spinner from './Spinner/Spinner';
import Grid from './Grid/Grid';
import CastIcon from '../images/tv.png';
import Actors from './Actors/Actors';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import NoImage from '../images/no_image.jpg';
import MediaSection from './MediaSection/MediaSection';
import { useRecomendationFetch } from '../hooks/useRecomendationFetch';
import MoreIcon from '../images/clapperboard.png';
import Thumb from './Thumb/Thumb';
import GoToTop from './GoToTop/GoToTop';

function Movie() {
    const { movieId } = useParams();
    const { state, loading, error } = useMovieFetch(movieId);
    const { recommended, recommendedLoading, recommendedError } =
        useRecomendationFetch(movieId, 'movie');

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;
    return (
        <>
            <MovieInfo state={state} mediaType='movie' />
            <Grid header='Cast' icon={CastIcon} slidingAtAll>
                {state.actors.map((each) => {
                    return (
                        <Actors
                            key={each.id}
                            name={each.name}
                            character={each.character}
                            imageUrl={
                                each.profile_path
                                    ? `${IMAGE_BASE_URL}${POSTER_SIZE}${each.profile_path}`
                                    : NoImage
                            }
                        />
                    );
                })}
            </Grid>
            <MediaSection videos={state.videos.results} />
            {!recommendedError && recommended.total_results > 0 ? (
                <Grid header={'More like this'} icon={MoreIcon} slidingAtAll>
                    {recommended.results.map((movietv) => {
                        return (
                            <Thumb
                                key={movietv.id}
                                clickable
                                image={
                                    movietv.poster_path
                                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movietv.poster_path}`
                                        : NoImage
                                }
                                movieId={
                                    movietv.media_type === 'movie'
                                        ? movietv.id
                                        : ''
                                }
                                tvId={
                                    movietv.media_type === 'tv'
                                        ? movietv.id
                                        : ''
                                }
                                title={
                                    movietv.name
                                        ? movietv.name
                                        : movietv.title
                                        ? movietv.title
                                        : movietv.original_title
                                }
                                rating={(movietv.vote_average / 10) * 5}
                            />
                        );
                    })}
                </Grid>
            ) : (
                ''
            )}
            {recommendedLoading && <Spinner />}
            <GoToTop />
        </>
    );
}

export default Movie;
