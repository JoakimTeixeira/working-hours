import React, { useContext } from 'react';
import Axios from 'axios';
import { TimeContext } from 'contexts/TimeContext';

const Button = () => {
  const { time, setTime } = useContext(TimeContext);

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
