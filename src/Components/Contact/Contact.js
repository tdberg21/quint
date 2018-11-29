import React from 'react';
import { bioData } from '../../bioData.js';
import './Contact.css';

const Contact = () => {
  const infoToDisplay = bioData.map((bio, index) => {
    return (
      <div className='contact-card' key={index}>
        <h4 className='contact-name'>{bio.name}</h4>
        <p className='contact-text'>Phone: {bio.phone}</p>
        <p className='contact-text'>Email: {bio.email}</p>
      </div>
    )
  })
  return (
    <div className='contact-component'>
      {infoToDisplay}
    </div>
  )
}

export default Contact;