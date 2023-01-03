import * as React from "react"
import { HeaderWrapper } from "./styles"
import InitialButton from "../initialButton"
import LinkText from "../linkText"

const Header = () => {
  const [currentPath, setCurrentPath] = React.useState("")
  const isBrowser = typeof window !== "undefined"

  React.useEffect(() => {
    if (isBrowser && window.location.pathname !== "/") {
      const path = window.location.pathname
      const cleanPath = path.replace(/\//g, "")
      setCurrentPath(cleanPath)
    } else {
      setCurrentPath("")
    }
  }, [isBrowser, window, currentPath])

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
