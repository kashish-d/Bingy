import styled from 'styled-components';
import PlayIcon from '../../images/play.svg';

export const Wrapper = styled.div`
    min-height: 35vmin;
    min-width: 62vmin;
    background-image: url(${(props) => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .play {
        position: absolute;
        top: 50%;
        width: 8vmin;
        height: 8vmin;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255 255 255/0.6);
        border-radius: 150px;
        background-image: url(${PlayIcon});
        background-repeat: no-repeat;
        background-position: 58% 49%;
        background-size: 50%;
        filter: invert(1);

        &:hover {
            opacity: 0.7;
        }
    }
`;
