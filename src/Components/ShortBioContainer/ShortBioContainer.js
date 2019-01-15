import React from 'react';
import './ShortBioContainer.css';
import { bioData } from '../../bioData.js';
import { Link } from 'react-router-dom';

const ShortBioContainer = () => {
  const dataToDisplay = bioData.map((bio, index) => {
    return (
    <div className='short-bio' key={index}>
      <img 
        src={bio.source} 
        alt={bio.name} 
        className='short-bio-image'
      />
      <h4 className='bio-name'>{bio.name}</h4>
      <Link to={`/bios/${bio.lastName}`} className='bio-links'> View Full Bio </Link>
    </div>
    )  
  })
  return (
    <div className='shortbio-component'>
      <div className='shortbio-container'>
        {dataToDisplay}
      </div>
    </div>
  )
};

export default ShortBioContainer;