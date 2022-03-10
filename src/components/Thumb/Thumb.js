import { Wrapper, Image, ImageWrapper } from './Thumb.styles';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import NoImage from '../../images/no_image.jpg';

function Thumb({ image, movieId, tvId, clickable = false, title, rating }) {
    return (
        <Wrapper>
            {clickable ? (
                movieId ? (
                    <Link to={`/movie/${movieId}`}>
                        <ImageWrapper>
                            <Image
                                loading='lazy'
                                src={image ? image : NoImage}
                                alt='loading'
                            />
                        </ImageWrapper>
                    </Link>
                ) : (
                    <Link to={`/tv/${tvId}`}>
                        <ImageWrapper>
                            <Image
                                loading='lazy'
                                src={image ? image : NoImage}
                                alt='loading'
                            />
                        </ImageWrapper>
                    </Link>
                )
            ) : (
                <ImageWrapper>
                    <Image src={image ? image : NoImage} />
                </ImageWrapper>
            )}
            <h4>{title}</h4>
            {rating ? <StarRating small rating={rating} /> : ''}
        </Wrapper>
    );
}
export default Thumb;
