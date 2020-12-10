import React from 'react';
import { useParams } from 'react-router-dom';

import './about.scss';

interface AboutParamTypes {
  id?: string;
  date?: string;
}

export const About = () => {
  const { id, date } = useParams<AboutParamTypes>();

  return (
    <div className="about">
      <h1 className="about__title title">Текстовая страница</h1>
      <p className="about__text">
        Это простая текстовая страница для
        <br />
        отображения параметров роута. Параметры:
      </p>
      <ul className="about__list">
        <li className="about__item">- id: {id}</li>
        <li className="about__item">- date: {date}</li>
      </ul>
    </div>
  );
};
