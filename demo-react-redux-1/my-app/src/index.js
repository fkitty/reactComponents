import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const stateChanger = (state, action) => {
  if (typeof state === 'undefined') {
    return 0
  } else {
    if (action.type === 'add') {
      var newState = state + action.payload;
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

// 这样写是错的
// store.subscribe(render()) // 先执行render,把render的结果传给subscribe

// store.subscribe(render) //对的

function add3() {
  if( store.getState() % 2 === 1){
    store.dispatch({
      type: 'add',
      payload: 1,
    })
  }
}

function add4() {
  window.setTimeout(() => {
    store.dispatch({
      type: 'add',
      payload: 1,
    })
  }, 2000)
}

// function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
// }

serviceWorker.unregister();
