import React, { useState } from 'react';
import logo from '../../assets/img/logo.png';
import './Header.scss';

export const Header: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <header className="header">
      <a href="./" className="header__logo-link">
        <img
          src={logo}
          alt="logo"
          className="header__logo logo"
        />
      </a>

      <input
        type="text"
        className="header__search input"
        placeholder="Search characters"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <div className="header__login">
        Login
      </div>
    </header>
  );
};
