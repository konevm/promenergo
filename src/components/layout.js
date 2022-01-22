import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <div className="layout__wrapper">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
