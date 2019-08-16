import { FETCH_TODOS, TOGGLE_FLOPPING } from 'constants/index';
import axios from 'axios';

// export const fetchTodos = () => dispatch => {
//   debugger;
//   return axios
//     .get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       dispatch({
//         type: FETCH_TODOS,
//         payload: response.data
//       });
//     });
// };

export const fetchTodos = () => ({
  type: FETCH_TODOS,
  payload: axios.get('https://jsonplaceholder.typicode.com/posts')
});

export const toggleFlopping = () => ({
  type: TOGGLE_FLOPPING
});
