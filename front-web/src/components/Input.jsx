import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputName, handleInput }) => {
  Input.propTypes = {
    inputName: PropTypes.string.isRequired,
    handleInput: PropTypes.func.isRequired,
  };

  return <input type="time" name={inputName} onChange={(e) => handleInput(e, inputName)} />;
};

export default Input;
