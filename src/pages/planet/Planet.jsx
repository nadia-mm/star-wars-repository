import React from 'react';
import PageGeneric from '../pageGenericList/PageGenericList';
import CardPlanet from './CardPlanet';

const Planet = ({ url }) => (
  <PageGeneric url={url} title="Planet" CardComponent={CardPlanet} />
);

export default Planet;
