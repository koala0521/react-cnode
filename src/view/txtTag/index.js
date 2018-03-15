import React, { Component } from 'react';
import { Tag } from 'antd';
import tab from '../tab';

function getTab( data ) {
    let type =  data.top ? "top": data.good ? "good" :  data.tab;
    console.log( type );
   return tab.find( item=> item.tab === type );
}

export default class TxtTag extends Component{

    render(){
        let { data } = this.props;
        let { color , txt } = getTab( data ) || {"color":"green",txt:"测试"};
        
        return (
            <Tag color={ color }> { txt} </Tag>    
        )
    }
}
