import React from 'react';
import PropTypes from 'prop-types';

export const AlertMessage = ({ isError, clearError }) => {
  AlertMessage.propTypes = {
    isError: PropTypes.oneOfType([() => undefined, PropTypes.string]),
    clearError: PropTypes.func.isRequired,
  };

  AlertMessage.defaultProps = {
    isError: undefined,
  };

  return (
    <div className="chip">
      {isError}
      <i
        className="close material-icons"
        role="button"
        tabIndex="0"
        onClick={clearError}
        onKeyPress={clearError}
      >
        close
      </i>
    </div>
  );
};
