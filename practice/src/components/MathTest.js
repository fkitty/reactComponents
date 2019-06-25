import React, { PureComponent } from 'react';
import {
  Button
} from 'antd';


// class组件
class MathTest extends PureComponent {


  static propType = {

  }
  state = {

  }
  constructor(props, context){
    super(props, context);
    this.state = {
      number: 0,
    }
  }

  handleAdd () {
    const { number } = this.state;
    this.setState({
      number: number + 2,
    });
  }
  handleMinus = () => {
    const { number } = this.state;
    this.setState({
      number: number - 2,
    })
  }

  render() {
    const { number } = this.state;
    return(
      <div>
        <span>{number}</span>
        <Button onClick={this.handleAdd.bind(this)} > + </Button>
        <Button onClick={this.handleMinus} > - </Button>
        {
          console.log(this.props)
        }
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default MathTest;