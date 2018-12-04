import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className='groupinfo-component product-pic'>
      <div className='blur-bg'>
        <h3 className='groupinfo-text groupinfo-header'>What We Offer</h3>
        <p className='groupinfo-text groupinfo-paragraph'>​Quint is not in the business of offering business advice,  marketing strategies or economic analysis to which our clients already have access. We are in the business of assessing the potential political, cultural, and historical nuances and pitfalls that might complicate a commercial strategy or increase the risk for a venture’s success. We are another set of eyes -—discreet and expert -- that look at proposed activities and can make the difference in preventing unseen dangers to a prospective investor in the complex and rapidly evolving global marketplace. 
        </p>
        <p className='groupinfo-text groupinfo-paragraph'>​
        Our familiarity with key officials in foreign countries, our knowledge of foreign societies and government operations, and our expertise in the cultural and bureaucratic nuances of decision-making are critical to developing effective business strategies that maximize investments. Our clients will never have to say "If only we knew..."
        </p>
        <p className='groupinfo-text groupinfo-paragraph'>​
        ​Quint Advisors is highly discreet. We do not advertise and we accept clients only by referral. We have found that the better we know our clients personally, the better we can anticipate their needs and meet their expectations. All clients receive full access to all Quint partners to ensure that they will be able to call upon the broad geopolitical expertise of this unique group of professionals. </p>
        <Link to='/contact' className='group-link'>Contact Us</Link>
      </div>
    </div>
  )
};

export default Products;