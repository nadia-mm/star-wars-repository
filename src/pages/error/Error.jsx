import React from 'react';

const email = process.env.SUPPORT_EMAIL;
// eslint-disable-next-line import/prefer-default-export
export const Error = () => (
  <div>
    An error happened. Please contact
    <a href={`mailto:${email}`}>support</a>
  </div>
);
