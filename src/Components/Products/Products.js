import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='groupinfo-component product-pic'>
      <div className='blur-bg'>
        <h3 className='groupinfo-text groupinfo-header'>What We Offer</h3>
        <p className='groupinfo-text groupinfo-paragraph'>​There may have been more dangerous times in history, but never more complicated. Conflict, terrorism, civil unrest, political instability and cyber all pose threats to our clients’ safety, prosperity and resilience.
        </p>
        <p className='groupinfo-text groupinfo-paragraph'>​
        Q Advisors provides independent, bespoke expert perspective on current and potential geopolitical risk. We are another set of eyes—discreet and experienced—that look at risk factors that affect portfolios and markets. Drawing on deep experience in manage risk and with access to an unparalleled global network, Q Advisors provide timely insight on risks that go beyond the headlines and can provide critical decision advantage.
        </p>
        {/* <p className='groupinfo-text groupinfo-paragraph'>​
        ​Quint Advisors are highly discreet.  We do not advertise and we accept clients only by referral. This web site is for informational purposes only.  We have found that the better we know our clients personally, the better we can anticipate their needs and meet their expectations.  All clients receive full access to all Quint partners to ensure that they will be able to call upon the broad geopolitical and security expertise of this unique group of professionals. </p> */}
        <Link to='/contact' className='group-link'>Contact Us</Link>
      </div>
    </div>
  )
};

export default Products;