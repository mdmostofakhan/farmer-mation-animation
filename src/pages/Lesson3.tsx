import { motion} from 'framer-motion'

const parent = { 
    hidden: { x: 0, y: 0, opacity: 0 },
    visible: { 
        x: [0, 300,-300, 0,],
        y: [0, 300, -300, 0],
        rotate: [0, 300, -300, 0],
        opacity: 1,
        transition: {
            ease: "linear",
            duration: 5,
            repeat: Infinity,
            opacity: {
                duration: 0.5
            },
            rotate: {
                delay: 1,
                repeat: Infinity
            }
        },
    },
}
const Lesson3 = () => {
    return(
       <div className=' flex justify-center items-center border border-b-black size-[500px]'>
         <motion.div className='bg-amber-600 size-64 rounded-lg '
        variants={parent} 
        initial = "hidden"
         animate = "visible"
        >
        </motion.div>
       </div>
    )
}
export default Lesson3;