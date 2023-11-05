import React from 'react';
import { Planet } from '../../src/pages/planet';

describe('Checks the Planet page content', () => {
  it('shows the title', () => {
    cy.mount(<Planet />);
    cy.get('h1').contains('Planets');
  });
});
