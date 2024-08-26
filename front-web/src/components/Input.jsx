import { useContext } from 'react';
import PropTypes from 'prop-types';
import { TimeContext } from 'contexts/TimeContext';

export default function Input({ inputName, inputLabel }) {
  Input.propTypes = {
    inputName: PropTypes.string.isRequired,
    inputLabel: PropTypes.string.isRequired,
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
    <article className="row label-container" style={{ display: 'flex', alignItems: 'center' }}>
      <label htmlFor={inputName} className="col s4" style={{ marginLeft: '0', padding: '0' }}>
        <span style={{ color: '#000', fontSize: '1.5rem' }}>{inputLabel}</span>
      </label>
      <input
        type="time"
        name={inputName}
        id={inputName}
        className="col s5"
        style={{ border: '1px solid black', padding: '.3rem', height: '100%' }}
        value={handleInputValue()}
        onChange={(e) => handleInput(e)}
      />
    </article>
  );
}
