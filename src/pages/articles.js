import React from "react"

import Layout from "../components/layout"
import ArticlesPage from "../components/articlesPage"
import SEO from "../components/seo"

const Articles = () => (
  <Layout>
    <SEO title="Articles" />
    <ArticlesPage image_url="canne.jpg" 
        title="Articles" 
        paragraphe="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt commodi beatae laudantium autem dicta. Quo pariatur quaerat in cupiditate, ab perferendis culpa commodi ex. Provident, perspiciatis aliquam deserunt enim asperiores."
      boutton="Découvrir"
    />
  </Layout>
)

export default Articles
