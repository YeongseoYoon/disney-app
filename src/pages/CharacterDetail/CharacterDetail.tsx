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
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
`;

const CharacterFilmWrapper = styled.div`
  width: 100%;
  flex-wrap: wrap;
`;

const CharacterFilm = styled.div`
  display: inline-block;
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 3px;
  margin: 10px;
`;

const CharacterTitle = styled.h1`
  font-size: 30px;
  margin: 20px 0px;
`;

const CharacterImg = styled.img`
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
      <CharacterImg src={character?.imageUrl} />
      <CharacterTitle>{character?.name}'s Films'</CharacterTitle>
      <CharacterFilmWrapper>
        {character?.films?.map((film) => (
          <CharacterFilm key={`${character.id}-${film}`}>{film}</CharacterFilm>
        ))}
      </CharacterFilmWrapper>
    </CharacterDetailWrapper>
  );
}

export default CharacterDetail;
