import React, { Component } from 'react';
import Nav from './nav/navModule';
import './css/materialize.css'
import './css/style.css'

//outputs nav on every page then calls correct component
//don't change anything here!
class App extends Component {
   render() {
      return (
         <div className="App">
            <Nav/>
           {this.props.children}
         </div>
      )
   }
}

export default App;
