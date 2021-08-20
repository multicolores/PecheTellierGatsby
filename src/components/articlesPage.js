import React from "react"
import "./styles.scss";

import BigImage from "./big_image"
import ImageParallax from "./image_parallax"



const Project = (props) => {
    return(
        <div className="articlesPages">
            <section className="hero-articles">
 
                <div className="bg_image">
                    <div className="img_container_loco" data-scroll data-scroll-speed="-1.7">
                        <BigImage alt="image de fond d'un brochet" filename={props.image_url} />
                    </div>
                </div>
                <h1>{props.title}</h1>
            </section>

        <section className="text-img-section">
            <div className="text_container">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere itaque corporis quia, eaque ducimus maiores, sit explicabo soluta inventore fuga est, dolores quod quo dignissimos blanditiis vitae id possimus reprehenderit amet deleniti sint. Corrupti neque mollitia quas at saepe ut asperiores culpa voluptate, porro beatae temporibus quis dolorum doloribus laborum!</p>
            </div>
            <div className="image_container">
            <div className="image1">
                <ImageParallax alt="image du magasin" filename={props.image_url2} />
            </div>
            <div className="image2">
            <ImageParallax alt="image du magasin" filename={props.image_url3} />
            </div>
            </div>
        </section>

        </div>

    )
}
  

  
  export default Project
  