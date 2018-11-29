import React from 'react';
import './LongBio.css';
import { Link } from 'react-router-dom';

const LongBio = (props) => {
  const infoToDisplay = props.info.map(info => {
    return (
      <p className='longbio-text'>{info}</p>
    )
  })
  return (
    <div className='longbio-component'>
      <h2 className='longbio-name'>{props.name}</h2>
      <div className='longbio-card'> 
        <section className='image-contact-section'> 
          <img src={props.source} alt={props.lastName} className='short-bio-image'/>
          <p>Email: {props.email}</p>
          <p>Phone: {props.phone}</p>
        </section> 
        <div className='longbio-text-section'>
        {infoToDisplay}
        </div>
      </div>
        <Link to='/bios' className='group-link'> Back to Group </Link>
    </div>
  )
};

export default LongBio;