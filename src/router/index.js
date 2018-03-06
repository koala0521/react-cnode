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
				<Route path="/index/:id" component={ Indexview } />
				<Route path="/book"  component={ Bookview } />
				<Route path="/details/:id" component={ Detailsview } />
                <Route path="/user/:id" component={Userview}/>
				<Route path="/about" component={Aboutview}/>
				
			</Switch>
		)
	}
}