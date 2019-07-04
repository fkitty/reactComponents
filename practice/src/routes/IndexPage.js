import React, { Component } from 'react';
import { Divider } from 'antd';
import TodoList from '../components/TodoList';
import LevelFormTest from '../components/LevelFormTest';
import LoginFormTest from '../components/loginFormTest';
import NormalLogin from '../components/normalLogin';
import TreeTest from '../components/treeTest';
import MathTest from '../components/MathTest';
import MathFunctionTest from '../components/MathFuctionTest';
import RabbitTime from '../components/RabbitTime';
import TortoiseTime from '../components/TortoiseTime';
import Judge from '../components/Judge';
import styles from './IndexPage.css';
import TrackRabbit from '../components/TrackRabbit';
import TrackRortoise from '../components/TrackTortoise';


class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      number: 0,
      t0: new Date(),
      rabbitTime: 0,
      tortoiseTime: 0,
    }
  }

  handleAdd = () => {
    this.setState({
      number: this.state.number + 1,
    });
  }


 
  success1 = () => {
    const { t0 } = this.state;
    console.log(new Date() - t0);
    this.setState({
      rabbitTime: new Date() - t0,
    });
    // 先设置一个初始时间，用结束时的时间减去初始时间就是所用时间
  }

  success2 = () => {
    const { t0 } = this.state;
    console.log(new Date() - t0);
    this.setState({
      tortoiseTime: new Date() - t0,
    });
  }

  render () {

    const func = {
      number: this.state.number,
      handleAdd: this.handleAdd,
    }

    return(
      <div  style={{width: '100%', paddingLeft: 30, paddingBottom: 100}}>
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
        <div>
          <Divider orientation="left">组件8</Divider>
          <div className={styles.running}>
            <RabbitTime rabbitTime={this.state.rabbitTime} />
            <Judge />
            <TortoiseTime tortoiseTime={this.state.tortoiseTime} />
          </div>
          <div style={{marginTop: 20, padding: '0 25px'}}>
            <div style={{paddingBottom: 10}}>
              <TrackRabbit success={this.success1} />
            </div>
              <TrackRortoise success={this.success2} />
          </div>
        </div>
      </div>
      
    )
  }
}

export default App;
