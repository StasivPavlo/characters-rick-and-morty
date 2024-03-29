import React from "react";
import classNames from "classnames";
import { Character } from "../../types/character";
import './CharacterCard.scss'

interface Props {
  character: Character
}

export const CharacterCard: React.FC<Props> = (props) => {
  const { character } = props;

  return (
    <li key={character.id} className="characters__item">
      <div className="characters__photo" style={{ backgroundImage: `url("${character.image}")` }}></div>
      <div className="characters__info">
        <div className="characters__info-header">
          <a className="characters__name" href={`./character=${character.id}`}>{character.name}</a>
          {character.status !== 'unknown' && (
            <div className="characters__status">
              <div className={classNames(
                'characters__status-icon', {
                  'characters__status-icon--alive': character.status === 'Alive',
                  'characters__status-icon--dead': character.status === 'Dead',
                })}></div>
              <span className={'characters__status-text'}>
                {character.status}
              </span>
            </div>
          )}
          <span className={'characters__gender'}>{character.gender}</span>
        </div>
        <div className="characters__species">
          <svg
            className="characters__species-icon"
            x="0px" y="0px"
            viewBox="0 0 130.94 130.941">
            <g>
              <g>
                <path d="M72.278,65.47c10.229-8.579,35.024-32.354,35.024-61.162c0-2.381-1.924-4.308-4.312-4.308
			c-2.374,0-4.299,1.927-4.299,4.308c0,26.171-25.062,48.887-33.222,55.594C57.29,53.201,32.248,30.528,32.248,4.308
			C32.248,1.927,30.302,0,27.946,0c-2.399,0-4.308,1.927-4.308,4.308c0,28.808,24.81,52.583,35.025,61.162
			c-10.233,8.58-35.025,32.358-35.025,61.16c0,2.387,1.927,4.311,4.308,4.311c2.375,0,4.302-1.924,4.302-4.311
			c0-26.172,25.06-48.884,33.223-55.594c8.171,6.703,33.222,29.373,33.222,55.594c0,2.387,1.949,4.311,4.299,4.311
			c2.399,0,4.312-1.924,4.312-4.311C107.303,97.829,82.495,74.05,72.278,65.47z" />
                <path d="M43.634,10.056h43.647c2.375,0,4.312-1.939,4.312-4.308c0-2.381-1.948-4.308-4.312-4.308H43.634
			c-2.393,0-4.308,1.927-4.308,4.308C39.326,8.132,41.241,10.056,43.634,10.056z" />
                <path d="M86.204,24.067c0-2.381-1.942-4.308-4.306-4.308H49.036c-2.402,0-4.311,1.934-4.311,4.308
			c0,2.384,1.927,4.308,4.311,4.308h32.863C84.273,28.375,86.204,26.451,86.204,24.067z" />
                <path d="M59.259,35.92c-2.387,0-4.308,1.927-4.308,4.311c0,2.381,1.934,4.308,4.308,4.308h12.398c2.374,0,4.311-1.933,4.311-4.308
			c0-2.384-1.948-4.311-4.311-4.311H59.259z" />
                <path d="M87.281,122.136H43.634c-2.393,0-4.308,1.937-4.308,4.311c0,2.381,1.927,4.306,4.308,4.306h43.647
			c2.375,0,4.312-1.931,4.312-4.306C91.593,124.06,89.656,122.136,87.281,122.136z" />
                <path d="M44.712,108.125c0,2.381,1.921,4.312,4.302,4.312h32.867c2.381,0,4.311-1.931,4.311-4.312
			c0-2.374-1.942-4.305-4.311-4.305H49.014C46.627,103.82,44.712,105.744,44.712,108.125z" />
                <path d="M71.657,96.269c2.374,0,4.311-1.93,4.311-4.305s-1.948-4.305-4.311-4.305H59.259c-2.387,0-4.308,1.936-4.308,4.305
			c0,2.381,1.934,4.305,4.308,4.305H71.657z" />
              </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
          </svg>
          <span className={'characters__species-text'}>{character.species}</span>
        </div>
        <div className="characters__location">
          <svg className="characters__location-icon" viewBox="0 0 24 24">
            <path
              d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
          <span>{character.location.name}</span>
        </div>
        <a className="characters__link" href={`character=${character.id}`}>View more &gt;</a>
      </div>
    </li>
  )
}
