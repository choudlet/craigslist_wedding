import React from "react"
import PageContainer from "../components/pageContainer"

const Story = () => {
  return (
    <PageContainer>
      <h3 style={{ fontFamily: "Times New Roman" }}>Our Story</h3>
      <p style={{ fontFamily: "Times New Roman" }}>
        We met at a grateful dead cover band concert in 20XX and ended up
        finding each other the next day on Craiglist! We are so happy we found
        each other on the internet and are excited to celebrate our love with
        you!
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
        We are so excited to celebrate with you in September!
      </p>
    </PageContainer>
  )
}

export default Story
