import React from 'react';

import './loader.scss';

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__circle loader__circle--red"></div>
      <div className="loader__circle loader__circle--blue"></div>
      <div className="loader__circle loader__circle--gold"></div>
    </div>
  );
};
