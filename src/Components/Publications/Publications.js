import React from 'react';
import { NavLink } from 'react-router-dom';
import './Publications.css';
import publicationsData from './PublicationsData';

const Publications = () => {
  const cardsToDisplay = publicationsData.map((article, index) => {
    return (
      <div className='publication-card' key={index}>
        <NavLink className='publication-card-link' to={`publications/${article.id}`}>
          <h4 className='article-text'>{article.headline}</h4>
          <p className='article-text article-paragraphs'>
            <i className='article-paragraphs'>{article.subheader}</i>
          </p>
          <h6 className='article-text article-subheader'>
            {article.date}
          </h6>
          <p className='article-text article-paragraphs'>
            {article.excerpt}
          </p>
          <h6 className='article-text article-subheader'>
            {article.author}
          </h6>
        </NavLink>
      </div>   
    )
  })
  return (
    <div className='publications-component'>
      <h1 className='publications-component-header'>Latest Publications:</h1>
      <div className='publication-cards-container'>
        {cardsToDisplay}
      </div>
      <hr className='full-width-hr'></hr>
      <div className='cipher-links-container'>
        <a
          href='https://www.thecipherbrief.com/experts/rob-dannenberg'
          target='_blank'
          rel='noopener noreferrer'
          className='cipher-links'
        >
          Rob Dannenberg- Cipher Brief Publications
        </a>
        <a
          href='https://www.thecipherbrief.com/experts/michael-sulick'
          target='_blank'
          rel='noopener noreferrer'
          className='cipher-links'
        >
          Mike Sulick- Cipher Brief Publications
        </a>
        <a
          href='https://www.thecipherbrief.com/experts/paul-kolbe'
          target='_blank'
          rel='noopener noreferrer'
          className='cipher-links'
        >
          Paul Kolbe- Cipher Brief Publications
        </a>
      </div>
    </div>
  )
}

export default Publications;