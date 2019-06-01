import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { bioData } from '../../bioData.js';
import './App.css';
import Threat from '../Threat/Threat.js';
import Home from '../Home/Home.js';
import GroupInfo from '../GroupInfo/GroupInfo.js';
import ShortBioContainer from '../ShortBioContainer/ShortBioContainer.js';
import Products from '../Products/Products.js';
import LongBio from '../LongBio/LongBio.js';
import Contact from '../Contact/Contact.js';
import Testimonials from '../Testimonials/Testimonials.js';
import Publications from '../Publications/Publications.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isHidden: true,
      pageName: ''
    }
  }

  hideMenu = () => {
    this.setState({
      isHidden: true
    })
  }

  showMenu = () => {
    this.setState({
      isHidden: false
    })
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
          <div className='quint-logo'>
          <h1 className='header-title'>Quint Advisors</h1>
          <p className='header-subtitle'>A geopolitical, security and cyber risk advisory practice.</p>
          </div>
          <h2> </h2>
          <div className='header-menu'>
            <button 
              className='menu-button'
              onClick={() => this.toggleHidden()}
              onMouseEnter={() => this.showMenu()}
            >Menu</button>  
          </div> 
        </header>
        {!this.state.isHidden && <Menu toggleHidden={() => this.toggleHidden()} hideMenu={() => this.hideMenu()}/>}
        
        <Route exact path='/' component={Home} />
        <Route exact path='/threat' component={Threat} />
        <Route exact path='/whoweare' component={GroupInfo} />
        <Route exact path='/bios' component={ShortBioContainer} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/testimonials' component={Testimonials} />
        <Route exact path='/publications' component={Publications} />
        <Route path='/bios/:name' render={({ match }) => {
          let info = bioData.find(bio => {
            return bio.lastName === match.params.name; 
          });
          return <LongBio {...info} />;
        }} />
      </div>
    );
  }
}

const Menu = (props) => (      
  <span className="display-toggle" onClick={() => props.toggleHidden()} onMouseLeave={() => props.hideMenu()}>
    <div className="responsive-header-bar">
      <NavLink to='/' className="responsive-header-bar-nav-links" value='home' onClick={(event) => setPageName(event)}>Home</NavLink>
      <NavLink to='/threat' className="responsive-header-bar-nav-links"> <button value='threat' onClick={(event) => setPageName(event)}>The Threat</button></NavLink>
      <NavLink to='/whoweare' className="responsive-header-bar-nav-links" value='home' onClick={(event) => setPageName(event)}>Who We Are</NavLink>
      <NavLink to='/products' className="responsive-header-bar-nav-links">What We Offer</NavLink>
      <NavLink to='/bios' className="responsive-header-bar-nav-links">Individual Bios</NavLink>
      <NavLink to='/contact' className="responsive-header-bar-nav-links">Contact Us</NavLink>
      <NavLink to='/testimonials' className="responsive-header-bar-nav-links">Client Testimonials</NavLink>
      <NavLink to='/publications' className="responsive-header-bar-nav-links">Publications</NavLink>
    </div>
  </span>
)

const setPageName = (event) => {
  console.log(event)
}

export default App;
