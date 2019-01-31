import React, { Component } from 'react';
// import TodoList from '../components/TodoList';
// import LevelFormTest from '../components/LevelFormTest';
// import LoginFormTest from '../components/loginFormTest';
// import NormalLogin from '../components/normalLogin';
import TreeTest from '../components/treeTest';


class App extends Component {

  constructor (props){
    super(props);
    this.state = {

    }
  }

  render () {
    return(
      <div>
        <span>111</span>
        {/* < TodoList />
        < LevelFormTest />
        < LoginFormTest />
        < NormalLogin /> */}
        <TreeTest />
      </div>
      
    )
  }
}

export default App;
