import { testimonials } from "../constants";
import Testicard from "./Testicard";
import { motion } from "framer-motion";
import {useEffect, useRef, useState} from 'react'
const Testimonials = () => {
  const carousel = useRef<any>()
  const [width, setWidth] = useState(0)

  useEffect(()=>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])
  return (
    <div className="bg-lemon z-40 py-8 mt-8">
      <h2 className="w-full text-center mx-auto font-bold text-4xl text-black my-20">
        Testimonials
      </h2>
      {/* <div className="flex flex-col sm:flex-row flex-wrap gap-16 mt-20 innerWidth px-3 sm:px-5 lg:px-7 items-center justify-center">
        {testimonials.map((t, i) => {
          return <Testicard key={i} {...t}></Testicard>;
        })}
      </div> */}

      <motion.div className="carousel pt-16" ref={carousel}>
        <motion.div className="inner-carousel"
        whileTap={{cursor:'grabbing'}}
        drag='x'
        dragConstraints={{right:0 , left: -width }}
        >
          {testimonials.map((t, i) => {
            return <Testicard key={i} {...t}></Testicard>;
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testimonials;
