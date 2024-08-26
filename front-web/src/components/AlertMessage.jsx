import PropTypes from 'prop-types';

export function AlertMessage({ isError, clearError }) {
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
      <button
        className="close"
        type="button"
        tabIndex="0"
        onClick={clearError}
        onKeyDown={clearError}
        style={{ outline: 'none' }}
      >
        &#10005;
      </button>
    </div>
  );
}
