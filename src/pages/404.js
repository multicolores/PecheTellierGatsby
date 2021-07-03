import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="notFound">
      <h1>Cette page n'existe pas</h1>
      <Link to="/">Retourner a la page principale</Link>
    </div>

  </Layout>
)

export default NotFoundPage
