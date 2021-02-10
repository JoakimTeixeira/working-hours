import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cardName, data }) => {
  Card.propTypes = {
    cardName: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
  };

  return (
    <div
      style={{
        width: '100%',
        borderBottom: '3px solid #2BBBAD',
        marginTop: '3rem',
        fontSize: '1.2rem',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <span style={{ fontWeight: 'bold' }}>{`${cardName}:`}</span>
      {`${data} h`}
    </div>
  );
};

export default Card;
