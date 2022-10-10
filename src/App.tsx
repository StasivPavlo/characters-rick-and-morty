import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { CharacterList } from './components/CharactersList/CharacterList';
import { CharacterProfile } from './components/CharacterProfile/CharacterProfile';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<CharacterList />} />
          <Route path="page=:page" element={<CharacterList />} />
          <Route path="character=:characterId" element={<CharacterProfile />} />
        </Routes>
      </div>
    </div>
  );
};
