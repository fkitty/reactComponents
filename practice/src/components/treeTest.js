import React, { PureComponent } from 'react';
import {
  Menu,
  Icon,
  Input,
} from 'antd';
import 'antd/dist/antd.less';
import styles from './treeTest.less';

const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class TodoList extends PureComponent {
  constructor (props, context){
    super(props, context);
    this.state = {
      connectName: '',
      treeFlag: false,
    }
  }

  componentDidMount () {
    
  }

  handleClick = (e) => {
    console.log('click ', e);
  }

  handleAdd = () => {
    console.log('add==============');
  }

  handConnect = (e) => {
    this.setState({
      connectName: e.target.value,
    })
  }

  handleConnectClose = () => {
    console.log('点击了关闭');
  }

  handleConnectSave = () => {
    console.log('点击了保存');
    if(this.state.connectName.length > 0){
      this.setState({
        treeFlag: true,
      })
    }
  }

  handleAddPar = () => {
    this.setState({
      addFlag: true,
    });
  }

  
  render () {
    const { connectName, treeFlag } = this.state;
    return(
      <div>
        {
          treeFlag === false ?
          (
            <div>
              <Input
                value={connectName}
                onChange={this.handConnect}
                style={{ width: 200, marginLeft: '20px' }}
              />
              <Icon type="close" className={styles.closeIcon} onClick={this.handleConnectClose} />
              <Icon type="check" className={styles.saveIcon} onClick={this.handleConnectSave} />
            </div>
          ) : 
          (
            <Menu
              onClick={this.handleClick}
              style={{ width: 256, borderRight: 'none' }}
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
            >
              <SubMenu key="sub1"
                className={styles.treeNode}
                title={
                  <span>
                    {this.state.connectName}
                    <span><Icon onClick = {this.handleAddPar} type="plus" /></span>
                    <span><Icon type="delete" /></span>
                  </span> 
                }
              >
                <Menu.Item key="2">增加一个输入框</Menu.Item>
                <Input />
                <SubMenu
                  key="sub2-1"
                  title={
                    <span>
                      湖北省
                      <span><Icon type="plus" /></span>
                      <span><Icon type="delete" /></span>
                    </span>
                  }>

                  <Menu.Item key="2">黄石市</Menu.Item>
                  <SubMenu
                    key="sub3-1"
                    title={
                      <span>
                        武汉市
                        <span><Icon type="plus" /></span>
                        <span><Icon type="delete" /></span>
                      </span>
                    }>
                    <Menu.Item key="2">江夏区</Menu.Item>
                    <Menu.Item key="2">武昌区</Menu.Item>
                    <Menu.Item key="2">汉口区</Menu.Item>
                  </SubMenu>
                  {/* </MenuItemGroup> */}
                </SubMenu>
                <SubMenu
                  key="sub2-2"
                  title={
                    <span>
                      湖南省
                      <span><Icon type="plus" /></span>
                      <span><Icon type="delete" /></span>
                    </span>
                  }>
                  <Menu.Item key="3">长沙市</Menu.Item>
                  <Menu.Item key="4">株洲市</Menu.Item>
                </SubMenu>  
              </SubMenu>
            </Menu>
          )

        }  
      </div>
    )
  }
}

export default TodoList;
