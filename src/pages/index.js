import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo.tsx"
import Bio from "../components/bio.tsx"
import Contacts from "../components/contacts.tsx"
import Tab from "../components/tab.tsx"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} description="A software engineer in Tokyo. Developer of FlexScoreboard App." />
      <Tab location={location} />
      <Bio />
      <Contacts social={data.site.siteMetadata?.social} />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          twitter
          linkedin
          github
          email
        }
      }
    }
  }
`
