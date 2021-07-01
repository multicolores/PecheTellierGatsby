import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import Image from "./image"


const Drag = () => (
    <div className="drag_coontainer" >

    <motion.div className="drag" drag="x" dragConstraints={{ left: -1100, right: 0 }} >
    <div className="images_container">
      <div className="img_invi"> </div>
      <Image alt="image" filename="image1.jpg" />
      <Link to="/project_1">Projet</Link>
    </div>
    <div className="images_container" >
       <div className="img_invi"> </div>
       <Image alt="image" filename="image2.jpg" />
       <Link to="/project_2">
         Projet
       </Link>
    </div>
    <div className="images_container" >
    <div className="img_invi"> </div>
    <Image alt="image" filename="image3.jpg" />
       <Link to="/project_3">
         Projet
       </Link>
    </div>
    <div className="images_container" >
    <div className="img_invi"> </div>
    <Image alt="image" filename="image4.jpg" />
       <Link to="/project_4">
         Projet
       </Link>
    </div>

  </motion.div>
  </div>

  )
  

  
  export default Drag
  