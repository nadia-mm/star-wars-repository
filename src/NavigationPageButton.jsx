import React from 'react';

const NavigationPageButtons = ({ previousPage, nextPage, setCurrentPage }) => (
  <div className="content__button">
    <input
      type="button"
      onClick={() => setCurrentPage(previousPage)}
      value="<<"
      disabled={!previousPage}
    />
    <input
      type="button"
      onClick={() => setCurrentPage(nextPage)}
      value=">>"
      disabled={!nextPage}
    />
  </div>
);

export default NavigationPageButtons;
