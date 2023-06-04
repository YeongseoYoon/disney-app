import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { characterDetailQuery } from "./loader";
import styled from "styled-components";

const CharacterDetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const CharacterFilmWrapper = styled.div`
  display: flex;
`;

const CharacterFilm = styled.div`
  display: inline;
  background-color: white;
  color: black;
  border-radius: 5px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px;
`;

function CharacterDetail() {
  const { id } = useParams() as { id: string };
  const { data: character } = useQuery<CharacterDetail>(
    characterDetailQuery(id)
  );

  return (
    <CharacterDetailWrapper>
      <Img src={character?.imageUrl} />
      <h1>{character?.name}'s Films</h1>
      <CharacterFilmWrapper>
        {character?.films?.map((film) => (
          <CharacterFilm key={`${character.id}-${film}`}>{film}</CharacterFilm>
        ))}
      </CharacterFilmWrapper>
    </CharacterDetailWrapper>
  );
}

export default CharacterDetail;
