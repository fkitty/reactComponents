import React, { PureComponent } from 'react';
class TortoiseTime extends PureComponent {
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
        <h2>tortoiseTime</h2>
        <div>{this.props.tortoiseTime}</div>
      </div>
    )
  }
}

export default TortoiseTime;
