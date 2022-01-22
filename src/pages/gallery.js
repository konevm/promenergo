import * as React from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  return (
    <Layout>
      <h1 className="gallery"></h1>
    </Layout>
  );
};
