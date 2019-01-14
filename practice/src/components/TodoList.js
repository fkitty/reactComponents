import React, { PureComponent } from 'react';
import styles from './TodoList.less';

class TodoList extends PureComponent {
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
      <div className={styles.container}>
        {/* 头部的输入框和添加按钮 */}
        <div>
          <input
            
          />
          <button>添加</button>
        </div>
      </div>
    )
  }
}

export default TodoList;
