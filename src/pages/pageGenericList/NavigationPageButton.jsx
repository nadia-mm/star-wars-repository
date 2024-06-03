import React from 'react';

const NavigationPageButtons = ({ previousPage, nextPage, setCurrentPage }) => (
  <div className="content__button">
    <input
      type="button"
      onClick={() => setCurrentPage(previousPage)}
      value="<<"
      disabled={!previousPage}
      aria-label="Previous page"
      aria-disabled={!nextPage}
    />
    <input
      type="button"
      onClick={() => setCurrentPage(nextPage)}
      value=">>"
      disabled={!nextPage}
      aria-label="Next page"
      aria-disabled={!nextPage}
    />
  </div>
);

export default NavigationPageButtons;
