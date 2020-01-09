import React, { Component } from 'react';
import Header from '../components/Header/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
      	<Header/>
      	<div className="component-container">
      		{ this.props.children }
      	</div>
      </div>
    );
  }
}

export default App;
