import React, { Component } from 'react';

import data from './data';

import PublicCard from '../publicCard';

export default class Card extends Component{

    render() {         
        return (
            <PublicCard data={ data } />
        );
    }
}