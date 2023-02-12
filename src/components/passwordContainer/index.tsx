import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { StyledButton } from "../initialButton/styles"
import PageContainer from "../pageContainer"
import StyledInput from "../styledInput"
import { InputContainer } from "./styles"

// TODO move this to a separate file
const PASSWORD = "portland"

let localPassword
if (typeof window !== "undefined") {
  localPassword = window.localStorage.getItem("password")
}

const PasswordContainer = ({ children }) => {
  const [password, setPassword] = React.useState("")
  const [loading, setLoading] = React.useState(true)
  const [passwordCorrect, setPasswordCorrect] = React.useState(false)

  React.useEffect(() => {
    if (localPassword === PASSWORD) {
      setPasswordCorrect(true)
    }
    setLoading(false)
  }, [localPassword])

  const handleChange = e => {
    setPassword(e.target.value)
  }

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      handleSubmit(e)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (password === PASSWORD) {
      setPasswordCorrect(true)
      window.localStorage.setItem("password", password)
    } else {
      alert("Incorrect password")
    }
  }

  if (loading) return null

  return passwordCorrect ? (
    children
  ) : (
    <PageContainer>
      <h2 style={{ fontFamily: "Times New Roman" }}>
        <FontAwesomeIcon icon={faStar} size="lg" color={"rgb(255,207,12)"} />{" "}
        Renee and Reed Wedding Celebration!
      </h2>
      <p style={{ fontFamily: "Times New Roman" }}>
        Welcome to our wedding celebration website! Please enter the password to
        continue:
      </p>
      <InputContainer>
        <StyledInput
          type="password"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></StyledInput>
        <StyledButton
          style={{ marginLeft: 5 }}
          onClick={handleSubmit}
          onSubmit={handleSubmit}
        >
          Submit
        </StyledButton>
      </InputContainer>
    </PageContainer>
  )
}

export default PasswordContainer
