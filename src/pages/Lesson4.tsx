import {motion, useAnimationControls} from "framer-motion"
import { useEffect, useState } from "react"



const Lesson4 = () => {
    const controls = useAnimationControls()
    const [toggle, setToggle] = useState(false)
  useEffect(()=>{
     controls.start((i) => ({x: 200, transition: {delay: i* 1, duration: 1} }))
  },[])

 
    return(
        <div 
          onMouseEnter = {() => controls.stop()}
          onMouseLeave={() => controls.start((i) => ({x: 0, transition: {delay: i* 1, duration: 1,} }))}
          className="flex flex-col justify-center gap-5 items-center border border-b-cyan-600 size-[500px]">
            <motion.div className="flex justify-center items-center rounded-lg bg-indigo-500 size-64"
            animate={controls}
            custom={1}
            
            ></motion.div>
            <motion.div className="flex justify-center items-center rounded-lg bg-indigo-500 size-64"
            animate={controls}
            custom={2}
            ></motion.div>

            <motion.div className="flex justify-center items-center rounded-lg bg-indigo-500 size-64"
            animate={controls}
            custom={3}
            ></motion.div>
            
        </div>
    )
}
export default Lesson4;