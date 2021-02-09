import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

const Button = ({ time, setTime }) => {
  Button.propTypes = {
    time: PropTypes.shape({
      t1: PropTypes.string,
      t2: PropTypes.string,
    }).isRequired,
    setTime: PropTypes.func.isRequired,
  };

  const convertTimeToMinutes = async () => {
    const timeInMinutes = await Axios.post(
      'http://localhost:3001/convert/toMinutes',
      { t1: time.t1, t2: time.t2 },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
    setTime(timeInMinutes.data);
  };

  return (
    <button
      className="btn waves-effect waves-light"
      type="submit"
      name="action"
      onClick={convertTimeToMinutes}
    >
      Submit
    </button>
  );
};

export default Button;
