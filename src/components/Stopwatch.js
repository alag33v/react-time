import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resumeStopwatch } from '../redux/ducks/timeDucks';

const Stopwatch = ({ id, title, savedTime, isActive }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        const newObj = {
          id,
          title,
          savedTime: savedTime + 1000,
          isActive
        };

        dispatch(resumeStopwatch(newObj));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [id, title, savedTime, isActive, dispatch]);

  return (
    <div>
      <p>{title}</p>
      <div>
        <span>{('0' + Math.floor((savedTime / 3600000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((savedTime / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((savedTime / 1000) % 60)).slice(-2)}</span>
      </div>
    </div>
  );
};

export default Stopwatch;
