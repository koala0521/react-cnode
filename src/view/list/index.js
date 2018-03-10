// import {  Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List , Avatar } from 'antd';  //  List :antd 的列表组件  loading 布尔值  记录是否展示loading动画化组件 ; Avatar : 列表头像组件
import { Link } from 'react-router-dom';

// 列表假数据
import listData from '../../data';
// 标签组件
import Tag from '../txtTag';

import axios from 'axios';

class Item extends Component{

    constructor(...arg){
        super(...arg);
        this.state={
            page:1 
        };
    }

    getData = ()=>{         
        let { tab } = this.props; 

        this.props.dispatch(( dispatch )=>{

            axios.get(`https://cnodejs.org/api/v1/topics?page=${ this.state.page }&tab=${ tab }&limit=15`)
            
            .then(( res )=>{
                console.log( '##################1111' , res.data );
                dispatch({
                    type:"",
                    data:res.data.data,
                    loading:false
                });
                
            })
            .catch(( err )=>{
                console.log( err );
                
            })

        });    
    }

    componentDidMount(){

        this.getData();
    }

    render(){
        let { data  , loading  } = this.props;
        
        console.log(  '##################2222' , data , loading );  
        
        return (
            <List 
                loading={ loading } 
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

export default connect( state=>state.indexReducer )( Item );