import {motion, useInView, } from "framer-motion"
import { useRef } from "react";


const Lesson6 = () => {
    const ref = useRef(null)

    const inView = useInView(ref)
    console.log(inView)

    return(

        <div className="  border border-blue-700  flex flex-col justify-center items-center rounded-lg">
            <motion.div className="bg-blue-500 size-64 rounded-lg flex justify-center
             items-center "
            ref={ref}
            animate={inView ? {opacity: 1, x: 0, transition: {delay: 0.7}} : {opacity: 0, x: -500}}
        
          >
                 
            </motion.div>
        </div>

    )
}

export default Lesson6;