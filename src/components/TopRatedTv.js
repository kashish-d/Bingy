import { useTopRatedtvFetch } from '../hooks/useTopRatedtvFetch';
import Grid from './Grid/Grid';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import Thumb from './Thumb/Thumb';
import Button from './button/Button';
import Spinner from './Spinner/Spinner';
import Icon4 from '../images/watching-a-movie.png';
import GoToTop from './GoToTop/GoToTop';

function TopRatedTv() {
    const {
        TopRatedTv,
        TopRatedTvLoading,
        TopRatedTvError,
        setTopRatedTvLoadMore,
    } = useTopRatedtvFetch();

    if (TopRatedTvError) return <div>Something went wrong..</div>;
    return (
        <>
            <Grid header={'Popular Tv Series'} icon={Icon4}>
                {TopRatedTv.results.map((tv) => {
                    return (
                        <Thumb
                            clickable
                            key={tv.id}
                            tvId={tv.id}
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
                    );
                })}
            </Grid>
            {TopRatedTvLoading && <Spinner />}
            {TopRatedTv.page < TopRatedTv.total_pages && !TopRatedTvLoading && (
                <Button
                    text='Load More'
                    callback={() => setTopRatedTvLoadMore(true)}
                ></Button>
            )}
            <GoToTop />
        </>
    );
}

export default TopRatedTv;
