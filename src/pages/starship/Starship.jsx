import React from 'react';
import PageGeneric from '../pageGenericList/PageGenericList';
import CardStarship from './CardStarship';

const Starship = React.memo(({ url }) => (
  <PageGeneric url={url} title="Starships" CardComponent={CardStarship} />
));

export default Starship;
