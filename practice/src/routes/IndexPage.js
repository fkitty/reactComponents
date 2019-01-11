import React, { Component } from 'react';
import TodoList from '../components/TodoList'

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
        < TodoList />
      </div>
      
    )
  }
}

export default App;
