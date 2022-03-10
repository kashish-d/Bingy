import NotFoundImage from '../images/business-3d-331.png';
import styled from 'styled-components';

function PageNotFound() {
    return (
        <Wrapper>
            <h1>Oops! Page Not Found</h1>
            <img src={NotFoundImage} alt='Not Found' />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        height: 50vmin;
        width: 50vmin;
        object-fit: contain;
        margin: 2rem;
    }
`;

export default PageNotFound;
