import React from 'react';
import './GroupInfo.css';
import { Link } from 'react-router-dom';

const GroupInfo = () => {
  return (
    <div className='groupinfo-component groupinfo-pic'>
      <div className='blur-bg'>
        <h3 className='groupinfo-text groupinfo-header'>Who We Are</h3>
        <p className='groupinfo-text groupinfo-paragraph'> Q Advisors is comprised of a select group of former senior CIA officers with decades of experience across the globe who now apply their intelligence expertise and experience to the private sector. Q Advisors have held senior risk management positions at Goldman Sachs, BP, Fidelity, PWC, Raytheon, and Harvard University. The combination of distinguished government service, substantive risk management expertise, deep networks and private sector perspective provides the clients of Q Advisors with unique and powerful decision making advantage. 
        </p>
        {/* <p className='groupinfo-text groupinfo-paragraph'>
        The skills that once benefited Presidents and their senior policy makers and CEOs, from the collection of unique intelligence to the analysis of seemingly random facts, have now proven equally valuable to the CEO’s, Chief Risk Officers, and portfolio managers that represent Quint Advisors client set.  In the process, each member of our small group has become conversant in what matters most to decision makers in the private sector, helping to identify and address developing issues and solve problems in the same proactive manner as they did in government. 
        </p> */}
        <Link to='/bios' className='group-link'>Individual Bios</Link>
      </div>
    </div>
  )
};

export default GroupInfo;