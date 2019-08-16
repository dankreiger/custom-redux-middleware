import React from 'react';
import PropTypes from 'prop-types';
import { AppWrapper } from './App.styles';
import { connect } from 'react-redux';
import * as actions from 'actions';

/**
 * @typedef {Object} Item
 * @prop {number} id
 * @prop {number} userId
 * @prop {string} title
 * @prop {string} body
 */

/**
 * @typedef {Object} AppProps
 * @prop {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} fetchTodos
 * @prop {(event: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => void} toggleFlopping
 * @prop {boolean} flopping
 * @prop {Item[]} items
 */

/**
 * @param {AppProps} props
 * @returns {JSX.Element}
 */
function App({ fetchTodos, toggleFlopping, flopping, items }) {
  return (
    <AppWrapper>
      <h1>{flopping ? 'floppy soft ears' : 'steif ears'}</h1>
      <button onClick={toggleFlopping}>Toggle Flopping</button>
      <button className="fetch-todos" onClick={fetchTodos}>
        Fetch todos
      </button>
      <ul>{items && items.map(item => <li key={item.id}>{item.title}</li>)}</ul>
    </AppWrapper>
  );
}

App.propTypes = {
  fetchBears: PropTypes.func,
  flopping: PropTypes.bool,
  fetchTodos: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      userId: PropTypes.number,
      id: PropTypes.number,
      title: PropTypes.string,
      body: PropTypes.string
    })
  )
};

const mapStateToProps = ({ woofReducer }) => ({
  flopping: woofReducer.flopping,
  items: woofReducer.items
});

export default connect(
  mapStateToProps,
  actions
)(App);

// /* just for reference again */
// const mapDispatchToProps = dispatch => ({
//   toggleFlopping: () => dispatch({ type: 'TOGGLE_FLOPPING' }),
//   fetchTodos: () => dispatch({ type: 'FETCH_TODOS' })
// });
