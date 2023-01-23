/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyle from "../components/styles/globalStyles"

import { Wrapper, PageContainer } from "./styles"
import Header from "../components/header"
import styles from "../components/styles/styles"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <GlobalStyle />
        <Wrapper>
          <PageContainer>{children}</PageContainer>
        </Wrapper>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
            backgroundColor: styles.colors.backgroundGrey,
            position: "fixed",
            width: "100%",
            height: "40px",
            display: "flex",
            alignItems: "center",
            borderTop: `1px solid ${styles.colors.borderGrey}`,
            bottom: 0,
            paddingLeft: "8px",
          }}
        >
          © {new Date().getFullYear()} &middot; CH
        </footer>
      </div>
    </>
  )
}

export default Layout
