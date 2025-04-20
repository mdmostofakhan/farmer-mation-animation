import {motion} from "framer-motion"
import { useRef } from "react"

const parent = {
    hidden : {opacity: 0, scale: 0.9},
    visible : {opacity: 1, scale: 1,
     transition:{
       duration: 3,
        ease: "easeInOut",

      }},
      hover: {
       opacity: 1
       },
       tap: {
        scale: 1.1,
       boxShadow: '0px 10px 10px #000'
        
       }
  }

const LessonTow = () => {
   const parentRef = useRef(null)
 
    return(
       <div ref={parentRef} className="  size-[400px] flex justify-center items-center border border-amber-800">
          <motion.div className="bg-cyan-500 size-64  rounded-lg"
         variants={parent}
          initial = "hidden"
          animate = "visible"
          whileHover="hover"
          whileTap="tap"
          drag 
          
          dragConstraints = {parentRef}
          dragElastic={0.7}
         
         >
         </motion.div>
       </div>
    )
}


export default LessonTow;