import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Threat from '../Threat/Threat.js';
import Home from '../Home/Home.js';


class App extends Component {
  constructor() {
    super();

    this.state = {
      isHidden: true
    }
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h2>Quintet, LLC</h2>
          <div className='header-menu'>
            <button 
              className='menu-button'
              onClick={() => this.toggleHidden()}
            >Menu</button>  
          </div> 
        </header>
        {!this.state.isHidden && <Menu toggleHidden={() => this.toggleHidden()}/>}
        
        <Route exact path='/' component={Home} />
        <Route exact path='/threat' component={Threat} />
      </div>
    );
  }
}

const Menu = (props) => (
  <span className="display-toggle" onClick={() => props.toggleHidden()}>
    <div className="responsive-header-bar">
      <NavLink to='/' className="responsive-header-bar-nav-links">Home</NavLink>
      <NavLink to='/threat' className="responsive-header-bar-nav-links">The Threat</NavLink>
      <NavLink to='/whoweare' className="responsive-header-bar-nav-links">Who We Are</NavLink>
      <NavLink to='/products' className="responsive-header-bar-nav-links">What We Offer</NavLink>
      <NavLink to='/contact' className="responsive-header-bar-nav-links">Contact Us</NavLink>
    </div>
  </span>
)

export default App;
