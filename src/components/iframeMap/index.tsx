import React from "react"

const IframeMap = ({ src }: { src: string }) => {
  return (
    <>
      <iframe
        width="200"
        height="200"
        src={src}
        style={{ border: "1px solid black" }}
      ></iframe>
      <br />
      <small>
        <a href="https://www.openstreetmap.org/#map=18/43.65346/-70.27171">
          View Larger Map
        </a>
      </small>
    </>
  )
}

export default IframeMap
