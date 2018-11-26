import React from 'react';
// import './ShortBioContainer.css';
// import { bioData } from '../../bioData.js';
import { Link } from 'react-router-dom';

const LongBio = (props) => {
  return (
    <div className='longbio-component'>
      <h2>{props.name}</h2>
      <img src={props.source} alt={props.lastName} className='short-bio-image'/>
      <p>{props.info}</p>
      <Link to='/bios'> Back to Group </Link>
    </div>
  )
};

export default LongBio;