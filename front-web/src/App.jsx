import React from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import { TimeContextProvider } from 'contexts/TimeContext';

function App() {
  return (
    <>
      <h1>Working hours</h1>
      <TimeContextProvider>
        <Input inputName="t1" />
        <Input inputName="t2" />
        <Button />
      </TimeContextProvider>
    </>
  );
}

export default App;
