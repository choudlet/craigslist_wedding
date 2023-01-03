import * as React from "react"
import { HeaderWrapper } from "./styles"
import InitialButton from "../initialButton"
import LinkText from "../linkText"

let defaultPath = ""
const isBrowser = typeof window !== "undefined"

if (typeof window !== "undefined") {
  defaultPath = window.location.pathname
}

const Header = () => {
  const [currentPath, setCurrentPath] = React.useState(defaultPath)

  React.useEffect(() => {
    const handler = () => {
      if (isBrowser && window?.location?.pathname !== "/") {
        const path = window?.location?.pathname
        if (path) {
          const cleanPath = path.replace(/\//g, "")
          setCurrentPath(cleanPath)
        }
      } else {
        setCurrentPath("")
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("popstate", handler)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("popstate", handler)
      }
    }
  }, [currentPath])

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
