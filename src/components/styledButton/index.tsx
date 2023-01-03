import React from "react"
import styled from "styled-components"
import styles from "../styles/styles"

const StyledButton = styled.div`
  color: ${styles.colors.textBlue};
  background-color: ${styles.colors.backgroundWhite};
  padding: 6px;
  border-radius: 10px;
  border: 1px solid ${styles.colors.borderGrey};
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default StyledButton
