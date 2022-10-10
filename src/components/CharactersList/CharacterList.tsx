import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { axiosCharacters } from '../../store/CharactersSlice';
import { useAppDispatch, useAppSelector } from '../../hook';
import { Character } from '../../types/character';
import { Pagination } from "../Pagination/Pagination";
import './CharacterList.scss';
import { CharacterCard } from "../CharacterCard/CharacterCard";

export const CharacterList: React.FC = () => {
  const { page } = useParams();
  const dispatch = useAppDispatch();
  const characters: Character[] = useAppSelector(state => state.characters.characters);
  const status: string | null = useAppSelector(state => state.characters.status);

  useEffect(() => {
    if (page) {
      dispatch(axiosCharacters(page));
    } else {
      dispatch(axiosCharacters('1'));
    }
  }, [page]);

  if (status === 'pending') {
    return <p>pending</p>;
  }

  if (status === 'rejected') {
    return <p>{status}</p>;
  }

  return (
    <>
      <div className="characters">
        <ul className="characters__list">
          {characters.map((character:Character  ) => (
            <CharacterCard character={character} />
          ))}
        </ul>
        <Pagination />
      </div>
    </>
  );
};
