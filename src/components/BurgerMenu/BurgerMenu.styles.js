import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 20px;
    width: 1.6rem;
    margin: 0 max(10px, 1rem);
    display: none;
    margin-left: 0;

    &.active {
        .line1 {
            transform: rotate(-45deg) translate(-6px, 5px);
        }
        .line2 {
            transform: translateX(-10px);
            opacity: 0;
        }
        .line3 {
            transform: rotate(45deg) translate(-6px, -5px);
        }
        & + .sidebar-parent {
            opacity: 1;
            pointer-events: all;
            .sidebar {
                transform: translateX(0%);
            }
        }
    }
    @media screen and (max-width: 660px) {
        display: flex;
    }
`;

export const Line = styled.div`
    height: 20%;
    width: 100%;
    background-color: white;
    pointer-events: none;
`;

export const SideBar = styled.div`
    display: block;
    height: 100vh;
    width: 100vw;
    position: absolute;
    background: linear-gradient(to right, rgba(0 0 0/0.3), rgba(0 0 0.3));
    left: 0;
    top: 4.96rem;
    z-index: 99999;
    opacity: 0;
    pointer-events: none;
    display: none;

    .sidebar {
        position: absolute;
        left: 0;
        transition: all 0.35s;
        transform: translateX(-100%);
        height: 100%;
        width: 70%;
        background-color: rgba(9, 11, 19, 0.95);
        pointer-events: all;
    }
    @media screen and (max-width: 660px) {
        display: block;
    }
`;

export const Option = styled.div`
    height: max-content;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 1px solid rgba(0 0 0/0.2);
    /* border: 1px solid; */
    position: relative;
    /* overflow: hidden; */

    .hiddenMenu {
        /* position: absolute; */
        padding: 1rem 1rem 1rem 2.5rem;
        width: 100%;
        display: grid;
        grid-template-rows: repeat(auto-fix, minmax(60px, 1fr));
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        background: linear-gradient(rgba(0 0 0/0.3), rgba(0 0 0/0.3));
    }
`;

export const OptionText = styled.p`
    padding: 1rem;
    height: 70px;
    font-size: 1.1rem;
    text-align: left;
`;

export const HiddenMenuOption = styled.p`
    font-size: 1rem;
    color: grey;
    height: 50px;
    display: flex;
    /* align-items: center; */
`;
