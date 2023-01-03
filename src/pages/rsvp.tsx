import React from "react"
import PageContainer from "../components/pageContainer"
import StyledButton from "../components/styledButton"
import StyledInput from "../components/styledInput"
import styles from "../components/styles/styles"

const Rsvp = () => {
  const [submitted, setSubmitted] = React.useState(false)

  const onClickSubmit = () => {
    setSubmitted(true)
  }

  return (
    <PageContainer>
      <h3 style={{ fontFamily: "Times New Roman" }}>RSVP</h3>
      {submitted ? (
        <p style={{ fontFamily: "Times New Roman" }}>
          Thank you for your RSVP!
        </p>
      ) : (
        <>
          <p style={{ fontFamily: "Times New Roman" }}>Please RSVP below!</p>
          <StyledInput style={{ height: 30 }} type="text" placeholder="name" />
          <br />
          <textarea
            style={{
              fontFamily: "arial",
              borderColor: styles.colors.borderGrey,
            }}
            name="Text1"
            placeholder="comments"
            rows={5}
            cols={40}
          ></textarea>
          <StyledButton onClick={onClickSubmit}>submit</StyledButton>
        </>
      )}
    </PageContainer>
  )
}

export default Rsvp
