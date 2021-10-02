import React from "react"

import Layout from "../components/layout"
import ArticlesPage from "../components/articlesPage"
import SEO from "../components/seo"
import Image from "../components/image"

const Amorces = () => (
  <Layout>
    <SEO title="Amorces" />
    <ArticlesPage image_url="magasin-interieur.jpg" 
        title="Amorces" 
        paragraphe="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt commodi beatae laudantium autem dicta. Quo pariatur quaerat in cupiditate, ab perferendis culpa commodi."
        boutton="Découvrir"
    />

    <section className="gallery_container" id="next-section">
      <Image alt="image d'additif" filename={"pike-bg.jpg"} />
      <Image alt="image d'additif" filename={"pike-bg.jpg"} />
      <Image alt="image d'additif" filename={"pike-bg.jpg"} />
      <Image alt="image d'additif" filename={"pike-bg.jpg"} />
      <Image alt="image d'additif" filename={"pike-bg.jpg"} />
      <Image alt="image d'additif" filename={"pike-bg.jpg"} />

    </section>

  </Layout>
)

export default Amorces
