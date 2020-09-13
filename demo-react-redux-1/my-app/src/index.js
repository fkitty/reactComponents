import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const stateChanger = (state, action) => {
  if (typeof state === 'undefined') {
    return {n: 0}
  } else {
    if (action.type === 'add') {
      // var newState = state + action.payload;
      var newState = {n: state.n + action.payload}; // 新的state和旧的state是一样的结构
      return newState; // 2、根据操作生成新的state 触发一个事件
    }
    else {
      return state;
    }
  }
}

const store = createStore(stateChanger);
// store.subscribe(render);

// render();
// store.subscribe(() => {
//   render();
// })

// function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
// }

serviceWorker.unregister();
