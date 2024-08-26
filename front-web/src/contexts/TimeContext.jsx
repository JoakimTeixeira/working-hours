import { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const TimeContext = createContext();

export function TimeContextProvider({ children }) {
  TimeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [time, setTime] = useState({
    inputT1: '',
    inputT2: '',
  });

  const resetTimeInputs = () => {
    setTime({
      inputT1: '',
      inputT2: '',
    });
  };

  const [convertedTime, setConvertedTime] = useState({
    t1: '',
    t2: '',
  });

  const resetConvertedTime = () => {
    setConvertedTime({
      t1: '',
      t2: '',
    });
  };

  const [rawResult, setRawResult] = useState({
    diurnal: 0,
    nocturnal: 0,
  });

  const resetRawResult = () => {
    setRawResult({
      diurnal: 0,
      nocturnal: 0,
    });
  };

  const [convertedResult, setConvertedResult] = useState({
    diurnal: 0,
    nocturnal: 0,
  });

  const [isError, setIsError] = useState('');

  const clearError = () => {
    setIsError('');
  };

  const value = useMemo(
    () => ({
      time,
      setTime,
      resetTimeInputs,
      convertedTime,
      setConvertedTime,
      resetConvertedTime,
      rawResult,
      setRawResult,
      resetRawResult,
      convertedResult,
      setConvertedResult,
      isError,
      setIsError,
      clearError,
    }),
    [
      time,
      setTime,
      resetTimeInputs,
      convertedTime,
      setConvertedTime,
      resetConvertedTime,
      rawResult,
      setRawResult,
      resetRawResult,
      convertedResult,
      setConvertedResult,
      isError,
      setIsError,
      clearError,
    ]
  );

  return <TimeContext.Provider value={value}>{children}</TimeContext.Provider>;
}
