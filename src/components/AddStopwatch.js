import { useState } from 'react';

const AddStopwatch = () => {
  let [trackName, setTrackName] = useState('');

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          placeholder='Enter tracker name'
          onChange={e => setTrackName(e.target.value)}
          value={trackName}
        />
      </div>
    </form>
  );
};

export default AddStopwatch;
