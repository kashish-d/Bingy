import { useRef } from 'react';
import {
    Wrapper,
    Line,
    SideBar,
    Option,
    OptionText,
    HiddenMenuOption,
} from './BurgerMenu.styles';
import { useNavigate } from 'react-router-dom';

function BurgerMenu() {
    const body = document.querySelector('body');
    const BurgerMenuRef = useRef();
    const navigate = useNavigate();

    function LinkTo(pathname) {
        navigate(`${pathname}`);
        HandleClick();
    }

    function HandleClick() {
        BurgerMenuRef.current.classList.toggle('active');
        if (BurgerMenuRef.current.classList.contains('active')) {
            body.classList.add('lock-scroll');
        } else {
            body.classList.remove('lock-scroll');
        }
    }
    return (
        <>
            <Wrapper ref={BurgerMenuRef} onClick={HandleClick}>
                <Line className='line1'></Line>
                <Line className='line2'></Line>
                <Line className='line3'></Line>
            </Wrapper>

            <SideBar className='sidebar-parent' onClick={HandleClick}>
                <div className='sidebar'>
                    <Option>
                        <OptionText onClick={() => LinkTo('/Trending')}>
                            Trending
                        </OptionText>
                    </Option>
                    <Option>
                        <OptionText>Movies</OptionText>
                        <div className='hiddenMenu'>
                            <HiddenMenuOption
                                onClick={() => LinkTo('/PopularMovies')}
                            >
                                Popular
                            </HiddenMenuOption>
                            <HiddenMenuOption
                                onClick={() => LinkTo('/UpcomingMovies')}
                            >
                                Upcoming
                            </HiddenMenuOption>
                            <HiddenMenuOption
                                onClick={() => LinkTo('/TopRatedMovies')}
                            >
                                Top Rated
                            </HiddenMenuOption>
                        </div>
                    </Option>
                    <Option>
                        <OptionText>Tv</OptionText>
                        <div className='hiddenMenu'>
                            <HiddenMenuOption
                                onClick={() => LinkTo('/PopularTv')}
                            >
                                Popular
                            </HiddenMenuOption>
                            <HiddenMenuOption
                                onClick={() => LinkTo('/TopRatedTv')}
                            >
                                Top Rated
                            </HiddenMenuOption>
                        </div>
                    </Option>
                </div>
            </SideBar>
        </>
    );
}
export default BurgerMenu;
