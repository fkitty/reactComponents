import React, { PureComponent } from 'react';
import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd';
import 'antd/dist/antd.less';



function hasErrors(fieldsError) {
  console.log(Object.keys(fieldsError).some(field => fieldsError[field]));
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

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
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
    console.log(this.props.form);
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
    // isFieldTouched-判断一个输入控件是否经历过 getFieldDecorator 的值收集时机 options.trigger
    // getFieldError-获取某个输入控件的 Error
    // getFieldDecorator-用于和表单进行双向绑定
    // 水平排列的表单（默认）
    const {
      getFieldDecorator, getFieldError, isFieldTouched, getFieldsError
    } = this.props.form;
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return(
      
      <div>
        <Form layout = 'inline' onSubmit = {this.hanleSubmit}>
          <Form.Item
            validateStatus = {userNameError ? 'error' : ''} // 校验状态
            help = {userNameError || ''} // 提示信息
          >
            {/* prefix-带有前缀图标的input */}
            {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>
          <Form.Item
            validateStatus = {passwordError ? 'error' : ''}
            help = {passwordError || ''}
          >
            {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your password'}],
            })(
              <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type = 'primary'
              htmlType = 'submit' // 设置button的原生type值
              disabled={hasErrors(getFieldsError())} // 按钮的失效状态
            >
              Login in
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default TodoList;
