import React from "react"

import Layout from "../components/layout"
import ArticlesPage from "../components/articlesPage"
import SEO from "../components/seo"
import Image from "../components/image"

const Amorces = () => (
  <Layout>
    <SEO title="Amorces" />
    <ArticlesPage image_url="magasin-interieur.jpg" 
    image_url2="magasin-interieur.jpg"
    image_url3="magasin-interieur.jpg"
        title="Amorces" 
        paragraphe="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt commodi beatae laudantium autem dicta. Quo pariatur quaerat in cupiditate, ab perferendis culpa commodi ex. Provident, perspiciatis aliquam deserunt enim asperiores."
        paragraphe2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur quaerat in cupiditate, ab perferendis culpa commodi ex. Provident, perspiciatis aliquam deserunt enim asperiores, laudantium sed modi dolores ratione neque eligendi libero quae perferendis necessitatibus nulla nemo facilis suscipit et quas reiciendis est, minus eius ipsum. Odio molestiae quae velit. Voluptates saepe vitae excepturi, atque cupiditate quam itaque labore ad incidunt quia explicabo expedita suscipit necessitatibus sint consequuntur! Tempore."
        />

    <section className="gallery_container">
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
