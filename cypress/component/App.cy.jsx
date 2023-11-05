/* eslint-disable react/react-in-jsx-scope */
import App from '../../src/App';

describe('App.cy.jsx', () => {
  it('shows the Home page', () => {
    cy.mount(<App />);
    cy.get('[data-cy=menus]');
    cy.get('.content');
    cy.get('[data-cy=footer]');
  });
});
