import React, { Component } from 'react';
import './App.css';
import {
  connect,
} from 'react-redux';

class App extends Component{
  render(){
    return (
      <div className="App">
        你点击了<span id="value">{this.props.n}</span>次
          <div>
            <button id="add1" onClick={this.props.add1}>+1</button>
            <button id="add2" >+2</button>
            <button id="add1IfOdd" >如果是单数就+1</button>
            <button id="add1After2Sec" >两秒钟后+1</button>

            {/* <Child1 store={this.props.store}/> */}
          </div>
      </div>
    );
  }
}

// x是一个函数，返回一个对象
// 从state中拿出一部分状态
// 旧的state, 返回：从state中拿出什么值
// x是把state的东西拿出来，放到this的props上
function mapStateToProps(state){ // 获取部分store
  return {
    n: state.n,
  }
}

// 生产一个action  不是函数，是一个对象
// function y(){
//   return{
//     add1: () => {
//       return{
//         type: 'add',
//         payload: 1,
//       }
//     }
//   }
// }

// const actionCreator = { // 需要生成哪些action
//   add1: () => {
//     return{
//       type: 'add',
//       payload: 1,
//     }
//   }
// }

// 把对象改成函数
function mapDispatchToprops(dispatch){
  return{
    add1: () => dispatch({
      type: 'add',
      payload: 1,
    })
  }
}

// connect(x)(App); // 第一个参数，第二个参数
export default connect(mapStateToProps, mapDispatchToprops)(App);