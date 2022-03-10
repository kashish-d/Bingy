import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    max-width: var(--max-width);
    margin: 0 auto 1rem;
    padding: 20px;
    overflow: hidden;
    /* border: 1px solid; */

    &.fullscreen {
        max-width: 100vw;
    }

    .headerBox {
        margin: 0.5rem 0 2rem;
        padding: 1.5rem 0;
        border-bottom: 0.1px solid grey;
        display: flex;
        align-items: center;
        img {
            height: 35px;
            width: 35px;
            margin-right: 20px;
        }
        h2 {
            font-size: 1.6rem;
        }
        @media screen and (max-width: 900px) {
            margin: 0rem 0 2rem;
        }
    }
    @media screen and (max-width: 400px) {
        max-width: 100vw;
        overflow-x: hidden;

        .headerBox {
            img {
                height: 30px;
                width: 30px;
            }
            h2 {
                font-size: 1.4rem;
            }
        }
    }
`;
export const Content = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 1rem 2rem;
    place-items: center;
    &.slidingAtAll {
        display: flex;
        overflow-x: scroll;
        overflow-y: hidden;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    @media screen and (max-width: 470px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        grid-gap: 1rem;
        &.sliding {
            display: flex;
            overflow-x: auto;
        }
    }
`;
export const StyledLink = styled(Link)`
    margin-left: auto;
    text-decoration: none;
    color: aqua;
    font-size: 0.9rem;
`;
