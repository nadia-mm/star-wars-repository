import React from 'react';
import PageGeneric from '../pageGenericList/PageGenericList';
import CardPeople from './CardPeople';

const People = React.memo(({ url }) => (
  <PageGeneric url={url} title="People" CardComponent={CardPeople} />
));

export default People;
