import React from "react"

import Layout from "../components/layout"
import ArticlesPage from "../components/articlesPage"
import SEO from "../components/seo"
import Image from "../components/image"

const Leurres = () => (
  <Layout>
    <SEO title="Leurres" />
    <ArticlesPage image_url="leurres.jpg" 
        image_url_1="image_construction.jpg"
        image_url_2="image_plan.jpg"
        image_url_3="image_plan2.jpg"
        image_url_4="image_interieur.jpg"
        image_url_5="image3.jpg"
        title="Leurres" 
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

export default Leurres
