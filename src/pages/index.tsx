import { Link } from "gatsby"
import React from "react"
import { Container, MenuItem } from "../components/index/styles"

export default function MainMenu() {
  return (
    <Container>
      <MenuItem>
        <Link to="/story" style={{ textDecoration: "none", opacity: 1 }}>
          our story
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          to="/reccomendations"
          style={{ textDecoration: "none", opacity: 1 }}
        >
          reccomendations
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/details" style={{ textDecoration: "none", opacity: 1 }}>
          details
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/registry" style={{ textDecoration: "none", opacity: 1 }}>
          registry
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/gallery" style={{ textDecoration: "none", opacity: 1 }}>
          gallery
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/rsvp" style={{ textDecoration: "none", opacity: 1 }}>
          rsvp
        </Link>
      </MenuItem>
    </Container>
  )
}
