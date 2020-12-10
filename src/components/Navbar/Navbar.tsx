import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { linkId, LinkType } from '../../types';
import { MenuItem } from './components/MenuItem/MenuItem';
import './navbar.scss';

export const Navbar = () => {
  const links: Array<LinkType> = [
    {
      id: 'home',
      to: '/',
      name: 'Калькулятор',
    },
    {
      id: 'about',
      to: `/about/${Math.floor(
        Math.random() * 10000
      )}/${new Date().toLocaleString()}`,
      name: 'Текстовая',
    },
  ];

  const [active, setActive] = useState<linkId>('home');

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith('/about')) {
      return setActive('about');
    }
    return setActive('home');
  }, [location]);

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {links.map((link) => (
          <MenuItem key={link.to} link={link} active={active} />
        ))}
      </ul>
    </nav>
  );
};
