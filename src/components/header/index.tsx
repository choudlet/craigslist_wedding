import * as React from "react"
import { HeaderWrapper } from "./styles"
import InitialButton from "../initialButton"
import LinkText from "../linkText"

const Header = ({ siteTitle }) => {
  const [currentPath, setCurrentPath] = React.useState("")

  React.useEffect(() => {
    if (window.location.pathname !== "/") {
      const path = window.location.pathname
      const cleanPath = path.replace(/\//g, "")
      setCurrentPath(cleanPath)
    } else {
      setCurrentPath("")
    }
  }, [window.location.pathname, currentPath])

  return (
    <HeaderWrapper>
      <InitialButton />
      {currentPath !== "" ? (
        <>
          <p>renee and reed</p>
          <p style={{ fontSize: 20 }}>&gt;</p>
          <p>{currentPath}</p>
        </>
      ) : (
        <LinkText text="renee and reed" />
      )}
    </HeaderWrapper>
  )
}

export default Header
