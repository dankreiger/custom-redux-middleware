import { FETCH_TODOS, TOGGLE_FLOPPING } from 'constants/index';

export const woofInitialState = {
  items: [],
  flopping: false
};
const woofReducer = (state = woofInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_FLOPPING:
      return {
        ...state,
        flopping: !state.flopping
      };
    case FETCH_TODOS:
      const { data } = payload;
      return {
        ...state,
        items: data
      };
    default:
      return state;
  }
};
export default woofReducer;
