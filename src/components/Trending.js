import { useTrendingFetch } from '../hooks/useTrendingFetch';
import Grid from './Grid/Grid';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import Thumb from './Thumb/Thumb';
import Button from './button/Button';
import Spinner from './Spinner/Spinner';
import TrendingIcon from '../images/trending-topic.png';
import GoToTop from './GoToTop/GoToTop';

function Trending() {
    const { Trending, TrendingLoading, TrendingError, setTrendingLoadMore } =
        useTrendingFetch();

    if (TrendingError) return <div>Something went wrong..</div>;
    return (
        <>
            <Grid header={'Trending'} icon={TrendingIcon}>
                {Trending.results.map((movietv) => {
                    return (
                        <Thumb
                            key={movietv.id}
                            clickable={
                                movietv.media_type === 'person' ? false : true
                            }
                            movieId={
                                movietv.media_type === 'movie' ? movietv.id : ''
                            }
                            tvId={movietv.media_type === 'tv' ? movietv.id : ''}
                            image={
                                movietv.poster_path
                                    ? IMAGE_BASE_URL +
                                      POSTER_SIZE +
                                      movietv.poster_path
                                    : ''
                            }
                            title={
                                movietv.name
                                    ? movietv.name
                                    : movietv.original_title
                                    ? movietv.original_title
                                    : movietv.title
                            }
                            rating={(movietv.vote_average / 10) * 5}
                        />
                    );
                })}
            </Grid>
            {TrendingLoading && <Spinner />}
            {Trending.page < Trending.total_pages && !TrendingLoading && (
                <Button
                    text='Load More'
                    callback={() => setTrendingLoadMore(true)}
                ></Button>
            )}
            <GoToTop />
        </>
    );
}

export default Trending;
