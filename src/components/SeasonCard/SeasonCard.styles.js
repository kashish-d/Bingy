import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 40vmin;
    min-width: 70vmin;
    display: flex;
    background: rgba(9, 6, 19, 0.5);
    border-radius: 10px;
    padding: 10px;
`;
export const Image = styled.img`
    width: 40%;
    height: 100%;
    object-fit: cover;
`;
export const Details = styled.div`
    padding: 2rem;
    width: 60%;
    height: 40vmin;

    h2 {
        font-size: 1.3rem;
        margin: 1rem;
    }
    h3 {
        font-size: 1.1rem;
        margin: 1rem;
        color: darkgrey;
    }
    h5 {
        font-size: 1rem;
        margin: 1rem;
        color: grey;
    }

    @media screen and (max-width: 550px) {
        padding: 0.6rem;
        h2 {
            font-size: 1rem;
            margin: 0.5rem;
        }
        h3 {
            font-size: 0.9rem;
            margin: 0.5rem;
        }
        h5 {
            font-size: 0.8rem;
            margin: 0.5rem;
        }
    }
    @media screen and (max-width: 350px) {
        padding: 0.3rem;
        h2 {
            font-size: 0.9rem;
            margin: 0.2rem;
        }
        h3 {
            font-size: 0.8rem;
            margin: 0.2rem;
        }
        h5 {
            font-size: 0.7rem;
            margin: 0.2rem;
        }
    }
`;
