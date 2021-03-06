import { useSelector } from 'react-redux';
import { AddStopwatch, Stopwatch } from './components';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

const App = () => {
  let timeTracks = useSelector(state => state.time.timeTracks);

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <h1 className='title'>Tracker</h1>
        <AddStopwatch />
        <ul className='list'>
          {timeTracks.map(time => (
            <li className='item' key={time.id}>
              <Stopwatch {...time} />
            </li>
          ))}
        </ul>
      </StyledApp>
    </>
  );
};

export default App;
