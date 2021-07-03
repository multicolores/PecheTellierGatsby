import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import ImageParallax from "../components/image_parallax"
import SEO from "../components/seo"
import Header from "../components/header"
import BigImage from "../components/big_image"



const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Header />

      <section className="hero_section">
        <div className="bg_image">
          <div className="img_container_loco" data-scroll data-scroll-speed="-1.7">
            <BigImage alt="image de fond d'un brochet" filename={"pike-bg.jpg"} />
          </div>
        </div>
        <div className="title_container" data-scroll data-scroll-speed="2.7">
          <div className="span_container">
            <span className="span_1">P</span>
            <span className="span_2">ê</span>
            <span className="span_3">c</span>
            <span className="span_4">h</span>
            <span className="span_5">e</span>
          </div>
          <div className="span_container">
            <span className="span_1">T</span>
            <span className="span_2">E</span>
            <span className="span_3">L</span>
            <span className="span_4">L</span>
            <span className="span_5">I</span>
            <span className="span_6">E</span>
            <span className="span_7">R</span>
          </div>
          <a href="#magasin">découvrez notre magasin</a>
        </div>
      </section>


      <section className="magasin" id="magasin">
        <div className="text_container">
          <h1>Notre</h1>
          <h1>Magasin</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className="image_container">
          <div className="image1">
            <ImageParallax alt="image du magasin" filename={"pike-bg.jpg"} />
          </div>
          <div className="image2">
            <ImageParallax alt="image du magasin" filename={"pike-bg.jpg"} />
          </div>
        </div>
      </section>

      <section className="produits">
        <Link to="/">
          <div className="produits_img_container">
              <ImageParallax alt="image d'un pêcheur" filename={"pecheur1.jpg"} />
              <h2>Articles</h2>
          </div>
        </Link>
        <Link to="/leurres">
          <div className="produits_img_container">
              <ImageParallax alt="image de leurs" filename={"leurres.jpg"} />
              <h2>Leurres</h2>
          </div>
        </Link>
        <Link to="/additifs">
            <div className="produits_img_container">
                <ImageParallax alt="image d'additifs" filename={"vers-farine.jpg"} />
                <h2>Additifs</h2>
            </div>
        </Link>
      </section>

    </Layout>
  );
};

export const WorkImage = (props) => {
  return (
    <div className="work_item">
      <Link to={props.url}>
        <h3 data-scroll data-scroll-speed="3">{props.work_name}</h3>
        <div className="ImgContainer"><Image alt="image" filename={props.image} /></div>
      </Link>
    </div>

  );
};



export default IndexPage
