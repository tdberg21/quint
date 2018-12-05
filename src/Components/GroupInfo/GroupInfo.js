import React from 'react';
import './GroupInfo.css';
import { Link } from 'react-router-dom';

const GroupInfo = () => {
  return (
    <div className='groupinfo-component groupinfo-pic'>
      <div className='blur-bg'>
        <h3 className='groupinfo-text groupinfo-header'>Who We Are</h3>
        <p className='groupinfo-text groupinfo-paragraph'> Quint Advisors have that extensive overseas experience and knowledge from conducting and leading clandestine operations in every region of the world.  Quint Advisors also have the experience and expertise that comes with managing security risk for corporations exposed to international, domestic, internal and cyber risk.  Quint Advisors understand particularly well the risk set faced by high net worth individuals and their families.  In this respect, the partners have taken their extensive overseas experience and knowledge, developed over decades of sensitive work for the U.S. government and the private sector and effectively applied to managing client risk domestically and overseas. 
        </p>
        <p className='groupinfo-text groupinfo-paragraph'>
        The skills that once benefited Presidents and their senior policy makers and CEOs, from the collection of unique intelligence to the analysis of seemingly random facts, have now proven equally valuable to the CEO’s, Chief Risk Officers, and portfolio managers that represent Quint Advisors client set.  In the process, each member of our small group has become conversant in what matters most to decision makers in the private sector, helping to identify and address developing issues and solve problems in the same proactive manner as they did in government. 
        </p>
        <Link to='/bios' className='group-link'>Individual Bios</Link>
      </div>
    </div>
  )
};

export default GroupInfo;