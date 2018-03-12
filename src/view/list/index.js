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

    getData = ( tab )=>{         
        // let { tab } = this.props;         
        this.props.dispatch(( dispatch )=>{

            dispatch({
                type:"LIST_UPDATEING"
            });

            axios.get(`https://cnodejs.org/api/v1/topics?page=${ this.state.page }&tab=${ tab }&limit=15`)
            
            .then(( res )=>{
                dispatch({
                    type:"LIST_UPDATA_SUCESS",
                    data:res.data.data
                });
                
            })
            .catch(( err )=>{
                dispatch({
                    type:"LIST_UPDATA_ERR",
                    data:err
                });
                
            })

        });    
    }

    // 组件挂载完成之后调用
    componentDidMount(){
        console.log("组件挂载完成");
        this.getData( this.props.tab );
    }

    // 组件接收到新的props时调用，并将其作为参数nextProps使用，此时可以更改组件props及state。
    componentWillReceiveProps( nextProps ){
 
        console.log("组件接收到新的props");        
    }

    // 当函数返回false时候，阻止接下来的render()函数的调用，阻止组件重渲染，而返回 true 时，组件照常重渲染。
    shouldComponentUpdate( nextProps , nextState ){
        let isUpdate = ( nextProps.tab !== this.props.tab );
        isUpdate ? this.getData( nextProps.tab ) : null;                     
        return true
    }

    render(){
        let { data  , loading  } = this.props;
        console.log( "render" , this.props );
        
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