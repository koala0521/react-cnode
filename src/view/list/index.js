// import {  Link } from 'react-router-dom';
import React, { Component } from 'react';
import { List , Avatar } from 'antd';  //  List :antd 的列表组件  loading 布尔值  记录是否展示loading动画化组件 ; Avatar : 列表头像组件
import { Link } from 'react-router-dom';

// 列表假数据
import listData from '../../data';

// 
import Tag from '../txtTag';

export default class Item extends Component{

    render(){
        let {data} = listData;
        return (
            <List 
                loading={ false } 
                dataSource={ data }
                renderItem = { (item)=>(
                    <List.Item
                        key={ Math.random() }
                        actions={[
                            "回复" + item.reply_count , 
                            "访问" + item.visit_count
                        ]}
                    >
                    <List.Item.Meta
                        avatar={ <Avatar src={ item.author.avatar_url } />}
                        title={ 
                            <Link to={ "/details/" + item.id } >                                                      
                                <Tag  data={ item } />
                                { item.title  }
                            </Link>
                        }
                        description={ <p>      
                            <Link to={ "/user/" + item.author.loginname} >    
                                { item.author.loginname + " " }
                            </Link>       
                            发表于：{ item.create_at.split('T')[0] }     
                        </p> }
                    />

                    </List.Item>
                )}
            
            >
            </List>   
        )
    }
}