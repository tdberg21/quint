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
    <div className="longbio-component">
      <h2 className="longbio-name">{props.name}</h2>
      <div className="longbio-card">
        <section className="image-contact-section">
          <img
            src={props.source}
            alt={props.lastName}
            className="short-bio-image"
          />
          <p className="longbio-contact">{props.email}</p>
          <p className="longbio-contact longbio-phone">{props.phone}</p>
          <a
            href={props.cipherLink}
            target="_blank"
            rel="noopener noreferrer"
            className="cipher-links group-link"
          >
            {props.cipherLink ? 'Publications' : ''}
          </a>
          <p>
            <Link to="/inquery" className="group-link">
              {' '}
              Inquire{' '}
            </Link>
          </p>
        </section>
        <div className="longbio-text-section">{infoToDisplay}</div>
      </div>
      <Link to="/bios" className="group-link">
        {' '}
        Back to Group{' '}
      </Link>
    </div>
  );
};

export default LongBio;