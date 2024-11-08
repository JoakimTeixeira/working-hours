import { useContext, useEffect } from 'react';
import { TimeContext } from 'contexts/TimeContext';
import Axios from 'axios';
import Card from './Card';

export default function Result() {
  const {
    convertedTime,
    resetConvertedTime,
    rawResult,
    setRawResult,
    resetRawResult,
    convertedResult,
    setConvertedResult,
    setIsError,
  } = useContext(TimeContext);

  useEffect(() => {
    const calculateTime = async () => {
      try {
        const { t1, t2 } = convertedTime;
        const apiUri = 'https://working-hours-api.herokuapp.com/calculate';

        const response = await Axios.post(
          apiUri,
          { t1, t2 },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const calculatedTime = response.data;

        setRawResult({ ...rawResult, ...calculatedTime });
        resetConvertedTime();
      } catch (error) {
        if (error.response.data.msg) {
          setIsError(error.response.data.msg);
        } else {
          setIsError(error.response.data.error);
        }
      }
    };

    if (convertedTime.t1 && convertedTime.t2) {
      calculateTime();
    }
  }, [convertedTime]);

  useEffect(() => {
    const { diurnal, nocturnal } = rawResult;

    const convertResultFromMinutes = async () => {
      try {
        const apiUri = 'https://working-hours-api.herokuapp.com/convert/fromMinutes';

        const response = await Axios.post(
          apiUri,
          { diurnal, nocturnal },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        );
        setConvertedResult(response.data);
      } catch (error) {
        if (error.response.data.msg) {
          setIsError(error.response.data.msg);
        } else {
          setIsError(error.response.data.error);
        }
      }
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
      <>
        {convertedResult.diurnal !== '00:00' && (
          <Card cardName="Diurnal" data={convertedResult.diurnal} />
        )}
        {convertedResult.nocturnal !== '00:00' && (
          <Card cardName="Nocturnal" data={convertedResult.nocturnal} />
        )}
      </>
    )
  );
}
