import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 4rem auto;
    height: 3rem;
    width: 3rem;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-left: 5px solid grey;
    /* border-top: 5px solid grey; */
    border-radius: 150px;
    animation: spin 0.8s infinite linear;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;
