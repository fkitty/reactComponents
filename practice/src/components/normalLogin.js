import React, { PureComponent } from 'react';
import {
  Form,
  Input,
  Icon,
} from 'antd';
import 'antd/dist/antd.less';


@Form.create()


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

  componentDidMount () {
    
  }

  handleSubmit = (e) => {
    console.log(e, 'handleSubmit------e==========================')
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render () {
    const { getFieldDecorator } = this.props.form;
    
    return(
      
      <div>
        <Form layout = 'inline' onSubmit = {this.hanleSubmit}>
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default TodoList;
