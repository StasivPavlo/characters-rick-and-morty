import axios from 'axios';

export const getCharacters = async (page: string) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`);

  return response.data.results;
};

export const getCharacter = async (id: string) => {
  const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);

  return response.data;
};

export const getSearchCharacterName = async (name: string) => {
  const response = await axios(`https://rickandmortyapi.com/api/character/?name=${name}`);

  return response.data.results;
};

export const getPageLength = () => {
  return axios.get(`https://rickandmortyapi.com/api/character`).then(res => {
    return res.data.info.pages;
  })
}
