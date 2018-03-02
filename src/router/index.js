import React, { Component } from 'react';
import {Route , Switch} from 'react-router-dom';
import  Indexview from "../view/index";
import  Bookview from "../view/book";
import  Detailsview from "../view/details";
import  Userview from "../view/user";
import  Aboutview from "../view/about";

export default class RouterIndx extends Component{
    render() {
      return (
        <Switch>
            <Route path="/" exact render={ ()=><Indexview /> }  ></Route>
            <Route path="/book" exact render={ ()=><Bookview /> }  ></Route>
            <Route path="/details" exact render={ ()=><Detailsview /> }  ></Route>
            <Route path="/user" exact render={ ()=><Userview /> }  ></Route>
            <Route path="/about" exact render={ ()=><Aboutview /> }  ></Route>
        </Switch>
      )
    }
}