import React, { Component } from 'react';
import { Divider } from 'antd';
import TodoList from '../components/TodoList';
import LevelFormTest from '../components/LevelFormTest';
import LoginFormTest from '../components/loginFormTest';
import NormalLogin from '../components/normalLogin';
import TreeTest from '../components/treeTest';
import MathTest from '../components/MathTest';
import MathFunctionTest from '../components/MathFuctionTest';
class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      number: 0,
    }
  }

  handleAdd = () => {
    this.setState({
      number: this.state.number + 1,
    });
  }

  render () {

    const func = {
      number: this.state.number,
      handleAdd: this.handleAdd,
    }

    return(
      <div  style={{width: '100%', paddingLeft: 30}}>
        <div>
          <Divider orientation="left">组件1</Divider>
          <TodoList />
        </div>
        <div>
          <Divider orientation="left">组件2</Divider>
          <LevelFormTest />
        </div>
        <div>
          <Divider orientation="left">组件3</Divider>
          <LoginFormTest />
        </div>
        <div>
          <Divider orientation="left">组件4</Divider>
          <NormalLogin />
        </div>
        <div>
          <Divider orientation="left">组件5</Divider>
          <TreeTest />
        </div>
        <div>
          <Divider orientation="left">组件6</Divider>
          <MathTest name='myMath'/>
        </div>
        <div>
          <Divider orientation="left">组件7</Divider>
          <MathFunctionTest {...func}/>
        </div>
      </div>
      
    )
  }
}

export default App;
