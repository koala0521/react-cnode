import React, { Component } from 'react';

import data from './data';

import Content from './content';

import ReplayList from './replayList';

export default class User extends Component{

    render() {
        console.log( data.data );
        return (
            <div className="wrap" >
                <Content data={ data.data } />

                <ReplayList 
                    loading={ false } 
                    replyCount={ data.data.reply_count } 
                    replies={ data.data.replies } 
                />
            </div>
        ); 
    }
}