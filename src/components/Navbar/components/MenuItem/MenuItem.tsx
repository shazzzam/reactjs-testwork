import React from 'react';
import { Link } from 'react-router-dom';

import { linkId, LinkType } from '../../../../types';
import './menuitem.scss';

interface MenuItemProps {
  link: LinkType;
  active: linkId;
}

export const MenuItem = ({ link, active }: MenuItemProps) => {
  return (
    <li className="main-nav__item">
      <Link
        className={`btn main-nav__link ${
          link.id === active ? 'main-nav__link--active' : ''
        }`}
        to={link.to}
      >
        {link.name}
      </Link>
    </li>
  );
};
