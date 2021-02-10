import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TimeContext } from 'contexts/TimeContext';

const Input = ({ inputName }) => {
  Input.propTypes = {
    inputName: PropTypes.string.isRequired,
  };

  const { time, setTime } = useContext(TimeContext);

  const handleInput = (e) => {
    if (inputName === 't1') setTime({ ...time, t1: e.target.value });
    if (inputName === 't2') setTime({ ...time, t2: e.target.value });
  };

  return <input type="time" name={inputName} onChange={(e) => handleInput(e, inputName)} />;
};

export default Input;
