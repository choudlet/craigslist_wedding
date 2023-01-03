import React from "react"
import { StyledLinkText } from "./styles"

type LinkTextProps = {
  text: string
}

const LinkText: React.FC<LinkTextProps> = ({ text }) => {
  return <StyledLinkText>{text}</StyledLinkText>
}

export default LinkText
