import { useState } from 'react';
import {
    Scene,
    Panel,
    SlideBtn,
    Banner,
    Content,
    InfoDesktop,
} from './MovieSlider.styles';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../Config';
import Spinner from '../Spinner/Spinner';
import { useTrendingFetch } from '../../hooks/useTrendingFetch';
import StarRating from '../StarRating/StarRating';
import { useNavigate } from 'react-router-dom';

function MovieSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
    const navigate = useNavigate();
    const { Trending, TrendingLoading, TrendingError } = useTrendingFetch();
    const ArrayOfSix = Trending.results.filter((movietv, index) => index < 6);
    const indexSol = {
        1: 3,
        2: 2,
        3: 1,
        4: 6,
        5: 5,
        6: 4,
    };

    const prevHandler = () => {
        setCurrentSlideIndex((currentIndex) => {
            let newIndex = currentIndex - 1;
            if (newIndex < 1) {
                newIndex = 6;
            }
            return newIndex;
        });
    };

    const nextHandler = () => {
        setCurrentSlideIndex((currentIndex) => {
            let newIndex = currentIndex + 1;
            if (newIndex > 6) {
                newIndex = 1;
            }
            return newIndex;
        });
    };

    let swipedir,
        startX,
        distX = 0,
        threshold = 70,
        allowedTime = 400,
        elapsedTime,
        startTime;

    function HandleTouchStart(e) {
        // console.log('touchstart');
        var touchObj = e.changedTouches[0];
        swipedir = 'none';
        startX = touchObj.pageX;
        startTime = new Date().getTime();
        // e.preventDefault();
    }

    function HandleTouchMove(e) {
        // console.log('touchmove');
        // e.preventDefault();
    }

    function HandleTouchEnd(e) {
        var touchObj = e.changedTouches[0];
        distX = touchObj.pageX - startX;
        elapsedTime = new Date().getTime() - startTime;
        // console.log(elapsedTime);
        if (elapsedTime <= allowedTime) {
            //time condition met
            if (Math.abs(distX) >= threshold) {
                swipedir = distX < 0 ? 'left' : 'right';
            }
        }
        if (swipedir === 'left') {
            nextHandler();
        } else if (swipedir === 'right') {
            prevHandler();
        } else {
            return;
        }
    }

    function HandleLinking(mediaType, id) {
        navigate(`${mediaType}/${id}`);
    }

    if (TrendingLoading) {
        return <Spinner />;
    }
    if (TrendingError) {
        return <div>Something went wrong...</div>;
    }
    return (
        <Scene
            onTouchStart={(e) => {
                HandleTouchStart(e);
            }}
            onTouchMove={(e) => HandleTouchMove(e)}
            onTouchEnd={(e) => HandleTouchEnd(e)}
        >
            <SlideBtn className='prev' onClick={prevHandler}>
                {'<'}
            </SlideBtn>
            <Banner
                style={{
                    transform: `rotateY(${(currentSlideIndex - 1) * 60}deg)`,
                }}
            >
                {ArrayOfSix.map((movietv, index) => {
                    return (
                        <Panel
                            key={index + 1}
                            className={
                                currentSlideIndex === indexSol[index + 1]
                                    ? 'center'
                                    : ''
                            }
                            data-id={index + 1}
                        >
                            <Content
                                onClick={() =>
                                    HandleLinking(
                                        movietv.media_type,
                                        movietv.id
                                    )
                                }
                                backdropImage={
                                    movietv.backdrop_path
                                        ? IMAGE_BASE_URL +
                                          BACKDROP_SIZE +
                                          movietv.backdrop_path
                                        : ''
                                }
                                posterImage={
                                    movietv.poster_path
                                        ? IMAGE_BASE_URL +
                                          POSTER_SIZE +
                                          movietv.poster_path
                                        : ''
                                }
                            >
                                <div className='Thumbnail'>
                                    <img
                                        className={
                                            currentSlideIndex ===
                                            indexSol[index + 1]
                                                ? 'center'
                                                : ''
                                        }
                                        src={
                                            movietv.poster_path
                                                ? IMAGE_BASE_URL +
                                                  POSTER_SIZE +
                                                  movietv.poster_path
                                                : ''
                                        }
                                        alt={movietv.id}
                                    />
                                </div>
                                <div className='Info'>
                                    <h2>
                                        {movietv.original_title
                                            ? movietv.original_title
                                            : movietv.name}
                                    </h2>
                                    <StarRating
                                        rating={(movietv.vote_average / 10) * 5}
                                    />
                                </div>
                                <InfoDesktop>
                                    <h2>
                                        {movietv.original_title
                                            ? movietv.original_title
                                            : movietv.name}
                                    </h2>
                                    <StarRating
                                        rating={(movietv.vote_average / 10) * 5}
                                    />
                                    <p>{movietv.overview}</p>
                                </InfoDesktop>
                            </Content>
                        </Panel>
                    );
                })}
            </Banner>
            <SlideBtn className='next' onClick={nextHandler}>
                {'>'}
            </SlideBtn>
        </Scene>
    );
}

export default MovieSlider;
