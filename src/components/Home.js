import { usePopularFetch } from '../hooks/usePopularFetch';
import { useUpcomingFetch } from '../hooks/useUpcomingFetch';
import { useTopRatedFetch } from '../hooks/useTopRatedFetch';
import { usePopulartvFetch } from '../hooks/usePopulartvFetch';
import { useTopRatedtvFetch } from '../hooks/useTopRatedtvFetch';
import MovieSlider from './MovieSlider/MovieSlider';
import Thumb from './Thumb/Thumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import Grid from './Grid/Grid';
import Spinner from './Spinner/Spinner';

import Icon1 from '../images/film-reel.png';
import Icon2 from '../images/video-camera.png';
import Icon3 from '../images/movie.png';
import Icon4 from '../images/watching-a-movie.png';
import Icon5 from '../images/clapperboard.png';
import GoToTop from './GoToTop/GoToTop';

function Home() {
    // Movies
    const { state, loading, error } = usePopularFetch();
    const { toprated, TopRatedLoading, TopRatedError } = useTopRatedFetch();
    const { upcoming, UpcomingLoading, UpcomingError } = useUpcomingFetch();

    // Tv
    const { popularTv, popularTvLoading, popularTvError } = usePopulartvFetch();
    const { TopRatedTv, TopRatedTvLoading, TopRatedTvError } =
        useTopRatedtvFetch();

    if (
        error ||
        TopRatedError ||
        UpcomingError ||
        popularTvError ||
        TopRatedTvError
    ) {
        return <h1>Sorry! Something went wrong...</h1>;
    }

    return (
        <>
            <MovieSlider state={state} loading={loading} error={error} />
            <Grid
                header='Movies In Spotlight'
                path='/PopularMovies'
                icon={Icon1}
                sliding
            >
                {state.results
                    .filter((movie, index) => index < 8)
                    .map((movie) => (
                        <Thumb
                            key={movie.id}
                            movieId={movie.id}
                            clickable
                            image={
                                movie.poster_path
                                    ? IMAGE_BASE_URL +
                                      POSTER_SIZE +
                                      movie.poster_path
                                    : ''
                            }
                            title={movie.title}
                            rating={(movie.vote_average / 10) * 5}
                        />
                    ))}
            </Grid>
            {loading && <Spinner />}
            <Grid
                header={'Popular Series'}
                path='/PopularTv'
                icon={Icon2}
                sliding
            >
                {popularTv.results
                    .filter((tv, index) => index < 8)
                    .map((tv) => (
                        <Thumb
                            key={tv.id}
                            tvId={tv.id}
                            clickable
                            image={
                                tv.poster_path
                                    ? IMAGE_BASE_URL +
                                      POSTER_SIZE +
                                      tv.poster_path
                                    : ''
                            }
                            title={tv.name}
                            rating={(tv.vote_average / 10) * 5}
                        />
                    ))}
            </Grid>
            {popularTvLoading && <Spinner />}
            <Grid header='Upcoming' path='/UpcomingMovies' icon={Icon3} sliding>
                {upcoming.results
                    .filter((movie, index) => index < 8)
                    .map((movie) => (
                        <Thumb
                            key={movie.id}
                            movieId={movie.id}
                            clickable
                            image={
                                movie.poster_path
                                    ? IMAGE_BASE_URL +
                                      POSTER_SIZE +
                                      movie.poster_path
                                    : ''
                            }
                            title={movie.title}
                            rating={(movie.vote_average / 10) * 5}
                        />
                    ))}
            </Grid>
            {UpcomingLoading && <Spinner />}
            <Grid
                header='Top Rated Tv Shows'
                path='/TopRatedTv'
                icon={Icon4}
                sliding
            >
                {TopRatedTv.results
                    .filter((tv, index) => index < 8)
                    .map((tv) => (
                        <Thumb
                            key={tv.id}
                            tvId={tv.id}
                            clickable
                            image={
                                tv.poster_path
                                    ? IMAGE_BASE_URL +
                                      POSTER_SIZE +
                                      tv.poster_path
                                    : ''
                            }
                            title={tv.name}
                            rating={(tv.vote_average / 10) * 5}
                        />
                    ))}
            </Grid>
            {TopRatedTvLoading && <Spinner />}
            <Grid
                header='High Rated Movies'
                path='/TopRatedMovies'
                icon={Icon5}
                sliding
            >
                {toprated.results
                    .filter((movie, index) => index < 8)
                    .map((movie) => (
                        <Thumb
                            key={movie.id}
                            movieId={movie.id}
                            clickable
                            image={
                                movie.poster_path
                                    ? IMAGE_BASE_URL +
                                      POSTER_SIZE +
                                      movie.poster_path
                                    : ''
                            }
                            title={movie.title}
                            rating={(movie.vote_average / 10) * 5}
                        />
                    ))}
            </Grid>
            {TopRatedLoading && <Spinner />}
            <GoToTop />
        </>
    );
}
export default Home;
