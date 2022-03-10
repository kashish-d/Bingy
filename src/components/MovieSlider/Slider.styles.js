import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 30rem;
    min-width: 100vh;
    /* border: 4px solid red; */
    overflow: hidden;
    padding: 10px;
    position: relative;
`;

export const Content = styled.div`
    height: 25rem;
    border: 1px solid;
    flex-shrink: 0;
    transform-style: preserve-3d;
    transition: transform 500ms ease-out 100ms;

    &.left {
        background-color: red;
        transform: rotateY(10deg);
    }
    &.center {
        background-color: blue;
        transform: translateZ(50px);
    }
    &.right {
        background-color: green;
        transform: rotateY(-10deg);
    }
`;
