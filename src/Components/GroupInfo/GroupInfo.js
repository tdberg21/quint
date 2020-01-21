import React from 'react';
import './GroupInfo.css';
import { Link } from 'react-router-dom';

const GroupInfo = () => {
  return (
    <div className="groupinfo-component groupinfo-pic">
      <div className="blur-bg">
        <h3 className="groupinfo-text groupinfo-header">Who We Are</h3>
        <p className="groupinfo-text groupinfo-paragraph">
          Quint Advisors is comprised of a select group of former senior CIA
          officers with decades of experience across the globe who now apply
          their intelligence expertise to the private sector. Quint Advisors have
          held senior positions at Goldman Sachs, BP, PwC, Raytheon, and Harvard
          University. The combination of distinguished government service,
          substantive geo-political and risk management expertise, deep
          networks, and private sector perspective provides the clients of Q
          Advisors with unique and powerful decision-making advantage.
        </p>
        <Link to="/bios" className="group-link">
          Individual Bios
        </Link>
      </div>
    </div>
  );
};

export default GroupInfo;