import styled from 'styled-components';

export const Wrapper = styled.div`
    font-size: 2.5rem;
    position: relative;
    cursor: text;
    text-shadow: 0px 0px 5px #f8c94f;
    color: #f8c94f;
    letter-spacing: 5px;

    &.small {
        font-size: 1.1rem;
    }

    &:before {
        z-index: -1;
        content: '★★★★★';
        cursor: text;
        color: transparent;
        text-shadow: 0px 0px grey;
        position: absolute;
        inset: 0;
        height: 100%;
        width: 100%;
    }

    @media screen and (max-width: 950px) {
        font-size: 1.5rem;
    }
`;
