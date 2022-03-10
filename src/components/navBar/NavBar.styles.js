import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 5rem;

    &.main {
        background-color: rgba(9, 11, 19, 0.95);
        position: sticky;
        top: -1px;
        z-index: 99999;
    }
`;

export const Logo = styled.h1`
    font-size: 4rem;
    font-family: 'Gloria Hallelujah', cursive;
    background: linear-gradient(90deg, #00ffcc, #2a7fff);
    background-clip: text;
    padding-right: 2px;
    -webkit-background-clip: text;
    color: transparent;
    outline: none;

    @media screen and (max-width: 500px) {
        font-size: 3.1rem;
    }
`;

export const LogoText = styled.h2`
    font-family: cursive, sans-serif;
    font-family: 'Gloria Hallelujah', cursive;
    font-size: 1.5rem;
    outline: none;

    @media screen and (max-width: 500px) {
        font-size: 0.9rem;
    }
`;

export const CreditLogo = styled.img`
    object-fit: contain;
    height: 40px;

    @media screen and (max-width: 500px) {
        height: 22px;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    outline: none;
    transform: rotate(-6deg);

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }

    &:active {
        animation: bounce 0.8s ease-in-out;
    }

    @keyframes bounce {
        0% {
            transform: scale(1) rotate(-6deg);
        }
        30% {
            transform: scaleX(1.25) scaleY(0.75) rotate(-6deg);
        }
        40% {
            transform: scaleX(0.75) scaleY(1.25) rotate(-6deg);
        }
        60% {
            transform: scaleX(1.15) scaleY(0.85) rotate(-6deg);
        }
        100% {
            transform: scale(1) rotate(-6deg);
        }
    }
`;
