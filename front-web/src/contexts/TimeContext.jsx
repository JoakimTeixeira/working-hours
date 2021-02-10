import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TimeContext = createContext();

export const TimeContextProvider = ({ children }) => {
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

  const [result, setResult] = useState({
    diurnal: 0,
    nocturnal: 0,
  });

  return (
    <TimeContext.Provider
      value={{
        time,
        setTime,
        resetTimeInputs,
        convertedTime,
        setConvertedTime,
        resetConvertedTime,
        result,
        setResult,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};
