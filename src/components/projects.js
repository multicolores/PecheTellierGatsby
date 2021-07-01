import React from "react"
import "./styles.scss";

import BigImage from "./big_image"
import Image from "./image"
import Drag from "./drag"



const Project = (props) => {
    return(
        <div className="project">
            {/* <header>
                <div className="text_container">
                    <h1>{props.title}</h1>
                    <p>{props.paragraphe}</p>
                    <a href="#a_propos">En savoir plus</a>
                </div>

                <div className="big_image">
                    <BigImage alt="image" filename={props.image_url} />
                </div>
            </header> */}
            <section className="project_header container">
                    <h1 data-scroll data-scroll-speed="2">{props.title}</h1>

                <div className="big_image">
                    <div className="img_container_loco" data-scroll data-scroll-speed="-1.7">
                    <BigImage alt="image" filename={props.image_url} />
                    </div>
                </div>
            </section>


            <div className="big_p" id="a_propos" data-scroll data-scroll-speed="1.25">
                <p>{props.paragraphe2}</p>
            </div>
            <div className="gallery imgs_1">
                    <BigImage alt="image" filename={props.image_url_1} />
            </div>
            
            <section className="project_text">
                <div className="img">
                        {/* <div className="border top" data-scroll data-scroll-speed="2"></div> */}
                        <div data-scroll data-scroll-speed="-1.7">
                        <BigImage alt="image" filename={props.image_url_3} />
                        </div>
                        {/* <div className="border bottom" data-scroll data-scroll-speed="1.2"></div> */}
                </div>
                <div className="text" id="a_propos" data-scroll data-scroll-speed="2">
                    <p>{props.paragraphe}</p>
                </div> 
            </section>

            <div className="gallery imgs_2">
                    <Image alt="image" filename={props.image_url_2} />
                    <Image alt="image" filename={props.image_url_3} />
            </div>
            <div className="gallery imgs_1">
                    <BigImage alt="image" filename={props.image_url_4} />
            </div>
            <div className="gallery imgs_4">
                    <Image alt="image" filename={props.image_url_2} />
                    <Image alt="image" filename={props.image_url_5} />
                    {/* <Image alt="image" filename={props.image_url_3} />
                    <Image alt="image" filename={props.image_url_1} /> */}
            </div>

            <div className="drag_container-projects container">
                <Drag />
            </div>
        </div>

    )
}
  

  
  export default Project
  