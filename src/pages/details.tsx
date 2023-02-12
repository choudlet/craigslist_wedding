import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import PageContainer from "../components/pageContainer"

const Details = () => {
  return (
    <PageContainer>
      <h3 style={{ fontFamily: "Times New Roman" }}>Details</h3>
      <p style={{ fontFamily: "Times New Roman" }}>
        The celebration will be starting at 5PM on September 28th 2023 at{" "}
        <a href="https://oxbowbeer.com/">Oxbow Blending and Bottling</a> located
        at 49 Washington Ave, Portland, ME 04101. We will have a taco truck,
        beer, wine, and a DJ until about 10PM. We are so excited to celebrate
        with you soon!
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          width="425"
          height="350"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-70.25295227766038%2C43.66410364714214%2C-70.24941176176073%2C43.66582855759004&amp;layer=mapnik&amp;marker=43.664967000020816%2C-70.25118299999997"
        ></iframe>
        <br />
      </div>
      <small>
        <a href="https://www.openstreetmap.org/?mlat=43.66497&amp;mlon=-70.25118#map=19/43.66497/-70.25118">
          View Larger Map
        </a>
      </small>
      <br />
      <StaticImage src="../images/love.jpg" alt="Love" height={200} />
      <p style={{ fontFamily: "Times New Roman" }}>
        Please let us know if you have any questions!
      </p>
    </PageContainer>
  )
}

export default Details
