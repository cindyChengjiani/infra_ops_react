/**
 * @Author: CJN
 * @Date: 2018/7/31
 * @Description: *
 */
import React, {Component} from 'react';
import {Layout, Menu, Icon, Badge} from 'antd';
import 'antd/dist/antd.css';

import {withRouter} from "react-router-dom";
import Avatar from "antd/es/avatar";

const {Header, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;


class Main extends Component {

    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };


    render() {
        return (
            <Layout style={{height: '100%', position: 'absolute', width: '100%'}}>

                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <SubMenu key="sub1" title={<span><Icon type="mail"/><span>资产备品备件管理</span></span>}>
                            <Menu.Item key="1">备品备件</Menu.Item>
                            <Menu.Item key="2">资产清册</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0, height: 50, boxShadow: '1px 1px 16px 0px #cacaca'}}>
                        <div>
                            <Icon
                                className="trigger header-icon"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                            />

                            <Avatar size="large" icon="user" style={{float: 'right', margin: '5px 10px'}}/>
                            <span style={{float: 'right', margin: '0px 15px', lineHeight: '50px'}}>
                              <Badge count={1}><Icon className="fa-lg" type="bell"/></Badge>
                            </span>
                        </div>
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff'}}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(Main);