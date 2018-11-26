import React from 'react';
import './GroupInfo.css';
import { Link } from 'react-router-dom';

const GroupInfo = () => {
  return (
    <div className='groupinfo-component'>
      <h3 className='groupinfo-text groupinfo-header'>Who We Are</h3>
      <p className='groupinfo-text groupinfo-paragraph'>Quintet’s five partners have that extensive overseas experience and knowledge from conducting and leading clandestine operations in every region of the world, often in hostile environments where the risk of exposure for US Government equities was extraordinary. 
      </p>
      <p className='groupinfo-text groupinfo-paragraph'>
      After their CIA service, Quintet’s five partners have all worked as senior business intelligence and security officials or consultants for major US and foreign corporations. In these positions, the partners have taken their extensive overseas experience and knowledge, developed over decades of sensitive work for the US government, and effectively applied it to a range of private sector interests in challenging locations. 
      </p>
      <p className='groupinfo-text groupinfo-paragraph bottom'>
      The skills that once benefited Presidents and senior policy makers, from the collection of determinant intelligence to the analysis of seemingly random facts, have proven equally useful to CEO's, Chief Risk Officers and portfolio managers. In the process, each member of our small group has become conversant in what matters most to decision makers in the private sector, helping to address developing issues and solve problems in the same proactive manner as they did in government.</p>
      <Link to='/bios'>Individual Bios</Link>
    </div>
  )
};

export default GroupInfo;