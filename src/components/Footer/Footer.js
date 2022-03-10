import { Wrapper, Attribution, Copyright, Notice } from './Footer.styles';
import TMDBLogo from '../../images/tmdb_logo.svg';

function Footer() {
    return (
        <Wrapper>
            <Attribution>
                <p>Powered by</p>
                <img src={TMDBLogo} alt='tmdb' />
            </Attribution>
            <Notice>Bingy is not in any way associated with TMDB</Notice>
            <Copyright>© 2022 Bingy </Copyright>
        </Wrapper>
    );
}
export default Footer;
