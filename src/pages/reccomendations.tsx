import React from "react"
import PageContainer from "../components/pageContainer"
import IframeMap from "../components/iframeMap"
import LinkText from "../components/linkText"

const Reccomendations = () => {
  return (
    <PageContainer>
      <h3 style={{ fontFamily: "Times New Roman" }}>Reccomendations</h3>
      <h4 style={{ fontFamily: "Times New Roman" }}>Hotels</h4>
      <p style={{ fontFamily: "Times New Roman" }}>
        We don't have a block of rooms reserved at any hotels, but here are some
        options:
      </p>

      <p style={{ fontFamily: "Times New Roman" }}>
        Please let us know if you have any questions!
      </p>
    </PageContainer>
  )
}

const ReccomendationBlock = () => {
  return (
    <>
      <a target="_blank" href="https://thefrancismaine.com/">
        <LinkText text="The Francis Hotel" />
      </a>
      <p style={{ fontFamily: "Times New Roman" }}>
        Located in the charming Parkside neighborhood, The Francis Hotel & Spa
        offers 15 uniquely designed guest rooms and a small spa in a beautifully
        renovated historic mansion. The Francis is locally owned & operated by
        fourth-generation Mainers and has been a part of the Portland community
        since 2017.
      </p>
      <IframeMap src="https://www.openstreetmap.org/export/embed.html?bbox=-70.28140783309938%2C43.65032974984957%2C-70.26724576950075%2C43.65678823430195&amp;layer=mapnik&amp;marker=43.653555197596816%2C-70.27432680130005" />
    </>
  )
}

export default Reccomendations
