import React, { Component } from 'react';

import Content from './content';

import ReplayList from './replayList';

import axios from 'axios';

import { connect } from 'react-redux';
import { log } from 'core-js';


class Details extends Component{
    constructor(...arg){
        super(...arg);
    }

    getData=(id)=>{
        let { dispatch } = this.props;
        dispatch({
            type:"DETAIL_UPDATA"
        });

        axios.get(`https://cnodejs.org/api/v1/topic/${ id }`)        
            .then(( res )=>{
                dispatch({
                    type:"DETAIL_UPDATA_SUCESS",
                    data:res.data.data
                });
                
            })
            .catch(( err )=>{
                dispatch({
                    type:"DETAIL_UPDATA_ERR",
                    data:err
                });
                
            })
         
    }

    componentDidMount(){
        this.getData(this.props.match.params.id);
        
        console.log( this.props , "componentDidMount" );
    }

    render() {        

        let { data , reply_count , replies , loading } = this.props;
        
        console.log( this.props , "render" );

        return (
            <div className="wrap" >
                <Content data={ data } loading />

                <ReplayList 
                    loading={ loading } 
                    replyCount={ reply_count} 
                    replies={ replies } 
                />
            </div>
        ); 
    }
}

export default connect( store=>store.detailsReducer )( Details );