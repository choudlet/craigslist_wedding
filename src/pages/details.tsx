import React from "react"
import PageContainer from "../components/pageContainer"

const Details = () => {
  return (
    <PageContainer>
      <h3 style={{ fontFamily: "Times New Roman" }}>Events</h3>
      <p style={{ fontFamily: "Times New Roman" }}>
        The ceremony will be happening at xx_xx_xx. Afterwards we will be having
        a celebration at <a href="https://oxbowbeer.com/">Oxbow Brewery</a>{" "}
        located at xx_xx_xx. If you need to book a hotel for a night in portland
        maine we suggest xx_xx_xx as it will be walking distance from the
        venues.
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

export default Details
