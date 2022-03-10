import SearchBar from '../SearchBar/SearchBar';
import TMDBLogo from '../../images/tmdb_logo.svg';
import {
    Wrapper,
    Logo,
    LogoText,
    CreditLogo,
    StyledLink,
} from './NavBar.styles';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import SubNav from '../SubNav/SubNav';

function NavBar({ setSearchTerm }) {
    return (
        <>
            <Wrapper className='main'>
                <Wrapper>
                    <BurgerMenu />
                    <StyledLink to='/'>
                        <Wrapper>
                            <Logo>B</Logo>
                            <LogoText>ingy</LogoText>
                        </Wrapper>
                    </StyledLink>
                    <SubNav></SubNav>
                </Wrapper>
                <Wrapper>
                    <SearchBar setSearchTerm={setSearchTerm} />
                    <a
                        href='https://www.themoviedb.org/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <CreditLogo src={TMDBLogo} />
                    </a>
                </Wrapper>
            </Wrapper>
        </>
    );
}

export default NavBar;
