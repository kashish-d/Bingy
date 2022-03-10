import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0 0 0/0.7);
    position: fixed;
    inset: 0;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;

    &.active {
        display: flex;
    }
`;

export const Content = styled.div`
    border-radius: 10px;
    width: 100vmin;
    padding: 1rem;
    height: 65vmin;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    background-color: black;

    h1 {
        padding: 1rem;
        align-self: flex-end;
        cursor: pointer;
    }
`;
