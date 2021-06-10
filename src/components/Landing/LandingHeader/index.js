import React      from 'react';
import PropTypes  from 'prop-types';
import Sort       from '../../Sort';
import TempSpacingComp from '../../TempSpacingComp';


const LandingHeader = props => {
  return (
    <div className="landing-container-header">
      <small className="products-found">
        <span>{props.productsLength} Product(s) found.</span>
      </small>
      <Sort />
      <TempSpacingComp />
    </div>
  );
};

LandingHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};

export default LandingHeader;
