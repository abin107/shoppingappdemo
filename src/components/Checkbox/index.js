import React, { Component, useState } from 'react';
import PropTypes                      from 'prop-types';

const Checkbox = (props) => {

  const { label, classes }         = props;
  const [ isChecked, setIsChecked] = useState (false);

  const toggleCheckboxChange = () => {
    const { handleCheckboxChange, label } = props;
    setIsChecked (!isChecked);
    handleCheckboxChange(label);
  };

  return (
    <div className={classes}>
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={toggleCheckboxChange}
        />
        <span className="checkmark">{label}</span>
      </label>
    </div>
  );

}

Checkbox.propTypes = {
  label                : PropTypes.string.isRequired,
  handleCheckboxChange : PropTypes.func.isRequired
}


export default Checkbox;
