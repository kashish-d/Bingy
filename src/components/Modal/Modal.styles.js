import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0 0 0/0.9);
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
    /* border: 1px solid; */
    border-radius: 10px;
    width: 98vmin;
    padding: 1rem;
    height: 70vmin;
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
