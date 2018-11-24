import React, { Component } from 'react';
import './App.css';

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
      <a href="google.com" target="_blank" className="responsive-header-bar-nav-links">Navigation Link 1</a>
      <a href="google.com" target="_blank" className="responsive-header-bar-nav-links">Navigation Link 2</a>
      <a href="google.com" target="_blank" className="responsive-header-bar-nav-links">Navigation Link 3</a>
    </div>
  </span>
)

export default App;
