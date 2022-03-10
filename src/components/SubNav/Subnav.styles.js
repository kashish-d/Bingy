import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
    margin-left: 4rem;
    width: 11rem;
    ul {
        /* border: 1px solid; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
    }
    li {
        cursor: pointer;
        position: relative;

        p {
            font-size: 1.1rem;
        }

        div {
            position: absolute;
            top: 100%;
            height: min-content;
            width: 150px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 1rem 1rem 0rem 1rem;
            opacity: 0;
            transform: translateY(30%);
            pointer-events: none;
            transition: all 0.35s;
            background: rgba(9, 11, 19, 0.8);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            backdrop-filter: blur(10px);
            border-radius: 10px;

            &:hover {
                pointer-events: all;
                opacity: 1;
                transform: translateY(0%);
            }
        }
        &:hover {
            div {
                pointer-events: all;
                opacity: 1;
                transform: translateY(0%);
            }
        }
    }
    @media screen and (max-width: 768px) {
        width: 9rem;
        margin-left: 1rem;
        li {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 660px) {
        display: none;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1rem;
    margin-bottom: 1rem;
`;
