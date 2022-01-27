import * as React from "react"

import "./styles/indexElement.sass"

const IndexElement = ({ value }) => {
  const Img = value.src
  function setBigImage() {
    const img = document.getElementById(Img)
    img.classList.toggle("bigImage")
  }
  return (
    <div className="element__wrapper">
      <div className="element__imgBorder">
        <img
          src={Img}
          alt={value.name}
          className="picture"
          id={Img}
          onClick={setBigImage}
        />
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
