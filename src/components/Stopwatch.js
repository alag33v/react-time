import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resumeStopwatch, deleteStopwatch } from '../redux/ducks/timeDucks';
import { StyledStopwatch } from '../styles/components/StyledStopwatch';

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

  const onResume = () => {
    const newObj = {
      id,
      title,
      savedTime,
      isActive: !isActive
    };

    dispatch(resumeStopwatch(newObj));
  };

  const onDelete = () => {
    dispatch(deleteStopwatch(id));
  };

  return (
    <StyledStopwatch>
      <p className={isActive ? 'name active' : 'name'}>{title}</p>
      <div className={isActive ? 'time active' : 'time'}>
        <span>{('0' + Math.floor((savedTime / 3600000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((savedTime / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((savedTime / 1000) % 60)).slice(-2)}</span>
      </div>
      <div>
        {isActive ? (
          <button className='stop' onClick={onResume}>
            Stop
          </button>
        ) : (
          <button className='resume' onClick={onResume}>
            Resume
          </button>
        )}
        <button className='delete' onClick={onDelete}>
          Delete
        </button>
      </div>
    </StyledStopwatch>
  );
};

export default Stopwatch;
