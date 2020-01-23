import React from 'react';
import { Link } from 'react-router-dom';
import './Threat.css';

const Threat = () => {
  return (
    <div className="threat-component">
      <div className="blur-bg">
        <h3 className="threat-text threat-header">The Threat</h3>
        <p className="threat-text threat-paragraph">
          Risk in overseas markets often evolves gradually, even insidiously,
          sometime surfacing as subtle developments or hidden dynamics in a
          foreign country or market that go unnoticed until they suddenly become
          business and market disruptive. Risk is even more of a threat in
          emerging markets that appear commercially promising but remain heavily
          influenced by undercurrents that can negatively impact the business
          environment. The extensive knowledge and experience of Quint Advisors is
          an essential tool in managing domestic and overseas risk as well as
          risk in the cyber domain.
        </p>
        <Link to="/inquiry" className="group-link">
          Inquire
        </Link>
      </div>
    </div>
  );
};

export default Threat;