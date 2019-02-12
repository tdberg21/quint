import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='groupinfo-component product-pic'>
      <div className='blur-bg'>
        <h3 className='groupinfo-text groupinfo-header'>What We Offer</h3>
        <p className='groupinfo-text groupinfo-paragraph'>​ Quint is not in the business of offering business advice, marketing strategies, or economic analysis to which our clients already have access.  We are in the business of assessing the potential political, cultural, and historical nuances and pitfalls that might complicate a commercial strategy or increase the risk for a venture’s success.  We are another set of eyes—discreet and expert—that look at proposed activities and can make the difference in preventing unseen dangers to a prospective investor in the complex and rapidly evolving global marketplace.  Quint Advisors also have the expertise to take a deep look at counterparties in a prospective business venture to identify potential risks, as well as take a look at the components of an existing investment portfolio to identify existing or potential risk. In the cyber domain, Quint Advisors can help take a look at potential enterprise risk, focusing on the insider threat component, organizational cyber threat preparation, and incident management. 
        </p>
        <p className='groupinfo-text groupinfo-paragraph'>​
        Quint Advisors familiarity with key officials in the foreign countries, our knowledge of foreign societies and government operations, and our expertise in the cultural and bureaucratic nuances of decision-making are critical to developing effective business strategies that maximize investments.  Our clients will never have to say, “If only we knew…”
        </p>
        <p className='groupinfo-text groupinfo-paragraph'>​
        ​Quint Advisors are highly discreet.  We do not advertise and we accept clients only by referral. This web site is for informational purposes only.  We have found that the better we know our clients personally, the better we can anticipate their needs and meet their expectations.  All clients receive full access to all Quint partners to ensure that they will be able to call upon the broad geopolitical and security expertise of this unique group of professionals. </p>
        <Link to='/contact' className='group-link'>Contact Us</Link>
      </div>
    </div>
  )
};

export default Products;