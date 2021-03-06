// Actions
const NEW_STOPWATCH = 'time/NEW_STOPWATCH';
const RESUME_STOPWATCH = 'time/RESUME_STOPWATCH';
const DELETE_STOPWATCH = 'time/DELETE_STOPWATCH';
const LOCAL_STORAGE = 'time/LOCAL_STORAGE';

// Reducer
const initialState = {
  timeTracks: [
    { id: '0', title: 'Tracker #1', savedTime: 1800000, isActive: false },
    { id: '1', title: 'Tracker #2', savedTime: 172800000, isActive: false }
  ]
};

export const timeReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_STOPWATCH:
      return { ...state, timeTracks: [action.payload, ...state.timeTracks] };
    case RESUME_STOPWATCH: {
      const timeTracks = [...state.timeTracks];
      const index = timeTracks.findIndex(item => item.id === action.payload.id);
      timeTracks[index] = { ...action.payload };
      return { timeTracks };
    }
    case DELETE_STOPWATCH:
      return {
        ...state,
        timeTracks: state.timeTracks.filter(time => time.id !== action.payload)
      };
    case LOCAL_STORAGE:
      return { ...state, timeTracks: action.payload };
    default:
      return state;
  }
};

// Action Creators
export const addNewStopwatch = obj => ({
  type: NEW_STOPWATCH,
  payload: obj
});

export const resumeStopwatch = obj => ({
  type: RESUME_STOPWATCH,
  payload: obj
});

export const deleteStopwatch = id => ({
  type: DELETE_STOPWATCH,
  payload: id
});

export const addLocalStorage = arr => ({
  type: LOCAL_STORAGE,
  payload: arr
});
