import { useContext } from 'react';
import Axios from 'axios';
import { TimeContext } from 'contexts/TimeContext';

export default function Button() {
  const { time, resetTimeInputs, setConvertedTime, setIsError } = useContext(TimeContext);

  const convertTimeToMinutes = async () => {
    try {
      const { inputT1, inputT2 } = time;

      const apiUri = 'https://working-hours-api.herokuapp.com/convert/toMinutes';

      const timeInMinutes = await Axios.post(
        apiUri,
        { t1: inputT1, t2: inputT2 },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      setConvertedTime(timeInMinutes.data);
      resetTimeInputs();
    } catch (error) {
      if (error.response.data.msg) {
        setIsError(error.response.data.msg);
      } else {
        setIsError(error.response.data.error);
      }
    }
  };

  return (
    <button
      className="btn-large waves-effect waves-light"
      type="submit"
      name="action"
      onClick={convertTimeToMinutes}
      style={{ width: '100%' }}
    >
      CALCULATE
    </button>
  );
}
