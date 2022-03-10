import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto 4rem;
    font-size: 1rem;
    height: 4rem;
    width: 8rem;
    background-color: rgba(9, 6, 19, 1);
    color: white;
    border-radius: 20px;
    cursor: pointer;

    &:active {
        color: grey;
        background-color: white;
    }
`;
