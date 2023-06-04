import { useQuery } from "@tanstack/react-query";
import CharacterImage from "../../components/CharacterImage";
import { homeQuery } from "./loader";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
`;

function Home() {
  const { data: characters } = useQuery<Character[]>(homeQuery());
  return (
    <GridWrapper>
      {characters?.slice(0, 100).map((character) => (
        <CharacterImage key={character.id} character={character} />
      ))}
    </GridWrapper>
  );
}

export default Home;
