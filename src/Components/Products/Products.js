import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div className="groupinfo-component product-pic">
      <div className="blur-bg">
        <h3 className="groupinfo-text groupinfo-header">What We Offer</h3>
        <p className="groupinfo-text groupinfo-paragraph">
          ​There may have been more dangerous times in history, but never more
          complicated. Conflict, terrorism, civil unrest, political instability
          and cyber all pose threats to our clients’ safety, prosperity and
          resilience.
        </p>
        <p className="groupinfo-text groupinfo-paragraph">
          ​ Q Advisors provides independent, bespoke expert perspective on
          current and potential geopolitical risk. We are another set of
          eyes—discreet and experienced—that look at risk factors that affect
          portfolios and markets. Drawing on deep experience in manage risk and
          with access to an unparalleled global network, Q Advisors provide
          timely insight on risks that go beyond the headlines and can provide
          critical decision advantage.
        </p>
        <ul className="groupinfo-text groupinfo-paragraph">
          <li>
            Q Advisors deliver insight on developments across the globe which
            impact client interests. Our insights help our clients anticipate
            geopolitical and market risk and, when events occur, we are able to
            provide real time insight and analysis and turn risk into advantage.
          </li>
          <li>
            Q Advisors perform deep diligence on prospective partners or
            counter-parties. Drawing on deep counterintelligence experience Q
            Advisors provide our clients a unique diligence and risk management
            perspective.
          </li>
          <li>
            Q Advisors provide bespoke written analysis, typically bi-weekly,
            and on demand during an event. Q Advisors are also With five
            principals, Q Advisors are always in a position to respond to our
            clients risk management needs
          </li>
          <li>
            Review non-financial components of existing portfolios to identify
            masked risk.
          </li>
          <li>
            Provide risk mitigation advice on the enduring and ambient threat of
            cyber.
          </li>
          <li>
            Q Advisors provide trusted, confidential counsel and advice. We
            understand and respect our clients need for absolute discretion.
          </li>
        </ul>
        <Link to="/contact" className="group-link">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Products;