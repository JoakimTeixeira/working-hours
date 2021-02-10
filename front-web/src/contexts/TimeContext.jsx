import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const TimeContext = createContext();

export const TimeContextProvider = ({ children }) => {
  TimeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [time, setTime] = useState({
    t1: '',
    t2: '',
  });

  return <TimeContext.Provider value={{ time, setTime }}>{children}</TimeContext.Provider>;
};
