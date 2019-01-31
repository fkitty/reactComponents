import React, { PureComponent } from 'react';
import {
  Form,
  Input,
  Icon,
  Checkbox,
  Button,
} from 'antd';
import 'antd/dist/antd.less';
import styles from './loginFormTest.less'


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
    console.log(e);
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values); // 拿到输入框的值 发请求时传参
      }
    });
  }

  render () {
    const {getFieldDecorator} = this.props.form;
    return(
      
      <div>
        <Form onSubmit={this.handleSubmit}  className={styles.loginForm} >
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your password!' }],
            })(
              <Input type='password' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
            )}
          </Form.Item>

          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked', // 子节点的值的属性
              initialValue: true, // 验证使用 === 判断是否变化
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a  className={styles.loginFormForgot}  href="">Forgot password</a>

            <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>


        </Form>  
      </div>
    )
  }
}

export default TodoList;
