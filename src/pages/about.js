import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const About = () => {
  console.log(document.title);
  return (
    <Layout>
      <Seo title="О нас" />
      <div className="about">
        <h2>О нас</h2>
        <p className="">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          quos dolorum nam expedita quaerat dignissimos, nisi saepe facere id
          iste reiciendis repudiandae optio provident enim tempore natus dolore
          est quidem?{" "}
        </p>
      </div>
    </Layout>
  );
};

export default About;
