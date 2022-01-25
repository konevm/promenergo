import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import "./styles/indexElement.sass"

const IndexElement = ({ value }) => {
  const Img = value.src

  return (
    <div className="element__wrapper">
      <div className="element__imgBorder">
        <img src={Img} alt={value.name} />
      </div>
      <div className="element__text">
        <h2>{value.name}</h2>
        <ul>
          {value.works.map(i => {
            return <li key={i.id}>{i.title}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default IndexElement
