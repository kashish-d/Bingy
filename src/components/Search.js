import Grid from './Grid/Grid';
import Spinner from './Spinner/Spinner';
import Thumb from './Thumb/Thumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../Config';
import Button from './button/Button';
import SearchIcon from '../images/loupe.png';

function Search({
    searchState,
    searchLoading,
    searchError,
    setSearchLoadMore,
}) {
    if (searchError) {
        return <div>Something went wrong..</div>;
    }
    return (
        <>
            <Grid header='Search Results' icon={SearchIcon}>
                {searchState.results.map((content) => {
                    return (
                        <Thumb
                            key={content.id}
                            clickable={
                                content.media_type !== 'person' ? true : false
                            }
                            movieId={
                                content.media_type === 'movie' ? content.id : ''
                            }
                            tvId={
                                content.media_type === 'tv' ? content.id : ' '
                            }
                            image={
                                content.poster_path
                                    ? IMAGE_BASE_URL +
                                      POSTER_SIZE +
                                      content.poster_path
                                    : ''
                            }
                            title={
                                content.name
                                    ? content.name
                                    : content.original_title
                                    ? content.original_title
                                    : content.title
                            }
                            rating={(content.vote_average / 10) * 5}
                        />
                    );
                })}
            </Grid>
            {searchLoading && <Spinner />}
            {searchState.page < searchState.total_pages && !searchLoading && (
                <Button
                    text='Load More'
                    callback={() => setSearchLoadMore(true)}
                ></Button>
            )}
        </>
    );
}
export default Search;
