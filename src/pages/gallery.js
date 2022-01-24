import * as React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Gallery = () => {
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
    </Layout>
  )
}

export default Gallery
