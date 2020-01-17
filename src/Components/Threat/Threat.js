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
          environment. The extensive knowledge and experience of Q Advisors is
          an essential tool in managing domestic and overseas risk as well as
          risk in the cyber domain.
        </p>
        <h3 className="threat-text">
          <u>The Q Advantage</u>
        </h3>
        <p className="threat-text threat-paragraph">
          Q Advisors have extensive overseas experience and knowledge from
          conducting and leading clandestine operations in every region of the
          world. Q Advisors also have the experience and expertise that comes
          with managing security risk for corporations exposed to international,
          domestic, internal and cyber threats. The skills that once benefited
          Presidents and their senior advisors, from the collection of unique
          intelligence to deep analysis, have now proven equally valuable to the
          CEO’s, Chief Risk Officers, and portfolio managers that represent Q
          Advisors’ client set. In the process, each member of our small group
          has become conversant in what matters most to decision makers in the
          private sector, helping to identify and address developing issues and
          solve problems in the same proactive manner as they did in government.
        </p>
        <Link to="/inquery" className="group-link">
          Inquire
        </Link>
      </div>
    </div>
  );
};

export default Threat;