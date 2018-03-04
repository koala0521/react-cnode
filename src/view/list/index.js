// import {  Link } from 'react-router-dom';
import React, { Component } from 'react';
import { List } from 'antd';  // antd 的列表组件  loading 布尔值  记录是否展示loading动画化组件

// 列表假数据
import listData from '../../data';

export default class Item extends Component{

    render(){
        let {data} = listData;
        console.log( data );
        return (
            <List 
                loading={ false } 
                dataSource={ data }
                renderItem = { (item)=>(<List.Item>

                </List.Item>)}
            
            >
            </List>   
        )
    }
}