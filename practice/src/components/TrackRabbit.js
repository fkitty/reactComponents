import React, { PureComponent } from 'react';
import styles from './propsTest.less';

class TrackRabbit extends PureComponent {

  static propType = {
  }

  state = {
  }

  constructor(props, context) {
    let n = 0;
    super(props, context);
    this.state = {
      apple: '0',
      style: {
        transform: `translateX(${n}%)`
      },
    }

    // 设置一个定时器
    let timeId = setInterval(() => {
      n += 10;
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        },
      })
      // 取消一个定时器
      if (n >= 95){
        window.clearInterval(timeId);
        this.props.success();
      }
    }, 1000);

  
    
   
  }

  componentDidMount = () => {
    // this.rabbitRout();
  }

  render() {
    return (
      <div>
        <div className={styles.running} style={this.state.style}>rabbit</div>
        <div className={styles.track}></div>
      </div>
    )
  }
}

export default TrackRabbit;
