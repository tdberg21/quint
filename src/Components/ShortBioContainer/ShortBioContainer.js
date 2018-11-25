import React from 'react';
// import './ShortBioContainer.css';
import { bioData } from '../../bioData.js';

const ShortBioContainer = () => {
  console.log(bioData);
  const dataToDisplay = bioData.map(bio => {
    return (
    <div className='short-bio'>
      <h4>{bio.name}</h4>
      <button className='full-bio-button'>Click to View Full Bio</button>
    </div>
    )  
  })
  return (
    <div className='shortbio-container'>
      {dataToDisplay}
    </div>
  )
};

export default ShortBioContainer;