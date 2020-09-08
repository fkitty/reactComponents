import React, { Component } from 'react';
import './App.css';

class App extends Component{

  add1(){
    // store.dispatch({
    // })
    // console.log(this.props.onAdd1, '9999');
    // this.props.onAdd1();
    const { store } = this.props;
    store.dispatch({
      type: 'add',
      payload: 1,
    })
  }
  add2(){
    this.props.onAdd2();
  }
  add3(){
    this.props.onAdd3();
  }
  add4(){
    this.props.onAdd4();
  }
  render(){
    return (
      <div className="App">
        你点击了<span id="value">{this.props.value}</span>次
          <div>
            <button id="add1" onClick={() => this.add1()}>+1</button>
            <button id="add2" onClick={() => this.add2()}>+2</button>
            <button id="add1IfOdd" onClick={() => this.add3()}>如果是单数就+1</button>
            <button id="add1After2Sec" onClick={() => this.add4()}>两秒钟后+1</button>

            {/* <Child1 store={this.props.store}/> */}
          </div>
      </div>
    );
  }
}

export default App;
