import React from 'react';
import { People } from '../../src/pages/people';

describe('Checks the People page content', () => {
  it('shows the title', () => {
    cy.mount(<People />);
    cy.get('h1').contains('People');
  });
});
