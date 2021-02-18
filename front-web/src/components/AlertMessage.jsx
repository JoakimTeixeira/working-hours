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
      <div
        className="close"
        role="button"
        tabIndex="0"
        onClick={clearError}
        onKeyPress={clearError}
        style={{ outline: 'none' }}
      >
        &#10005;
      </div>
    </div>
  );
};
