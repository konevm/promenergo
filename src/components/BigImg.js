import * as React from "react"

const BigImg = ({ name, src }) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "grey",
        position: "relative",
        zIndex: "100",
        opacity: "0.5",
      }}
    >
      {" "}
      <img
        src={src}
        alt={name}
        style={{
          position: "absolute",
          width: "100%",
          maxHeight: "80vh",
          objectFit: "cover",
          margin: "auto 40px",
          opacity: 1,
          zIndex: 150,
        }}
      />
    </div>
  )
}

export default BigImg
