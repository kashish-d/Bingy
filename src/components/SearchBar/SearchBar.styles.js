import styled from 'styled-components';

export const Wrapper = styled.div`
    height: 2.5rem;
    display: flex;
    /* justify-content: center;
    align-items: center; */
    margin-right: 15px;
    position: relative;
    overflow: hidden;

    .label,
    .labelSm {
        position: absolute;
        top: 50%;
        color: #7b7684;
        pointer-events: none;
        transition: all 0.35s;
        font-family: 'Roboto', sans-serif;
    }
    .label {
        left: 0;
        transform: translate(0, -50%);
    }
    .labelSm {
        right: 0;
        transform: translate(3rem, -50%);
        width: 6rem;
        font-size: 0.75rem;
        text-align: right;
        opacity: 0;
        transition: all 0.35s;
    }

    @media screen and (max-width: 500px) {
        width: 8rem;
    }
`;

export const Input = styled.input`
    background-color: transparent;
    border: 0;
    height: inherit;
    outline: none;
    border-bottom: 2px solid #2e2a33;
    width: 16rem;
    color: #f7f7f7;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    transition: all 0.35s;
    padding-right: 3.1rem;

    &.focussed {
        border-bottom-color: aqua;

        ~ .label {
            opacity: 0;
            transform: translate(-3rem, -50%);
        }

        ~ .labelSm {
            opacity: 1;
            transform: translate(0, -50%);
        }
    }
`;
