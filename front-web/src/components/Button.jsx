import React, { useContext, useEffect } from 'react';
import Axios from 'axios';
import { TimeContext } from 'contexts/TimeContext';

const Button = () => {
  const {
    time,
    resetTimeInputs,
    convertedTime,
    setConvertedTime,
    resetConvertedTime,
    rawResult,
    setRawResult,
    resetRawResult,
    setConvertedResult,
  } = useContext(TimeContext);

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

  useEffect(() => {
    const calculateTime = async () => {
      const { t1, t2 } = convertedTime;

      const response = await Axios.post(
        'http://localhost:3001/calculate',
        { t1, t2 },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const calculatedTime = response.data;

      setRawResult({ ...rawResult, ...calculatedTime });
      resetConvertedTime();
    };

    if (convertedTime.t1 && convertedTime.t2) {
      calculateTime();
    }
  }, [convertedTime]);

  useEffect(() => {
    const { diurnal, nocturnal } = rawResult;

    const convertResultFromMinutes = async () => {
      const response = await Axios.post(
        'http://localhost:3001/convert/fromMinutes',
        { diurnal, nocturnal },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setConvertedResult(response.data);
    };

    if ((diurnal && diurnal !== 0) || (nocturnal && nocturnal !== 0)) {
      convertResultFromMinutes();
      resetRawResult();
    }
  }, [rawResult]);

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
