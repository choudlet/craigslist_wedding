import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import LinkText from "../components/linkText"
import PageContainer from "../components/pageContainer"

const Registry = () => {
  return (
    <PageContainer>
      <h3 style={{ fontFamily: "Times New Roman" }}>Registry</h3>
      <StaticImage src="../images/dressed.JPG" alt="registry" height={400} />
      <p style={{ fontFamily: "Times New Roman" }}>
        We have decided to not do a formal registry. In lieu of gifts we will be
        accepting in person donations to the{" "}
        <a
          href="http://www.alandaycommunitygarden.org/"
          target={"_blank"}
          rel="noopener noreferrer"
        >
          Alan Day Community Garden
        </a>{" "}
        Youth Leadership program.
      </p>
      <StaticImage src="../images/garden.png" alt="garden" height={400} />
    </PageContainer>
  )
}

export default Registry
