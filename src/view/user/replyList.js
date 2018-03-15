import React, { Component } from 'react';
import { Avatar ,List ,Card } from 'antd';
import { Link } from "react-router-dom";
// import data from '../about/data';

export default class ReplyList extends Component{

    render() {
        let { loading , title, data } = this.props;
      return (
        <Card
            loading={ loading }        
            title={ title }
        >
            <List
                className="userList"
                dataSource={ data }
                renderItem={ item=>( 
                    <List.Item>                                  
                        <Avatar src={ item.author.author_url } />                   
                        <Link to={"/user/" + item.author.loginname } >{ item.author.loginname }</Link>   
                        <h4>
                            <Link to={"/details/" + item.id} className = "userName" > { item.title } </Link>    
                        </h4>
                        <span> 最后回复时间:{ item.last_reply_at.split("T")[0] } </span>   
                    </List.Item>                    
                )}
            >


            </List>
        </Card>
      )
    }

}