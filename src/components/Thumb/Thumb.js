import { Wrapper, Image } from './Thumb.styles';
import { Link } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import NoImage from '../../images/no_image.jpg';

function Thumb({ image, movieId, tvId, clickable = false, title, rating }) {
    return (
        <Wrapper>
            {clickable ? (
                movieId ? (
                    <Link to={`/movie/${movieId}`}>
                        <Image
                            loading='lazy'
                            src={image ? image : NoImage}
                            alt='loading'
                        />
                    </Link>
                ) : (
                    <Link to={`/tv/${tvId}`}>
                        <Image
                            loading='lazy'
                            src={image ? image : NoImage}
                            alt='loading'
                        />
                    </Link>
                )
            ) : (
                <Image src={image ? image : NoImage} />
            )}
            <h4>{title}</h4>
            {rating ? <StarRating small rating={rating} /> : ''}
        </Wrapper>
    );
}
export default Thumb;
