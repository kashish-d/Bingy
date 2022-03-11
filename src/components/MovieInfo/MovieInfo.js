import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../../Config';
import { Wrapper, Content, Image } from './MovieInfo.styles';
import { calcTime } from '../../helpers';
import ClockIcon from '../../images/wall-clock.png';
import GenresIcon from '../../images/popcorn.png';
import NoImage from '../../images/no_image.jpg';
import StarRating from '../StarRating/StarRating';

function MovieInfo({ state, mediaType }) {
    return (
        <Wrapper
            background={
                state.backdrop_path
                    ? IMAGE_BASE_URL + BACKDROP_SIZE + state.backdrop_path
                    : ''
            }
        >
            {state.poster_path ? (
                <Image src={IMAGE_BASE_URL + POSTER_SIZE + state.poster_path} />
            ) : (
                <Image src={NoImage} alt='NA' />
            )}
            <Content>
                <div className='basic-info'>
                    <div>
                        <img src={GenresIcon} alt='genres' />
                        <span>
                            {state.genres.map((each) => each.name + ' ')}
                        </span>
                    </div>
                    <div>
                        <img src={ClockIcon} alt='runtime' />
                        <span className='runtime'>
                            {mediaType === 'movie'
                                ? calcTime(state.runtime)
                                : calcTime(state.episode_run_time[0])}
                        </span>
                    </div>
                </div>

                <h1>
                    {state.title
                        ? state.title
                        : state.original_title
                        ? state.original_title
                        : state.name}
                </h1>
                <p className='dates'>
                    {mediaType === 'movie'
                        ? `Release: ${state.release_date}`
                        : `Airing: ${state.first_air_date} - ${
                              state.last_air_date
                                  ? state.last_air_date
                                  : 'Ongoing'
                          }`}
                </p>
                <StarRating small rating={(state.vote_average / 10) * 5} />

                {state.tagline ? (
                    <h2 className='tagline'>"{state.tagline}"</h2>
                ) : (
                    ''
                )}

                <h3>Synopsis</h3>
                <p>{state.overview}</p>

                {mediaType === 'movie' ? (
                    <div className='MakingInfo'>
                        <h3>Director(s)</h3>
                        <p>{state.directors.map((each) => each.name + '')}</p>
                    </div>
                ) : (
                    <div className='MakingInfo'>
                        <h3>Status</h3>
                        <p>{state.status}</p>
                    </div>
                )}
            </Content>
        </Wrapper>
    );
}

export default MovieInfo;
