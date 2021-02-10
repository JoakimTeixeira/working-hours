import React, { useContext, useEffect } from 'react';
import { TimeContext } from 'contexts/TimeContext';
import Axios from 'axios';

const Result = () => {
  const {
    convertedTime,
    resetConvertedTime,
    rawResult,
    setRawResult,
    resetRawResult,
    convertedResult,
    setConvertedResult,
  } = useContext(TimeContext);

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

  const verifyResult = () => {
    return (
      (convertedResult.diurnal && convertedResult !== 0) ||
      convertedResult.nocturnal ||
      convertedResult.nocturnal !== 0
    );
  };

  return (
    verifyResult() && (
      <section>
        <div>{`Diurnal: ${convertedResult.diurnal}`}</div>
        <div>{`Nocturnal: ${convertedResult.nocturnal}`}</div>
      </section>
    )
  );
};

export default Result;
