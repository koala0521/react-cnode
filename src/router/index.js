import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Indexview from "../view/index";
import Bookview from "../view/book";
import Detailsview from "../view/details";
import Userview from "../view/user";
import Aboutview from "../view/about";

export default class RouterIndx extends Component {
	render() {
		return (
			<Switch>
				<Route 
					exact
					path="/" 
					render={() => <Redirect to="/index/all" /> }  
				>
				</Route>
				<Route path="/index/:id" exact component={ Indexview } />
				<Route path="/book" exact component={ Bookview } />
				<Route path="/details" exact component={ Detailsview } />
                <Route path="/user/:id" component={Userview}/>
                <Route path="/details/:id" component={Aboutview}/>
			</Switch>
		)
	}
}