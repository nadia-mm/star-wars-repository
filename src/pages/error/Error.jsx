import React from 'react';

const { REACT_APP_SUPPORT_EMAIL } = process.env;

const Error = ({ message }) => (
  <div data-cy="error">
    {message ? (
      <p>{message}</p>
    ) : (
      <p>
        An error happened. Please contact
        <a href={`mailto:${REACT_APP_SUPPORT_EMAIL}`}> support</a>.
      </p>
    )}
  </div>
);

export default Error;
