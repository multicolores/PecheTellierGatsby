import React from "react"

import Image from "../components/image"



const ImageParallax = (props) => (
  <div className="img_container_loco" data-scroll data-scroll-speed="-1.7">
    <Image alt={props.alt} filename={props.filename} />
  </div>
)

export default ImageParallax
