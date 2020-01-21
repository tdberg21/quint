import React from 'react';
import { Link } from 'react-router-dom';
import { bioData } from '../../bioData';
import './Contact.css';

const Contact = () => {
  const infoToDisplay = bioData.map((bio, index) => {
    return (
      <div className='contact-card' key={index}>
        <h4 className='contact-name'>{bio.name}</h4>
        <p className='contact-text'>{bio.phone}</p>
        <p className='contact-text'>{bio.email}</p>
      </div>
    )
  })
  return (
    <div className="contact-component">
      {/* <p> */}
      <Link to="/inquery" className="group-link">
        Inquire
      </Link>
      {/* </p> */}
      <div className="contact-card-container">{infoToDisplay}</div>
    </div>
  );
}

export default Contact;