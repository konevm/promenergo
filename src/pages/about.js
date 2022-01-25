import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "gallery" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)
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
        <h1 className="gallery" style={{ width: "100vw" }}>
          Галерея
        </h1>
        <div className="gallery__wrapper" style={{ width: "100%" }}>
          {data.allFile.edges.map(({ node }) => (
            <Img
              fluid={node.childImageSharp.fluid}
              style={{ width: "100%", height: "50vh" }}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default About
