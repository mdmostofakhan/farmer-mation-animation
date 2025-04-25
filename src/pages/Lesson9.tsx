import {motion, useMotionValue, useTransform} from "framer-motion"  
const Lesson9 = () => {
    const x = useMotionValue(0) 
    const scale = useTransform(x, [-200, 200], [0.5, 1] )
    const rotate = useTransform(x, [-200, 200], [0.5, 180] )
    
    return(
        <div className="border border-red-600 size-[450px] flex flex-wrap justify-center items-center ">
     
        <motion.div
        className="bg-amber-500 rounded-lg size-64 flex justify-center items-center"
        style={{x, scale, rotate}}
        drag="x"
        dragConstraints={{left: 0, right:0}}
        
      />
    </div>
    )
}
export default Lesson9;