import React from 'react';

const SinglePublication = ({ headline, subheader, date,paragraphs }) => {
  const paragraphsToDisplay = paragraphs.map((paragraph, index) => (
    <div>
      <p 
        className='article-text article-paragraphs' 
        key={index}>
        {paragraph}
      </p>
    </div>
  ))
  return (
    <div>
      <h4 className='article-text'>{headline}</h4>
      <h6 className='article-text article-subheader'><i>{subheader}</i></h6>
      <p><b>{date}</b></p>
      {paragraphsToDisplay}
    </div>
  );
};

export default SinglePublication;