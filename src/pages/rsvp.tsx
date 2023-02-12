import React from "react"
import firebase from "../external/firebase"

import PageContainer from "../components/pageContainer"
import StyledButton from "../components/styledButton"
import StyledInput from "../components/styledInput"
import styles from "../components/styles/styles"

import { getFirestore, doc, collection, addDoc } from "firebase/firestore"
import { StaticImage } from "gatsby-plugin-image"

const db = getFirestore(firebase)

const Rsvp = () => {
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [comment, setComments] = React.useState("")

  const [submitted, setSubmitted] = React.useState(false)

  const onClickSubmit = () => {
    setSubmitted(true)
    const document = {
      name,
      email,

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
          <textareaanalytics
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
          <br />
          <StyledButton onClick={onClickSubmit}>submit</StyledButton>
          <br />
          <StaticImage src="../images/flowers.jpg" alt="flowers" height={200} />
        </>
      )}
    </PageContainer>
  )
}

export default Rsvp
