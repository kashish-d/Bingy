import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 5rem 0;
    background-image: linear-gradient(rgba(0 0 0/0.9), rgba(0 0 0/ 0.9)),
        url(${(props) => props.background});
    background-position: bottom-right;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        padding: 1rem;
    }
`;

export const Content = styled.div`
    width: 45%;
    padding: 1rem;
    /* border: 1px solid; */

    h1 {
        font-size: 3rem;
        margin: 2rem 0 0rem;
    }
    h3 {
        margin: 2rem 0 1rem;
        font-size: 1.3rem;
        color: rgba(255, 255, 255, 0.8);
    }
    p {
        font-size: 1.1rem;
        color: grey;
    }
    .tagline {
        font-size: 1.3rem;
        margin: 2rem 0;
        color: darkgray;
    }
    .basic-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 500px;

        div {
            display: flex;
            align-items: center;
            margin-right: 10px;
            img {
                height: 1.1rem;
                width: 1.1rem;
                object-fit: contain;
                margin-right: 5px;
            }
            span {
                font-size: 1.1rem;

                &.runtime {
                    width: 100px;
                }
            }
        }
    }
    .MakingInfo {
        margin: 2rem 0;
        h3 {
            margin: 1rem 0;
        }
    }

    @media screen and (max-width: 970px) {
        h1 {
            font-size: 2.5rem;
        }
        .tagline {
            margin: 1.5rem 0;
        }
        h3 {
            margin: 0.5rem 0;
        }
        .MakingInfo {
            h3 {
                margin: 0.5rem 0;
            }
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 3rem 1rem 1rem;

        h1 {
            font-size: 2rem;
        }
    }
`;

export const Image = styled.img`
    max-height: 34.3rem;
    border-radius: 10px;
    object-fit: cover;

    @media screen and (max-width: 768px) {
        max-height: 29rem;
        margin: 1rem;
    }
    @media screen and (max-width: 360px) {
        max-height: 350px;
    }
`;

export const CastGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    max-width: 1000px;
    border: 1px solid;
    margin: 2rem auto;
    place-items: center;

    p {
        min-height: 200px;
        max-height: 210px;
        min-width: 200px;
        max-width: 210px;
        border: 1px solid;
    }
`;
