import React from "react"
import firebase from "../external/firebase"

import PageContainer from "../components/pageContainer"
import StyledButton from "../components/styledButton"
import StyledInput from "../components/styledInput"
import styles from "../components/styles/styles"

import { getFirestore, doc, collection, addDoc } from "firebase/firestore"

const db = getFirestore(firebase)

const Rsvp = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [partySize, setPartySize] = React.useState("")
  const [comment, setComments] = React.useState("")

  const [submitted, setSubmitted] = React.useState(false)

  const onClickSubmit = () => {
    setSubmitted(true)
    const document = {
      name,
      email,
      partySize,
      comment,
    }
    const rsvpsCollectionRef = collection(db, "rsvps")
    addDoc(rsvpsCollectionRef, document)
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
          <StyledInput
            style={{ height: 30 }}
            type="text"
            placeholder="name"
            onChange={e => {
              setName(e.target.value)
            }}
          />
          <br />
          <StyledInput
            style={{ height: 30 }}
            type="text"
            placeholder="email"
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <br />
          <StyledInput
            style={{ height: 30 }}
            type="text"
            placeholder="party size"
            onChange={e => {
              setPartySize(e.target.value)
            }}
          />
          <br />
          <textarea
            style={{
              fontFamily: "arial",
              borderColor: styles.colors.borderGrey,
            }}
            onChange={e => {
              setComments(e.target.value)
            }}
            name="comments, questions, etc."
            placeholder="comments / questions"
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
