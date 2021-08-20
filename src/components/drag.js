import React from "react"
import { motion } from "framer-motion"

import Image from "./image"


const Drag = () => (
    <div className="drag_coontainer" >

    <motion.div className="drag" drag="x" dragConstraints={{ left: -1700, right: 0 }} >
    <Image alt="image d'additif" filename={"marque-11.png"} />
    <Image alt="image d'additif" filename={"marque-5.png"} />
    <Image alt="image d'additif" filename={"marque-7.png"} />
    <Image alt="image d'additif" filename={"marque-8.png"} />
    <Image alt="image d'additif" filename={"marque-1.png"} />
    <Image alt="image d'additif" filename={"marque-2.png"} />
    <Image alt="image d'additif" filename={"marque-3.png"} />
    <Image alt="image d'additif" filename={"marque-4.png"} />
    <Image alt="image d'additif" filename={"marque-6.png"} />
    <Image alt="image d'additif" filename={"marque-9.png"} />
    <Image alt="image d'additif" filename={"marque-10.png"} />
    <Image alt="image d'additif" filename={"marque-12.png"} />

  </motion.div>
  </div>

  )
  

  
  export default Drag
  