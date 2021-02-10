import React, { useContext } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import Result from 'components/Result';
import { TimeContext } from 'contexts/TimeContext';
import { AlertMessage } from 'components/AlertMessage';

function App() {
  const { isError, clearError } = useContext(TimeContext);

  return (
    <>
      <h1>Working hours</h1>

      {isError && <AlertMessage isError={isError} clearError={clearError} />}
      <Input inputName="t1" />
      <Input inputName="t2" />
      <Button />
      <Result />
    </>
  );
}

export default App;
