import React, { Component, useEffect, useState} from 'react';
import PropTypes                                from 'prop-types';
import { connect }                              from 'react-redux';
import { updateFilters }                        from '../../redux/actions/filter';
import Checkbox                                 from '../Checkbox';

import './style.scss';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

const Filter = (props) => {

  const [selectedCheckboxes, setSelectedCheckboxes] = useState (null);

  useEffect ( () => {
    setSelectedCheckboxes(new Set());
    console.log ("ABIN>>>")
  },[]);


  const toggleCheckbox = label => {
    if (selectedCheckboxes.has (label)) {
      selectedCheckboxes.delete (label);
    } else {
      selectedCheckboxes.add (label);
    }

    props.updateFilters (Array.from (selectedCheckboxes));

  };

  const createCheckboxes = () => availableSizes.map (label => (
    <Checkbox
      classes="filters-available-size"
      label={label}
      handleCheckboxChange={(e) => toggleCheckbox(e)}
      key={label}
    />
  ));

  return (
    <div className="filters">
      <h4 className="title">
        Sizes:
      </h4>
      {createCheckboxes()}
    </div>
  );

}

Filter.propTypes = {
  updateFilters: PropTypes.func.isRequired,
  filters: PropTypes.array
}

const mapStateToProps = state => ({
  filters: state.filters.items
});

export default connect(
  mapStateToProps,
  { updateFilters }
)(Filter);
