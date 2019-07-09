import React, { PureComponent } from 'react';
import styles from './propsTest.less';
import TrackRabbit from './TrackRabbit';
import TrackRortoise from './TrackTortoise';

class Play extends PureComponent {
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
      <div className={styles.playground}>
        <div style={{paddingBottom: 10}}>
          <TrackRabbit success={this.props.success1} />
        </div>
        <TrackRortoise success={this.props.success2} />
      </div>
    )
  }
}

export default Play;
