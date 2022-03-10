import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 21rem;
    height: 21rem;
    margin-bottom: 2rem;
    min-width: 11rem;
    width: 11rem;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 2px 2px 10px black;

    @media screen and (max-width: 768px) {
        min-height: 15rem;
        height: 15rem;
        min-width: 7rem;
        width: 7rem;
        margin-bottom: 1rem;
    }
    @media screen and (max-width: 470px) {
        min-height: 12rem;
        height: 12rem;
        max-width: 6rem;
        min-width: 6rem;
        margin-bottom: 0.7rem;
    }
`;
export const Image = styled.img`
    height: 70%;
    width: 100%;
    object-fit: cover;

    @media screen and (max-width: 470px) {
        height: 60%;
    }
`;
export const Name = styled.h3`
    margin: 0.2rem 0.5rem;
    font-size: 1rem;
    @media screen and (max-width: 470px) {
        margin: 0.2rem;
        font-size: 0.7rem;
    }
`;
export const Character = styled.p`
    font-size: 0.75rem;
    margin: 0 0.5rem 0.5rem;
    @media screen and (max-width: 470px) {
        margin: 0 0.2rem 0.2rem;
        font-size: 0.3;
    }
`;
