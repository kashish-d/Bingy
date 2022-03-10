import { usePopulartvFetch } from '../hooks/usePopulartvFetch';
import Grid from './Grid/Grid';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import Thumb from './Thumb/Thumb';
import Button from './button/Button';
import Spinner from './Spinner/Spinner';
import Icon2 from '../images/video-camera.png';
import GoToTop from './GoToTop/GoToTop';

function PopularTv() {
    const {
        popularTv,
        popularTvLoading,
        popularTvError,
        setPopularTvLoadMore,
    } = usePopulartvFetch();

    if (popularTvError) return <div>Something went wrong..</div>;
    return (
        <>
            <Grid header={'Popular Tv Series'} icon={Icon2}>
                {popularTv.results.map((tv) => {
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
            {popularTvLoading && <Spinner />}
            {popularTv.page < popularTv.total_pages && !popularTvLoading && (
                <Button
                    text='Load More'
                    callback={() => setPopularTvLoadMore(true)}
                ></Button>
            )}
            <GoToTop />
        </>
    );
}

export default PopularTv;
