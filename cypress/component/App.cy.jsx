/* eslint-disable react/react-in-jsx-scope */
import App from '../../src/App';
import { Film } from '../../src/pages/film';
import { Home } from '../../src/pages/home';
import { People } from '../../src/pages/people';
import { Planet } from '../../src/pages/planet';

describe('App.cy.jsx', () => {
  it('shows the Home page', () => {
    cy.mount(<Home />);
    cy.get('h1').contains('Home');
  });

  it('shows the People page', () => {
    cy.mount(<People />);
    cy.get('h1').contains('People');
  });

  it('shows the Planet page', () => {
    cy.mount(<Planet />);
    cy.get('h1').contains('Planet');
  });

  it('shows the Film page', () => {
    cy.mount(<Film />);
    cy.get('h1').contains('Film');
  });
});
