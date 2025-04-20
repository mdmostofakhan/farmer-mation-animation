
import { motion } from "framer-motion";



const Lesson = () => {

    const parent =  {
        first :  {opacity: 0},
        second : {opacity: 1}
    }

    const child = {
        first :  {opacity: 0},
        second : {opacity: 1}
    }

  return (
    <motion.div className="flex justify-center items-center gap-5 p-6 flex-wrap bg-blue-500 size-60 rounded-lg"
    variants={parent }
    initial = "first"
    animate = "second"
    transition={{     
    duration: 3,
    ease: "easeInOut",
    staggerChildren: 0.5,
    delayChildren: 0.5,
    
    }} 
    >
     <motion.div className=" flex justify-center items-center text-xl text-green-700 bg-red-500 size-20  rounded-sm"
      variants={child}
     >New</motion.div>
     <motion.div className="bg-emerald-500 flex justify-center items-center text-xl size-20 rounded-sm"
      variants={child}
     >second</motion.div>
     <motion.div className="flex justify-center items-center text-xl bg-amber-700 size-20 rounded-sm"
      variants={child}
     >third</motion.div>
     <motion.div className="flex justify-center items-center text-xl bg-amber-500 size-20 rounded-sm"
      variants={child}
     >four</motion.div>
    </motion.div>
  )
}

export default Lesson;
