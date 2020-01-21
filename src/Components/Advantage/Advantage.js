import React from 'react';
import { Link } from 'react-router-dom';
import './Advantage.css';

const Advantage = () => {
  return (
    <div className="advantage-component">
      <div className="blur-bg">
        <h3 className="threat-text">
          <u>The Q Advantage</u>
        </h3>
        <p className="threat-text threat-paragraph">
          Quint Advisors have extensive overseas experience and knowledge from
          conducting and leading clandestine operations in every region of the
          world. Quint Advisors also have the experience and expertise that comes
          with managing security risk for corporations exposed to international,
          domestic, internal and cyber threats. The skills that once benefited
          Presidents and their senior advisors, from the collection of unique
          intelligence to deep analysis, have now proven equally valuable to the
          CEO’s, Chief Risk Officers, and portfolio managers that represent Quint
          Advisors’ client set. In the process, each member of our small group
          has become conversant in what matters most to decision makers in the
          private sector, helping to identify and address developing issues and
          solve problems in the same proactive manner as they did in government.
        </p>
        <Link to="/inquiry" className="group-link">
          Inquire
        </Link>
      </div>
    </div>
  );
};

export default Advantage;