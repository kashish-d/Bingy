import { usePopularFetch } from '../hooks/usePopularFetch';
import Grid from './Grid/Grid';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import Thumb from './Thumb/Thumb';
import Button from './button/Button';
import Spinner from './Spinner/Spinner';
import Icon1 from '../images/film-reel.png';

function PopularMovies() {
    const { state, loading, error, setLoadMore } = usePopularFetch();

    if (error) return <div>Something went wrong..</div>;
    return (
        <>
            <Grid header={'Popular Movies'} icon={Icon1}>
                {state.results.map((movie) => {
                    return (
                        <Thumb
                            clickable
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
            {loading && <Spinner />}
            {state.page < state.total_pages && !loading && (
                <Button
                    text='Load More'
                    callback={() => setLoadMore(true)}
                ></Button>
            )}
        </>
    );
}

export default PopularMovies;
