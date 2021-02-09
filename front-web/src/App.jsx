import React, { useState } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';

function App() {
  const [time, setTime] = useState({
    t1: '',
    t2: '',
  });

  return (
    <>
      <h1>Working hours</h1>
      <Input inputName="t1" time={time} setTime={setTime} />
      <Input inputName="t2" time={time} setTime={setTime} />
      <Button time={time} setTime={setTime} />
    </>
  );
}

export default App;
