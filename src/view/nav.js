import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Menu , Icon } from 'antd';

class Nav extends Component{

    constructor(...arg){
        super(...arg);

        this.state={
            activeKey:this.getActiveKey(this.props.location)
        }
    }

    getActiveKey=( arg )=>{
        let activeKey = arg.pathname.split("/")[1];  
        return activeKey
    }
    
    shouldComponentUpdate( nextProps ){
        let nextActiveKey = this.getActiveKey( nextProps.location ); 
        
        if( nextActiveKey !== this.state.activeKey ){
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
        <div>
            <Menu mode={ mode } id={ id } selectedKeys={ [this.state.activeKey] } >
                <Menu.Item key="index" >
                <Link to="/index/all" > <Icon type="home" />首页 </Link>
                </Menu.Item>

                <Menu.Item  key="book" >                    
                    <Link to="/book" > <Icon type="book" /> 教程 </Link>
                </Menu.Item>
                
                <Menu.Item  key="about" >
                    <Link to="/about" > <Icon type="smile" /> 关于 </Link>                               
                </Menu.Item>
            </Menu>
        </div>
      )
    }
} 

export default withRouter((args)=>{
    let {mode , id , location } = args;
    
    return (<Nav mode={ mode } id={ id } location={ location } />)
});
