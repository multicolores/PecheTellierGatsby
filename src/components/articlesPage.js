import React from "react"
import "./styles.scss";

import BigImage from "./big_image"
import Image from "./image"



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

        </div>

    )
}
  

  
  export default Project
  