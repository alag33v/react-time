import { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import { addNewStopwatch } from '../redux/ducks/timeDucks';
import { StyledAddStopwatch } from '../styles/components/StyledAddStopwatch';

const AddStopwatch = () => {
  let [trackName, setTrackName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newObj = {
      id: uuid(),
      title: trackName || moment().format('Do MMMM YYYY, H:mm:ss a'),
      savedTime: 0,
      isActive: true
    };

    dispatch(addNewStopwatch(newObj));
    setTrackName('');
  };

  return (
    <StyledAddStopwatch onSubmit={handleSubmit}>
      <div className='input__wrapper'>
        <input
          type='text'
          placeholder='Enter tracker name'
          onChange={e => setTrackName(e.target.value)}
          value={trackName}
        />
        <button type='submit'>
          Add
        </button>
      </div>
    </StyledAddStopwatch>
  );
};

export default AddStopwatch;
