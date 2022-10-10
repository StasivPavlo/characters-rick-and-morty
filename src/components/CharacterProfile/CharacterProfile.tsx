import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCharacter } from '../../api';
import { Character } from '../../types/character';
import './CharacterProfile.scss'

export const CharacterProfile: React.FC = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const loadCharacter = async () => {
      if (characterId) {
        setCharacter(await getCharacter(characterId));
      }
    };

    loadCharacter();
  }, [characterId]);

  if (!character) {
    return null;
  }

  return (
    <>
      <div className="character">
        <img
          className="character__image"
          src={character.image}
          alt="character"
        />
        <h2 className="character__name">{character.name}</h2>
        <ul className="character__info-list">
          <li className="character__info-item">
            {`Species: ${character.species}`}
          </li>
          <li className="character__info-item">
            {`Gender: ${character.gender}`}
          </li>
          <li className="character__info-item">
            {`Location: ${character.location.name}`}
          </li>
          <li className="character__info-item">
            {'Episodes: '}
            {character.episode.map(e => {
              const episodeNumber = e.split('/');
              const lastIndex = episodeNumber.length - 1;

              return (
                <span key={episodeNumber[lastIndex]}>
                    {episodeNumber[lastIndex]}
                </span>
              );
            })}
          </li>
          <li className="character__info-item">
            {`Status: ${character.status}`}
          </li>
          <li className="character__info-item">
            {`Created: ${new Date(Date.parse(character.created)).toLocaleDateString()}`}
          </li>
        </ul>
      </div>
    </>
  );
};
