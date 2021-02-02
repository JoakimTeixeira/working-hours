import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ convertTimeToMinutes }) => {
  Button.propTypes = {
    convertTimeToMinutes: PropTypes.func.isRequired,
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
