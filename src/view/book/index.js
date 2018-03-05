import React, { Component } from 'react';

import data from './data';

import PublicCard from '../publicCard';

export default class User extends Component{
    
    render() {
        return (
            <div>
                <PublicCard data={ data } />
            </div>
        );
    }
}