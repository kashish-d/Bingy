import styled from 'styled-components';

export const Wrapper = styled.div`
    min-width: 174px;
    max-width: 240px;
    min-height: 520px;
    h4 {
        font-size: 1.3rem;
        margin: 1rem 0 0.2rem;
        max-height: 100px;
        overflow-y: auto;
    }
    @media screen and (max-width: 470px) {
        min-width: 120px;
        max-width: 150px;
        min-height: 400px;
        h4 {
            font-size: 1.15rem;
        }
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-height: 370px;
    min-height: 370px;
    max-width: 230px;
    object-fit: cover;
    border-radius: 10px;
    border: 1px solid transparent;
    box-shadow: 2px 2px 10px #000;

    &:hover {
        border: 2px solid white;
        transform: scale(1.05);
    }

    @media screen and (max-width: 470px) {
        min-height: 250px;
        max-height: 250px;
        max-width: 150px;
        min-width: 130px;
    }
`;
