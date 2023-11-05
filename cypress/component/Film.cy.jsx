import React from 'react';
import { Film } from '../../src/pages/film';
import data from '../fixtures/data.json';

describe('Checks the Film page content', () => {
  it('shows the title', () => {
    cy.mount(<Film />);
    cy.get('h1').contains('Films');
  });

  it('shows result after valid input is entered ', () => {
    cy.mount(<Film />);
    cy.get('input').type(data.realfilm);
    cy.get('h2').contains(data.realfilm);
  });

  it('shows no results after invalid input is entered ', () => {
    cy.mount(<Film />);
    cy.get('input').type(data.fakefilm);
    cy.get('h2').contains('No results found');
  });
});
