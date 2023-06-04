const BASE_URL = `https://disney_api.nomadcoders.workers.dev/characters`;

export async function fetchCharactersData() {
  try {
    const data = await (await fetch(BASE_URL)).json();

    return data;
  } catch (error) {
    throw error;
  }
}

export async function fetchCharacterDetailData(id: string) {
  try {
    const data = await (await fetch(`${BASE_URL}/${id}`)).json();

    return data;
  } catch (error) {
    throw error;
  }
}
