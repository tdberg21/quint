import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="groupinfo-component product-pic">
      <div className="blur-bg">
        <h3 className="groupinfo-text groupinfo-header">What We Offer</h3>
        <p className="groupinfo-text groupinfo-paragraph">
          ​​Conflict, terrorism, civil unrest, political instability and cyber
          all pose threats to our clients’ safety, prosperity and resilience.
        </p>
        <p className="groupinfo-text groupinfo-paragraph">
          ​Quint Advisors provides expert perspective on current and potential
          geopolitical risk. We are another set of eyes—discreet and
          experienced—that look at risk factors that affect portfolios and
          markets. Drawing on deep experience managing risk and with access to
          unparalleled global networks, Quint Advisors provides timely insight on
          risks that goes behind the headlines and can provide critical decision
          advantage.
        </p>
        <p className="groupinfo-text groupinfo-paragraph">Quint Advisors:</p>
        <ul className="groupinfo-text groupinfo-paragraph">
          <li>
            Provide insight on developments across the globe which impact client
            interests and turn risk into advantage.
          </li>
          <li>
            Produce bespoke written analysis, typically bi-weekly, and on demand
            during an event.
          </li>
          <li>
            Conduct personal meetings or conference calls to address critical
            client questions and issues.
          </li>
          <li>
            Review non-financial components of current or prospective
            investments to identify masked risk.
          </li>
          <li>Advise on the enduring and ambient cyber threats.</li>
        </ul>
        <p className="groupinfo-text groupinfo-paragraph">
          Quint Advisors delivers trusted, confidential counsel and advice. We
          understand and respect our clients need for absolute discretion.
        </p>
        <Link to="/contact" className="group-link">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Products;