import React, { Component } from 'react';
import {
	HashRouter,
	Route
} from 'react-router-dom';

//components
import UISidebar from './components/sidebarComponent/UISidebar';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import CV from './components/pages/CV';
import Contact from './components/pages/Contact';

//includes
import'./Assets/css/default.min.css';

class App extends Component {

  render() {
    return (
      <HashRouter>
      	<div className="App">
	      	<UISidebar>
	            <Route exact path = '/' component = {Homepage}/>
		      	  <Route exact path = '/About' component = {About}/>
	          	<Route exact path = '/Projects' component = {Projects}/>
              <Route exact path = '/CV' component = {CV}/>
              <Route exact path = '/Contact' component = {Contact}/>
	       	</UISidebar>   
      	</div>
      </HashRouter>
    );
  }
}

export default App;
