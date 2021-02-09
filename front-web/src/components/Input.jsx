import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputName, time, setTime }) => {
  Input.propTypes = {
    inputName: PropTypes.string.isRequired,
    time: PropTypes.shape({
      t1: PropTypes.string,
      t2: PropTypes.string,
    }).isRequired,
    setTime: PropTypes.func.isRequired,
  };

  const handleInput = (e) => {
    if (inputName === 't1') setTime({ ...time, t1: e.target.value });
    if (inputName === 't2') setTime({ ...time, t2: e.target.value });
  };

  return <input type="time" name={inputName} onChange={(e) => handleInput(e, inputName)} />;
};

export default Input;
