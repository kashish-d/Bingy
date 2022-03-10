import { useTopRatedFetch } from '../hooks/useTopRatedFetch';
import Grid from './Grid/Grid';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import Thumb from './Thumb/Thumb';
import Button from './button/Button';
import Spinner from './Spinner/Spinner';
import Icon5 from '../images/clapperboard.png';

function TopRatedMovies() {
    const { toprated, TopRatedLoading, TopRatedError, setTopRatedLoadMore } =
        useTopRatedFetch();

    if (TopRatedError) return <div>Something went wrong..</div>;
    return (
        <>
            <Grid header={'Top Rated Movies'} icon={Icon5}>
                {toprated.results.map((movie) => {
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
            {TopRatedLoading && <Spinner />}
            {toprated.page < toprated.total_pages && !TopRatedLoading && (
                <Button
                    text='Load More'
                    callback={() => setTopRatedLoadMore(true)}
                ></Button>
            )}
        </>
    );
}

export default TopRatedMovies;
