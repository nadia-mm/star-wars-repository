import React from 'react';
import './footer.scss';

const { REACT_APP_SUPPORT_EMAIL } = process.env;

// eslint-disable-next-line import/prefer-default-export
export const Footer = () => (
  <div data-cy="footer" className="footer">
    All Rights Reserved 2021 &copy;
    <a href={`mailto:${REACT_APP_SUPPORT_EMAIL}`}> Nadia MM</a>
  </div>
);
