import React from 'react';
import './footer.scss';

const { REACT_APP_SUPPORT_EMAIL } = process.env;

const Footer = () => (
  <div data-cy="footer" className="footer">
    All Rights Reserved 2024 &copy;
    <a href={`mailto:${REACT_APP_SUPPORT_EMAIL}`}> Nadia MM</a>
  </div>
);

export default Footer;
