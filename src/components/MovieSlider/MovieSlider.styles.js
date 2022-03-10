import styled from 'styled-components';
export const Scene = styled.div`
    height: 70vmin;
    max-height: 650px;
    position: relative;
    transform-style: preserve-3d;
    display: grid;
    place-items: center;
    perspective: 65vw;
    overflow: hidden;
    margin: 4rem auto 1rem;

    @media screen and (max-width: 900px) {
        min-height: 500px;
        perspective: 82vw;
        height: 63vh;
        margin: 1rem auto 0rem;
    }
    @media screen and (orientation: landscape) {
        min-height: 550px;
    }
`;
export const Banner = styled.div`
    display: flex;
    transform-style: preserve-3d;
    transition: all 0.5s ease-in-out;
    transform: rotateY(0deg);
`;
export const Panel = styled.div`
    position: absolute;
    transform-style: preserve-3d;
    background-repeat: no-repeat;
    background-size: cover;
    height: 95vmin;
    min-height: 600px;
    max-height: 700px;
    width: 87vw;
    border-radius: 50px;
    outline: 2px solid transparent;
    transform: translate(-50%, -50%) rotateY(var(--angle)) translateZ(92vw);
    transition: all 0.3s ease-in-out 0.2s;
    ${loopForPanelCss()}
    &.center {
        transform: translate(-50%, -50%) rotateY(var(--angle)) translateZ(85vw)
            scale(1.3);

        &:hover {
            outline: 3px solid white;
        }
    }

    @media screen and (max-width: 950px) {
        height: 60vh;
        max-height: unset;
    }
    @media screen and (max-width: 500px) {
        border-radius: 20px;
    }
`;

export const SlideBtn = styled.div`
    position: absolute;
    height: 100%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
    color: rgba(259, 259, 259, 0.3);
    font-size: 50px;
    cursor: pointer;
    opacity: 0;

    &.prev {
        left: 0;
    }
    &.next {
        right: 0;
    }

    &:hover {
        opacity: 1;
    }

    @media screen and (max-width: 768px) {
        opacity: 0;
        /* visibility: hidden; */
        /* user-select: none; */
    }
`;

function template(i) {
    let str = `
        &:nth-child(${i}){
            --angle: ${(360 / 6) * i}deg;
        }
    `;
    return str;
}

function loopForPanelCss() {
    let str = '';
    for (let i = 0; i < 6; i++) {
        str += template(i + 1);
    }
    return str;
}

export const Content = styled.div`
    min-height: 600px;
    max-height: 700px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    height: inherit;
    width: inherit;
    padding: 1rem;
    border-radius: 50px;
    outline: 2px solid transparent;
    background-color: rgba(9, 11, 19, 0.95);
    background-image: linear-gradient(
            to left,
            rgba(0 0 0/0.5),
            rgba(0 0 0/0.85) 70% 100%
        ),
        url(${(props) => props.backdropImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    cursor: pointer;
    align-items: center;
    transform: rotateY(180deg);

    .Thumbnail {
        height: 80%;
        width: 40%;

        img {
            height: 100%;
            width: 80%;
            object-fit: cover;
            display: block;
            margin: 0 auto;
            transition: all 0.35s;
            transition-delay: 500ms;

            &.center {
                transform: translateY(-12%) scale(1.3);
            }
        }
    }
    .Info {
        width: 100%;
        /* border: 2px solid white; */
        margin-bottom: 1rem;
        color: rgba(0 0 0/0.1);
        display: none;

        h2 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
    }

    @media screen and (max-width: 730px) {
        background-image: linear-gradient(
                to bottom,
                rgba(0 0 0/0.1),
                rgba(0 0 0/0.85) 70% 100%
            ),
            url(${(props) => props.backdropImage});
        align-items: flex-end;

        .Thumbnail {
            display: none;
        }
        .Info {
            display: block;
        }
    }
    @media screen and (max-width: 500px) {
        border-radius: 20px;
        background-image: linear-gradient(
                to bottom,
                rgba(0 0 0/0.1),
                rgba(0 0 0/0.85) 70% 100%
            ),
            url(${(props) => props.posterImage});

        .Info {
            h2 {
                font-size: 2rem;
                margin-bottom: 0.6rem;
            }
            p {
                font-size: 1.3rem;
            }
        }
    }
`;

export const InfoDesktop = styled.div`
    height: 80%;
    width: 50%;
    padding: 1.5rem;
    /* height: 100%; */
    /* overflow-y: scroll; */

    h2 {
        font-size: 3.5rem;
        margin-bottom: 0.6rem;
    }
    p {
        cursor: text;
        font-size: 1.7rem;
        margin: 1.2rem 0 1rem;
        line-height: 2.5rem;
        max-height: 250px;
        overflow-y: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
            display: none;
        }
    }

    @media screen and (max-width: 1050px) {
        h2 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.2rem;
            line-height: 2.2rem;
        }
    }
    @media screen and (max-width: 730px) {
        display: none;
    }
`;
