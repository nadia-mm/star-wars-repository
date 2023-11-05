import React from 'react';
import { Error } from '../../src/pages/error';

describe('Checks the Error page content', () => {
  it('shows the title', () => {
    cy.mount(<Error />);
    cy.get('[data-cy=error]').contains('An error happened. Please contact');
  });
});
