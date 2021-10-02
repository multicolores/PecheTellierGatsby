import React, {useState, useRef } from "react";
import { Link } from "gatsby"
import { Slide } from 'react-slideshow-image';
import { motion } from "framer-motion";
import gsap from "gsap";

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


  const [revealImg, setRevealImg] = useState({
    show: false,
    show_articles: true,
    show_amorces: false,
    show_appats: false,
    class: "r",
  });

  let ImageProduit = useRef(null);
  let ImageArticles = useRef(null);
  let ImageAmorces = useRef(null);
  let ImageAppats = useRef(null);


  const handleImages = image => {
    if(image === "ImageArticles"){
      gsap.to(ImageArticles, {
        duration: 0.4,
        opacity: 1,
        ease: "power3.inOut",        
      });

    }
    if(image === "ImageAmorces"){
        gsap.to(ImageAmorces, {
          duration: 0.4,
          opacity: 1,
          ease: "power3.inOut",        
        });
     }
    if(image === "ImageAppats"){
      gsap.to(ImageAppats, {
        duration: 0.4,
        opacity: 1,
        ease: "power3.inOut",        
      });
    }

};

const handleImagesReturn = image => {
  if(image === "ImageArticles"){
    gsap.to(ImageArticles, {
      duration: 0.4,
      opacity:0,
  });
  
  }
  if(image === "ImageAmorces"){
    gsap.to(ImageAmorces, {
      duration: 0.4,
      opacity:0
  });
  }
  if(image === "ImageAppats"){
    gsap.to(ImageAppats, {
      duration: 0.4,
      opacity:0
  });
  }

};


  return (
    <Layout>
      <SEO title="Home" />
      <Header />

     {/* //! ancien hero  */}
      {/* <section className="hero_section">
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
      </section> */}

      <section className="hero_section">
      <div className="image_container">
            <BigImage alt="image de fond représentant un pêcheur" filename={"flat-peche2.png"} />
        </div>
        <div className="text_container" data-scroll data-scroll-speed="1">
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
          <motion.p initial={{opacity:0, y: -10}} animate={{opacity: 1, y:0}} transition={{ duration: 0.3, delay: 0.9}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem dolores quos non nihil beatae.</motion.p>
          <a href="#magasin">découvrez notre magasin</a>
        </div>

      </section>

      <section className="magasin" id="magasin">
        <div className="svg_container">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#00539c" d="M37.2,-36.1C51.7,-32.2,69.5,-23.8,69.9,-13.4C70.4,-3.1,53.7,9.1,41.7,18.5C29.7,28,22.3,34.5,14,37C5.6,39.4,-3.8,37.7,-15.9,36.5C-28.1,35.2,-43.1,34.4,-54.7,26C-66.2,17.5,-74.3,1.5,-72.5,-13.5C-70.8,-28.6,-59.2,-42.7,-45.5,-46.8C-31.8,-50.8,-15.9,-44.9,-2.3,-42.2C11.3,-39.5,22.7,-40,37.2,-36.1Z" transform="translate(100 100)" />
        </svg>
        </div>
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

        <div className="text_container">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores nostrum non minus officia, aliquid debitis adipisci voluptate quis eveniet inventore veritatis dolorum obcaecati corrupti quae voluptatem aperiam impedit. Voluptas!</p>
            <div className="links">
              <div onMouseEnter={() => handleImages("ImageArticles")} onMouseOut={() => handleImagesReturn("ImageArticles")} >
               <Link to="/articles">Articles</Link>
              </div>              
              <div onMouseEnter={() => handleImages("ImageAmorces")} onMouseOut={() => handleImagesReturn("ImageAmorces")} >
               <Link to="/amorces">Amorces</Link>
              </div>      
              <div onMouseEnter={() => handleImages("ImageAppats")} onMouseOut={() => handleImagesReturn("ImageAppats")} >
               <Link to="/appats">Appâts</Link>
              </div>       
            </div>
        </div>

        <div ref={el => (ImageProduit = el)} className="imgs_container"> 
          <div className="permanantImg"> <Image alt="image du magasin" filename={"image 35-min.png"} /></div>
          <div ref={el => (ImageArticles = el)} className="articleimg"> <Image alt="images des produits" filename={"pecheur1.jpg"} /></div>
          <div ref={el => (ImageAmorces = el)}> <Image alt="image de leurs" filename={"magasin-interieur.jpg"} /></div>
          <div ref={el => (ImageAppats = el)}> <Image alt="image d'additifs" filename={"vers-farine.jpg"} /></div>
        </div>

        {/* <div className="imgs_container">



              <AnimatePresence>
                {revealImg.show_amorces && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealImg.class}
                  >
                <Image alt="images des produits" filename={"pecheur1.jpg"} />
 
                </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {revealImg.show_appats && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={revealImg.class}
                  >
                <Image alt="images des produits" filename={"pecheur1.jpg"} />
 
                </motion.div>
                )}
              </AnimatePresence>



          {/* <Image alt="images des produits" filename={"pecheur1.jpg"} /> 
        </div> */}

                {/* <Link to="/articles">
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
        </Link> */}
      </section>


      <div className="marques">
      {/* <h1>Les plus grandes marques de pêches</h1> */}
        <Drag />
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="svg_avis"><path fill="#00539c" fill-opacity="1" d="M0,288L80,250.7C160,213,320,139,480,138.7C640,139,800,213,960,234.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

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
        <div class="waves-bottom-container">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
              <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
      </div>
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
