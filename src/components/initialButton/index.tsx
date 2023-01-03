import React from "react"
import { StyledButton } from "./styles"
import { Link } from "gatsby"

export default function InitialButton() {
  return (
    <Link to="/">
      <StyledButton>RR</StyledButton>
    </Link>
  )
}
