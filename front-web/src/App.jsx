import { useContext } from 'react';
import Input from 'components/Input';
import Button from 'components/Button';
import Result from 'components/Result';
import { TimeContext } from 'contexts/TimeContext';
import { AlertMessage } from 'components/AlertMessage';
import './App.css';

function App() {
  const { isError, clearError } = useContext(TimeContext);

  return (
    <main className="container">
      <section>
        <h1>Working hours</h1>

        {isError && <AlertMessage isError={isError} clearError={clearError} />}
        <div style={{ padding: '1.5rem 0 1rem 0' }}>
          <Input inputName="t1" inputLabel="START: " />
          <Input inputName="t2" inputLabel="END: " />
        </div>
        <Button />
      </section>
      <section>
        <Result />
      </section>
    </main>
  );
}

export default App;
