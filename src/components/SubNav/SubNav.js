import { Wrapper, StyledLink } from './Subnav.styles';

function SubNav() {
    return (
        <Wrapper>
            <ul>
                <li>
                    <p>
                        <StyledLink to='/Trending'>Trending</StyledLink>
                    </p>
                </li>
                <li>
                    <p>Movies</p>
                    <div>
                        <StyledLink to='/PopularMovies'>Popular</StyledLink>
                        <StyledLink to='/UpcomingMovies'>Upcoming</StyledLink>
                        <StyledLink to='/TopRatedMovies'>Top Rated</StyledLink>
                    </div>
                </li>
                <li>
                    <p>Tv</p>
                    <div>
                        <StyledLink to='/PopularTv'>Popular</StyledLink>
                        <StyledLink to='/TopRatedTv'>Top Rated</StyledLink>
                    </div>
                </li>
            </ul>
        </Wrapper>
    );
}

export default SubNav;
