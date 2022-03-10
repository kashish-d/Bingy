import { Wrapper } from './StarRating.styles';
function StarRating({ rating, small }) {
    const str = '★';

    return (
        <Wrapper className={small ? 'small' : ''}>
            {str.repeat(Math.round(rating))}
        </Wrapper>
    );
}
export default StarRating;
