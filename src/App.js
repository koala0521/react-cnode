import React, {
	Component
} from 'react';

import Routers from './router';

import Header from './view/header';
import Footer from './view/footer';

import "./view/index.css";

class App extends Component {
	render() {
		return( <div className = "pageWrap" >
			<Header></Header>
			<div className="main" >
				<Routers > </Routers> 
			</div>
			<Footer></Footer>
		</div>)
	}
}

export default App;
