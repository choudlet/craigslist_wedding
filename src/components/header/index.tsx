import * as React from "react"
import { HeaderWrapper } from "./styles"
import InitialButton from "../initialButton"
import LinkText from "../linkText"
import { navigate } from "gatsby"

let defaultPath = ""
const isBrowser = typeof window !== "undefined"

if (typeof window !== "undefined") {
  defaultPath =
    window.location.pathname !== "/"
      ? window.location.pathname.replace(/\//g, "")
      : ""
}

const Header = () => {
  const [currentPath, setCurrentPath] = React.useState(defaultPath)

  const handleNavigation = () => {
    navigate("/")
  }

  if (isBrowser) {
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
      handler()
    }, [window?.location?.pathname, currentPath])
  }

  return (
    <HeaderWrapper onClick={handleNavigation}>
      <InitialButton />
      {currentPath !== "" ? (
        <>
          <LinkText text="renee and reed" />
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
