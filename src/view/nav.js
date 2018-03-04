import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu , Icon } from 'antd';

export default class Nav extends Component{
    
    render() {
      let { mode , id } = this.props;
      return (
        <div>
            <Menu mode={ mode } id={ id } >
                <Menu.Item>
                <Link to="/" > <Icon type="home" />首页 </Link>
                </Menu.Item>
                <Menu.Item>
                    
                    <Link to="/book" > <Icon type="book" /> 教程 </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/about" > <Icon type="smile" /> 关于 </Link>                               
                </Menu.Item>
            </Menu>
        </div>
      )
    }
} 
