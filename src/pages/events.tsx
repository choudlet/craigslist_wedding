import React from "react"
import PageContainer from "../components/pageContainer"

const Events = () => {
  return (
    <PageContainer>
      <h3 style={{ fontFamily: "Times New Roman" }}>Events</h3>
      <p style={{ fontFamily: "Times New Roman" }}>
        We will be getting married at Portland City Hall at xx_xx_xx. Afterwards
        we will be having a celebration at{" "}
        <a href="https://oxbowbeer.com/">Oxbow Brewery</a> located at xx_xx_xx.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="https://via.placeholder.com/300" />
      </div>
      <p style={{ fontFamily: "Times New Roman" }}>
        Please let us know if you have any questions!
      </p>
    </PageContainer>
  )
}

export default Events
