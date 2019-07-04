import React, { PureComponent } from 'react';
import styles from './propsTest.less';

class TrackRortoise extends PureComponent {
  static propType = {

  }

  state = {

  }

  constructor (props, context){
    let n = 0;
    super(props, context);
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }
    let timeId = setInterval(() => {
      n += 5;
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      // 跑到终点的时候取消定时器
      if(n >= 95){
        window.clearInterval(timeId);
        this.props.success();
      }
    }, 1000);
  }

  render () {
    return(
      <div>
        <div className={styles.running} style={this.state.style}>tortoise</div>
        <div className={styles.track}></div>
      </div>
    )
  }
}

export default TrackRortoise;
