import React from "react"

import Image from "../components/image"



const ImageParallax2 = (props) => (
  <div className="img_container_loco2" data-scroll data-scroll-speed="1">
      <div className="img_container_loco2_image" data-scroll data-scroll-speed="0.7" data-scroll-delay="0.1">
      <Image alt={props.alt} filename={props.filename} />
      </div>
  </div>
)

export default ImageParallax2
