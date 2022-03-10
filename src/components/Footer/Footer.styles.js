import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1rem;
    width: 100%;
    background-color: rgba(9, 6, 19);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Attribution = styled.div`
    img {
        height: 10vmin;
        width: 20vmin;
    }
    p {
        text-align: center;
    }
`;
export const Notice = styled.p`
    color: grey;
    text-align: center;
`;
export const Copyright = styled.p`
    margin: 0.5rem;
    text-align: center;
    font-size: 1.1rem;
`;
