import React from "react"
import PageContainer from "../components/pageContainer"
import { StaticImage } from "gatsby-plugin-image"

const Photos = () => {
  return (
    <PageContainer>
      <h3 style={{ fontFamily: "Times New Roman" }}>Photos</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StaticImage src="../images/kiss.jpg" alt="Kiss" height={400} />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StaticImage src="../images/phish.png" alt="Phish" height={400} />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StaticImage src="../images/snow.jpg" alt="snow" height={400} />
      </div>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StaticImage src="../images/colorado.jpg" alt="snow" height={400} />
      </div>
    </PageContainer>
  )
}

export default Photos
