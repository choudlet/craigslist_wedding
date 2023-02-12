import styled from "styled-components"
import styles from "../styles/styles"

export const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
export const MenuItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${styles.colors.backgroundGrey};
  border-top: 1px solid ${styles.colors.borderGrey};
  border-bottom: 1px solid ${styles.colors.borderGrey};
  opacity: 0.5;
  width: 100%;
  height: 40px;
  padding-left: 16px;
  margin-top: 4px;
  margin-bottom: 4px;
`
