import { Wrapper, Image, Details } from './SeasonCard.styles';
function SeasonCard({ imageUrl, name, episodes, airDate }) {
    return (
        <Wrapper>
            <Image src={imageUrl} />
            <Details>
                <h2>{name}</h2>
                <h3>{episodes} episodes</h3>
                <h5>First Aired: {airDate}</h5>
            </Details>
        </Wrapper>
    );
}
export default SeasonCard;
