import React from 'react';
import './Testimonials.css';
import { text } from './text.js';

const Testimonials = () => {
  const textToDisplay =
    text.map((testimonial, index) => {
      return (
        <div className='testimonial-card' key={index}>
          <p className='testimonial-text testimonial'>"{testimonial.testimonial}"</p>
          <p className='testimonial-text testimonial-source'> --{testimonial.source}</p>
        </div>
      )
    })

  return (
    <div className='testimonials-component'>
      {textToDisplay}
    </div>
  )
}

export default Testimonials;