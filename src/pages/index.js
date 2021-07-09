import React from "react"
import { Link } from "gatsby"
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'
import Layout from "../components/layout"
import Image from "../components/image"
import ImageParallax from "../components/image_parallax"
import SEO from "../components/seo"
import Header from "../components/header"
import BigImage from "../components/big_image"
import Drag from "../components/drag"


const slideText = [
  {
    nom: 'Nom Prenom',
    texte: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    key: '1',
  },
  {
    nom: 'Nom Prenom',
    texte: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    key: '2',
  },
  {
    nom: 'Nom Prenom',
    texte: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    key: '3',
  },
  {
    nom: 'Nom Prenom',
    texte: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    key: '4',
  },
];

const proprietes ={
  duration: 5000,
  transitionDuration: 800,
  infinite: true,
  indicators: true,
  arrows: true,
  easing: "ease",
}


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
            <ImageParallax alt="image du magasin" filename={"magasin-interieur.jpg"} />
          </div>
          <div className="image2">
            <ImageParallax alt="image du magasin" filename={"magasin-interieur.jpg"} />
          </div>
        </div>
      </section>

      <section className="produits">
        <Link to="/articles">
          <div className="produits_img_container">
              <Image alt="image d'un pêcheur" filename={"pecheur1.jpg"} />
              <h2>Articles</h2>
          </div>
        </Link>
        <Link to="/amorces">
          <div className="produits_img_container">
              <Image alt="image de leurs" filename={"magasin-interieur.jpg"} /> //! mettre / prendre image du rayon des amorces 
              <h2>Amorces</h2>
          </div>
        </Link>
        <Link to="/appats">
            <div className="produits_img_container">
                <Image alt="image d'additifs" filename={"vers-farine.jpg"} />
                <h2>Appâts</h2>
            </div>
        </Link>
      </section>


      <section className="avis">
        <h1>Écoutez ce que nos fidèles clients disent sur nous </h1>
        <div className="slide-container">
          <Slide {...proprietes}>
          {slideText.map((slideText, index)=> (
              <div className="each-slide" key={index}>
                <div className="avis_text">
                  <p>{slideText.texte}</p>
                  <h3>{slideText.nom}</h3>
                </div>
              </div>
            ))} 
          </Slide>
        </div>

        <Link to="https://www.google.com/search?q=peche+tellier&rlz=1C1CHBF_frFR791FR792&oq=peche+tellier&aqs=chrome..69i57j69i60l3.1449j0j1&sourceid=chrome&ie=UTF-8#lrd=0x47e81866c2466957:0xfdc30cdbf64197bf,1,,,">
          <Image alt="logo google review" filename={"google-reviews.png"} />
        </Link>
      </section>



    <div className="marques">
      {/* <h1>Les plus grandes marques de pêches</h1> */}
      <Drag />

    </div>

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
