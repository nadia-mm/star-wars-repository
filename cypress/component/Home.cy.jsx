import React from 'react';
import { Home } from '../../src/pages/home';

describe('Checks the Home page content', () => {
  it('shows the title', () => {
    cy.mount(<Home />);
    cy.get('h1').contains('Home');
  });
});
