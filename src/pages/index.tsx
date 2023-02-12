import { Link } from "gatsby"
import React from "react"
import { Container, MenuItem } from "../components/index/styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import PageContainer from "../components/pageContainer"
config.autoAddCss = false

export default function MainMenu() {
  const [favoriteClicked, setFavoriteClicked] = React.useState(false)

  return (
    <Container>
      <PageContainer>
        <h2 style={{ fontFamily: "Times New Roman" }}>
          <FontAwesomeIcon icon={faStar} size="lg" color={"rgb(255,207,12)"} />{" "}
          State Theatre Grateful Dead July 5th- w4m
        </h2>
        <p style={{ fontFamily: "Times New Roman" }}>
          Our story began over seven years ago when we danced into each other's
          lives at the simulcast of the last Grateful Dead show at the State
          Theatre in Portland, Maine. Through the miracle of a post made on
          Craigslist Missed Connections, we found each other. What a long,
          strange trip it’s been ;)!
        </p>
        <p style={{ fontFamily: "Times New Roman" }}>
          We are now looking forward to celebrating our love and marriage in the
          same city this September, exactly 3000 days since we met! Please use
          this site to access information about our celebration! We would
          appreciate it if you RSVP using the link below so we know you are
          attending!
        </p>
      </PageContainer>
      <MenuItem>
        <Link to="/photos" style={{ textDecoration: "none", opacity: 1 }}>
          photos
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
        <Link to="/rsvp" style={{ textDecoration: "none", opacity: 1 }}>
          rsvp
        </Link>
      </MenuItem>
    </Container>
  )
}
