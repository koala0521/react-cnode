import {  Link } from 'react-router-dom';
import { Menu  } from 'antd';
import React, { Component } from 'react';
import { withRouter } from 'react-router';
// 菜单配置数据
import tab from '../tab';

class LeftMenu extends Component{

    constructor(...arg){
        super(...arg);
        this.state={
            activeKey:"all"
        }
    }

    getActiveKey=( arg )=>{
        let activeKey = arg.pathname.split("/")[2];  
        return activeKey
    }

    shouldComponentUpdate( nextProps ){
        let nextActiveKey = this.getActiveKey( nextProps.location ); 
        
        if( nextActiveKey != this.state.activeKey ){
            this.setState({
                activeKey:nextActiveKey
            });
            return false
        }
        return true;
    }

    render() {
        let { mode , id } = this.props;
        return (
            <Menu id={ id }  mode={ mode } selectedKeys={ [this.state.activeKey] } >
               
                {
                    tab.map(item=>{
                        if( !item.isIndex ) return false;
                        return (
                            <Menu.Item key={item.tab} >
                                <Link to={"/index/" + item.tab } > {item.txt} </Link>
                            </Menu.Item>
                        )
                    })
                }                                                 
            </Menu>
        );
    }
}

export default withRouter((arg)=>{
    let { id , mode , location } = arg;
    return (
        <LeftMenu
            id={ id }
            mode={ mode }
            location={ location }
        />
    )
});
