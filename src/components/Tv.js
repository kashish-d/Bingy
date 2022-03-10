import { useParams } from 'react-router-dom';
import { useTvFetch } from '../hooks/useTvFetch';
import Spinner from './Spinner/Spinner';
import MovieInfo from './MovieInfo/MovieInfo';
import Grid from './Grid/Grid';
import CastIcon from '../images/tv.png';
import Actors from './Actors/Actors';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import NoImage from '../images/no_image.jpg';
import MediaSection from './MediaSection/MediaSection';
import { useRecomendationFetch } from '../hooks/useRecomendationFetch';
import MoreIcon from '../images/clapperboard.png';
import Thumb from './Thumb/Thumb';
import SeasonCard from './SeasonCard/SeasonCard';
import SeasonIcon from '../images/video-camera.png';
import GoToTop from './GoToTop/GoToTop';

function Tv() {
    const { tvId } = useParams();
    const { state, loading, error } = useTvFetch(tvId);
    const { recommended, recommendedLoading, recommendedError } =
        useRecomendationFetch(tvId, 'tv');

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;
    return (
        <>
            <MovieInfo state={state} mediaType='tv' />
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
            {state.seasons.length > 0 ? (
                <Grid header={'Seasons'} slidingAtAll icon={SeasonIcon}>
                    {state.seasons.map((season) => {
                        return (
                            <SeasonCard
                                key={season.id}
                                imageUrl={
                                    season.poster_path
                                        ? `${IMAGE_BASE_URL}${POSTER_SIZE}${season.poster_path}`
                                        : NoImage
                                }
                                name={season.name}
                                overview={season.overview}
                                episodes={season.episode_count}
                                airDate={season.air_date}
                            />
                        );
                    })}
                </Grid>
            ) : (
                ''
            )}
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

export default Tv;
