interface Character {
  id: number;
  imageUrl: string;
  name: string;
}

interface CharacterDetail extends Character {
  films: string[];
}
