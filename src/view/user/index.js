import React, { Component } from 'react';
import { Avatar ,Row , Col } from 'antd';

import UserList from './replyList';

import axios from 'axios';

import { connect } from 'react-redux';

class User extends Component{

    constructor(...arg){
        super(...arg);
    }

    getData=(id)=>{
        let { dispatch } = this.props;
        dispatch({
            type:"USER_UPDATE"
        });

        axios.get(`https://cnodejs.org/api/v1/user/${id}`)        
            .then(( res )=>{
                console.log( res );
                dispatch({
                    type:"USER_UPDATE_SUCESS",
                    data:res.data.data
                });
                
            })
            .catch(( err )=>{
                dispatch({
                    type:"USER_UPDATE_ERR",
                    data:err
                });
                
            })
         
    }

    componentDidMount(){
        let id = this.props.match.params.id;
        this.getData( id );
    }
    
    render() {
        let { data , loading  } = this.props;
        console.log( loading  , "render" );

        return (
            <div className="wrap" >
                <Avatar
                    src={ data.avatar_url }
                    className="userAvatar"
                ></Avatar>
                <Row
                    className="userInfo"
                >
                    <Col span={8}> 用户名： <a> { data.loginname } </a></Col>
                    <Col span={8}> 积分： <a> { data.score } </a></Col>
                    <Col span={8}> 注册时间：<a> { data.create_at.split("T")[0] } </a></Col>
                </Row>

                <UserList 
                    loading={ loading }
                    data={ data.recent_replies } 
                    title="最近创建的话题"               
                />

                <UserList 
                    loading = { loading }
                    data = { data.recent_replies }
                    title="最近回复的话题"
                    
                />

            </div>
        );
    }
}

export default connect(state=>state.userReducer)(User);