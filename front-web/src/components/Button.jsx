import React, { useContext } from 'react';
import Axios from 'axios';
import { TimeContext } from 'contexts/TimeContext';

const Button = () => {
  const { time, resetTimeInputs, setConvertedTime } = useContext(TimeContext);

  const convertTimeToMinutes = async () => {
    const { inputT1, inputT2 } = time;

    if (inputT1 && inputT2) {
      const timeInMinutes = await Axios.post(
        'http://localhost:3001/convert/toMinutes',
        { t1: inputT1, t2: inputT2 },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setConvertedTime(timeInMinutes.data);
      resetTimeInputs();
    }
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
