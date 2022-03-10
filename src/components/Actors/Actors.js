import { Wrapper, Image, Name, Character } from './Actors.styles';

function Actors({ name, character, imageUrl }) {
    return (
        <Wrapper>
            <Image src={imageUrl}></Image>
            <Name>{name}</Name>
            <Character>{character}</Character>
        </Wrapper>
    );
}
export default Actors;
