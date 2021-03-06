import { useSelector } from 'react-redux';
import { AddStopwatch, Stopwatch } from './components';

const App = () => {
  let timeTracks = useSelector(state => state.time.timeTracks);

  return (
    <div>
      <h1>Tracker</h1>
      <AddStopwatch />
      <ul>
        {timeTracks.map(time => (
          <li key={time.id}>
            <Stopwatch {...time} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
