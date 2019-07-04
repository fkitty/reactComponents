import React, { PureComponent } from 'react';
class RabbitTime extends PureComponent {
  static propType = {

  }

  state = {

  }

  constructor (props, context){
    super(props, context);
    this.state = {

    }
  }

  render () {
    return(
      <div>
        <h2>rabbitTime</h2>
        <div>{this.props.rabbitTime}</div>
      </div>
    )
  }
}

export default RabbitTime;
