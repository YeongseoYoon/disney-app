import { Link } from "react-router-dom";
import styled from "styled-components";

const CharacterImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    cursor: pointer;
    border-radius: 10px;
    background-color: white;
    color: black;
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px;
`;

interface CharacterImageProps {
  character: Character;
}

function CharacterImage({ character }: CharacterImageProps) {
  return (
    <CharacterImageWrapper>
      <Link to={`character/${character.id}`}>
        <Img src={character.imageUrl} />
        <div>{character.name}</div>
      </Link>
    </CharacterImageWrapper>
  );
}

export default CharacterImage;
