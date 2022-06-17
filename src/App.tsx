import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';
import { axiosCharacters } from './store/CharactersSlice';
import './App.scss';

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(axiosCharacters(1));
  }, []);

  return (
    <div className="App">
    </div>
  );
};
