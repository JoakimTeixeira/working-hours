import React, { useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import Axios from 'axios';

function App() {
  const [time, setTime] = useState({
    t1: '',
    t2: '',
  });

  const handleInput = (e, inputName) => {
    if (inputName === 't1') setTime({ ...time, t1: e.target.value });
    if (inputName === 't2') setTime({ ...time, t2: e.target.value });
  };

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
    <>
      <h1>Working hours</h1>
      <Input inputName="t1" handleInput={handleInput} />
      <Input inputName="t2" handleInput={handleInput} />
      <Button convertTimeToMinutes={convertTimeToMinutes} />
    </>
  );
}

export default App;
