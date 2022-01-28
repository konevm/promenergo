import * as React from "react"

import Data from "./DB/works.json"

const Benefits = () => {
  return (
    <div className="benefits__wrapper">
      <ul className="benefits">
        {Data.Benefits.map(i => {
          return (
            <li key={i.id}>
              <>
                <img src={i.image} alt={i.name} />
                <span>{i.name}</span>
              </>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Benefits
