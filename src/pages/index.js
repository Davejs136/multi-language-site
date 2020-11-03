import React from "react"
import { useIntl } from "gatsby-plugin-intl-graphql"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const {
    messages: { principal }
  } = useIntl()

  console.log(principal)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{principal.content.principal.titulo}</h1>
      <p>{principal.content.principal.descripcion}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
