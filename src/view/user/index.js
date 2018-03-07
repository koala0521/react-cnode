import React, { Component } from 'react';
import { Avatar ,Row , Col } from 'antd';

import UserList from './replyList';

import data from './data';

export default class User extends Component{

    render() {

        let { avatar_url , loginname , create_at , score  } = data.data;
        return (
            <div className="wrap" >
                <Avatar
                    src={ data.data.avatar_url }
                    className="userAvatar"
                ></Avatar>
                <Row
                    className="userInfo"
                >
                    <Col span={8}> 用户名： <a> { loginname } </a></Col>
                    <Col span={8}> 积分： <a> {score } </a></Col>
                    <Col span={8}> 注册时间：<a> { create_at.split("T")[0] } </a></Col>
                </Row>

                <UserList 
                    loading={ false }
                    data={ data.data.recent_replies } 
                    title="最近创建的话题"
                
                />

                <UserList 
                    loading = { false }
                    data = { data.data.recent_replies }
                    title="最近回复的话题"
                    
                />

            </div>
        );
    }
}