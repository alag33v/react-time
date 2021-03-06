import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddStopwatch, Stopwatch } from './components';
import { addLocalStorage } from './redux/ducks/timeDucks';
import { GlobalStyle } from './styles/GlobalStyle';
import { StyledApp } from './styles/StyledApp';

const App = () => {
  const timeTracks = useSelector(state => state.time.timeTracks);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (localStorage.localArray) {
        const localArr = JSON.parse(localStorage.getItem('localArray'));
        dispatch(addLocalStorage(localArr));
      }
    } catch (err) {
      console.log(err);
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('localArray', JSON.stringify(timeTracks));
  }, [timeTracks]);

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
