import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TimeContext } from 'contexts/TimeContext';

const Input = ({ inputName }) => {
  Input.propTypes = {
    inputName: PropTypes.string.isRequired,
  };

  const { time, setTime } = useContext(TimeContext);

  const handleInput = (e) => {
    if (inputName === 't1') setTime({ ...time, inputT1: e.target.value });
    if (inputName === 't2') setTime({ ...time, inputT2: e.target.value });
  };

  const handleInputValue = () => {
    if (inputName === 't1') return time.inputT1;
    if (inputName === 't2') return time.inputT2;
    return '';
  };

  return (
    <input
      type="time"
      name={inputName}
      value={handleInputValue()}
      onChange={(e) => handleInput(e, inputName)}
    />
  );
};

export default Input;
