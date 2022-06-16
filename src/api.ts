import axios from 'axios';

export const getCharacters = async (page: number) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);

  return response.data.results;
};

export const getCharacter = async (id: number) => {
  const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);

  return response.data.results;
};

export const getSearchCharacterName = async (name: string) => {
  const response = await axios(`https://rickandmortyapi.com/api/character/?name=${name}`);

  return response.data.results;
};
