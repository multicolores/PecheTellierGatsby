import React from "react"

import Layout from "../components/layout"
import ArticlesPage from "../components/articlesPage"
import SEO from "../components/seo"
import Image from "../components/image"

const Appats = () => (
  <Layout>
    <SEO title="Appâts" />
    <ArticlesPage 
    image_url="vers-farine.jpg"
    image_url2="magasin-interieur.jpg"
    image_url3="magasin-interieur.jpg"
    title="Appâts" 
    paragraphe="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio deserunt commodi beatae laudantium autem dicta. Quo pariatur quaerat in cupiditate, ab perferendis culpa commodi ex. Provident, perspiciatis aliquam deserunt enim asperiores."
    paragraphe2="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo pariatur quaerat in cupiditate, ab perferendis culpa commodi ex. Provident, perspiciatis aliquam deserunt enim asperiores, laudantium sed modi dolores ratione neque eligendi libero quae perferendis necessitatibus nulla nemo facilis suscipit et quas reiciendis est, minus eius ipsum. Odio molestiae quae velit. Voluptates saepe vitae excepturi, atque cupiditate quam itaque labore ad incidunt quia explicabo expedita suscipit necessitatibus sint consequuntur! Tempore."
    />

    <section className="appatsSection">
      <h1>Des appâts vivants efficaces</h1>
      <div className="gallery_container">
        <div className="imgWtext">
          <Image alt="image d'additif" filename={"bloodworm.png"} />
          <span>Vers de vase</span>
        </div>
        <div className="imgWtext">
        <Image alt="image d'additif" filename={"lombric.png"} />
          <span>Vers de terre</span>
        </div>
        <div className="imgWtext">
        <Image alt="image d'additif" filename={"maggots.png"} />
          <span>Asticots</span>
        </div>
        <div className="imgWtext">
        <Image alt="image d'additif" filename={"pinkies.png"} />
          <span>Pinkies</span>
        </div>
        <div className="imgWtext">
        <Image alt="image d'additif" filename={"vers_teignes.png"} />
          <span>Teignes</span>
        </div>
        <div className="imgWtext">
        <Image alt="image d'additif" filename={"vers_farine.png"} />
          <span>Vers de farine</span>
        </div>
        <div className="imgWtext">
        <Image alt="image d'additif" filename={"gardon.png"} />
          <span>Gardons</span>
        </div>
        <div className="imgWtext">
        <Image alt="image d'additif" filename={"carpeau.png"} />
          <span>Carpeaux</span>
        </div>
        <div className="imgWtext">
        <Image alt="image d'additif" filename={"vairon.png"} />  
          <span>Vairons</span>
        </div>

      </div>
    </section>
    

  </Layout>
)
export default Appats
