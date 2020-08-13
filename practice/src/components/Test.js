import styles from './Test.less';
import React, { PureComponent } from 'react';

var money = {
  amount: 1000,
}

var user = {
  id: '123123',
  nickName: '土豪',
}

var fnLists = {};
var evnetHub = {
  trigger(eventName, data){
    // 用户说了我要用钱 要把fnList中的所有函数都要调一遍\
    let fnList = fnLists[eventName];
    if(!fnList){return}
    for(let i = 0; i < fnList.length; i++){
      fnList[i](data);
    }

  }, // 发布 事件名称和数据
  on(eventName, fn){
    // 其实不会调用和这个函数，是把函数放到一个数组中
    if(!fnLists[eventName]){
      fnLists[eventName] = [];
    }
    fnLists[eventName].push(fn);
  }, // 订阅 接受一个时间名称和函数 事件爆发之后就会调用这个函数
}

// 当在执行这句代码的时候，是把fn1放到fnList中
evnetHub.on('我要用钱', function fn1(){})
evnetHub.trigger('我要用钱', 100)

// button.on('click', function(data){ data === 'x'}) // 订阅
// // 可以在任何地方去发布这个事件
// button.trigger('click', 'x') // 发布    click叫事件名称

// 创造一个管家
var test = {
  init(){ // 初始化方法，监听eventHub 看谁想花钱，只要监听到这个方法就去执行它的函数
    evnetHub.on('我想花钱', function(data){ // subscribe(订阅)
      console.log(money, 'data====');
      money.amount -= data; // reducer:对数据的变动
      // 之后重新render
      // render();
      // ReactDOM.render(<App />, )
    })
  }
}
test.init();


class BigPapa extends PureComponent{
  static propType = {

  }

  state = {

  }

  constructor (props, context){
    super(props, context);
    this.state = {
      money: money,
    }
  }

  render(){
    return(
      <div className={styles.papa}>大爸{this.props.money.amount}
        <Son1 money={this.props.money}/>
        <Son2 money={this.props.money}/>
      </div>
    )
  }
}

class YoungPapa extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      // money: money,
    }
  }

  render(){
    return(
      <div className={styles.papa}>二爸{this.props.money.amount}
        <Son3 money={this.props.money}/>
        <Son4 money={this.props.money}/>
      </div>
    )
  }
}

class Son1 extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      // money: money,
    }
  }

  render(){
    return(
      <div className={styles.son}>
        儿子1{this.props.money.amount}
      </div>
    )
  }
}

class Son2 extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      // money: money,
    }
  }

  x = () => {
    // money.amount -= 100;
    // action  100叫荷载
    evnetHub.trigger('我想花钱',/* action type */ 100 /* payload*/);
  }

  render(){
    // console.log(this.state.money, 'render====');
    return(
      <div className={styles.son}>
        儿子2{this.props.money.amount}
        <button onClick={() => this.x()}>消费</button>
      </div>
    )
  }
}

class Son3 extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      // money: money,
    }

    evnetHub.on('我花钱了', (data) => {
      console.log(data); // 这个data就是那个100
      this.setState({
        money: {...money},
      })
    });
  }

  render(){
    console.log('render=====');
    return(
      <div className={styles.son}>
        儿子3{this.props.money.amount}
      </div>
    )
  }
  
}

class Son4 extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      // money: money,
    }
  }

  render(){
    return(
      <div className={styles.son}>
        儿子4{this.props.money.amount}
      </div>
    )
  }
}

export {BigPapa, YoungPapa};
// export {All};