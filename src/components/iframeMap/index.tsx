import React from "react"

const IframeMap = ({ src }: { src: string }) => {
  return (
    <iframe
      width="200"
      height="200"
      src={src}
      style={{ border: "1px solid black" }}
    ></iframe>
  )
}

export default IframeMap
