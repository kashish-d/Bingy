import React, { useState } from 'react';
import { Wrapper, Content } from './Slider.styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

function SimpleSlider() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    var settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '200px',
        arrows: true,
        afterChange: (index) => {
            setCurrentSlideIndex(index);
        },
        className: 'carousel',
    };

    return (
        <Wrapper>
            <Carousel {...settings}>
                <Content
                    className={
                        currentSlideIndex === 0
                            ? 'center'
                            : currentSlideIndex === 4
                            ? 'right'
                            : currentSlideIndex === 1
                            ? 'left'
                            : ''
                    }
                >
                    <h1>0</h1>
                </Content>
                <Content
                    className={
                        currentSlideIndex === 1
                            ? 'center'
                            : currentSlideIndex === 0
                            ? 'right'
                            : currentSlideIndex === 2
                            ? 'left'
                            : ''
                    }
                >
                    <h1>1</h1>
                </Content>
                <Content
                    className={
                        currentSlideIndex === 2
                            ? 'center'
                            : currentSlideIndex === 1
                            ? 'right'
                            : currentSlideIndex === 3
                            ? 'left'
                            : ''
                    }
                >
                    <h1>2</h1>
                </Content>
                <Content
                    className={
                        currentSlideIndex === 3
                            ? 'center'
                            : currentSlideIndex === 2
                            ? 'right'
                            : currentSlideIndex === 4
                            ? 'left'
                            : ''
                    }
                >
                    <h1>3</h1>
                </Content>
                <Content
                    className={
                        currentSlideIndex === 4
                            ? 'center'
                            : currentSlideIndex === 3
                            ? 'right'
                            : currentSlideIndex === 0
                            ? 'left'
                            : ''
                    }
                >
                    <h1>4</h1>
                </Content>
            </Carousel>
        </Wrapper>
    );
}

const Carousel = styled(Slider)`
    & button {
        opacity: 1;
        height: 100%;
        width: 10vw;
        z-index: 99999;
    }
    & .slick-slide > div {
        /* perspective: 1000px; */
    }
    .slick-prev {
        left: 0;
    }
`;

export default SimpleSlider;
