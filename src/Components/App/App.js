import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

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
        {!this.state.isHidden && <Menu />}
        <section className='app-body'>
        </section>
      </div>
    );
  }
}

const Menu = () => (
  <span className="display-toggle">
    <div className="responsive-header-bar">
      <NavLink to='/threat' className="responsive-header-bar-nav-links">The Threat</NavLink>
      <NavLink to='/whoweare' className="responsive-header-bar-nav-links">Who We Are</NavLink>
      <NavLink to='/products' className="responsive-header-bar-nav-links">What We Offer</NavLink>
    </div>
  </span>
)

export default App;
