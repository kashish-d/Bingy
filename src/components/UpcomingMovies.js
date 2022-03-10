import { useUpcomingFetch } from '../hooks/useUpcomingFetch';
import Grid from './Grid/Grid';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import Thumb from './Thumb/Thumb';
import Button from './button/Button';
import Spinner from './Spinner/Spinner';
import Icon3 from '../images/movie.png';
import GoToTop from './GoToTop/GoToTop';

function UpcomingMovies() {
    const { upcoming, UpcomingLoading, UpcomingError, setUpcomingLoadMore } =
        useUpcomingFetch();

    if (UpcomingError) return <div>Something went wrong..</div>;
    return (
        <>
            <Grid header={'Upcoming Movies'} icon={Icon3}>
                {upcoming.results.map((movie) => {
                    return (
                        <Thumb
                            key={movie.id}
                            movieId={movie.id}
                            image={
                                movie.poster_path
                                    ? IMAGE_BASE_URL +
                                      POSTER_SIZE +
                                      movie.poster_path
                                    : ''
                            }
                            title={
                                movie.title ? movie.title : movie.original_title
                            }
                            rating={(movie.vote_average / 10) * 5}
                        />
                    );
                })}
            </Grid>
            {UpcomingLoading && <Spinner />}
            {upcoming.page < upcoming.total_pages && !UpcomingLoading && (
                <Button
                    text='Load More'
                    callback={() => setUpcomingLoadMore(true)}
                ></Button>
            )}
            <GoToTop />
        </>
    );
}

export default UpcomingMovies;
