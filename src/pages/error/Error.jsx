import React from 'react';

const { REACT_APP_SUPPORT_EMAIL } = process.env;

// eslint-disable-next-line import/prefer-default-export
export const Error = () => (
  <div data-cy="error">
    An error happened. Please contact
    <a href={`mailto:${REACT_APP_SUPPORT_EMAIL}`}> support</a>
  </div>
);
