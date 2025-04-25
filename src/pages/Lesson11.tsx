import {AnimatePresence, motion} from "framer-motion";
import { useState } from "react";


const Lesson11 = () => {
    const [visible, setVisible] = useState(true)

    const box = {
        hidden : {opacity: 0, scale: 0.8, rotate: 180},
        visible: {opacity: 1, scale: 1, rotate: 90,
            transition: {
                duration: 0.5
            },
        },
        exit: {
            opacity: 0, 
            rotate: 360,
            y:350,
            transition: {
                duration: 1.5,
            }
        }
    }

    return(
        <div className="border border-red-800 flex flex-col justify-center items-center size-[500px]">
          
          <motion.button layout onClick={() => setVisible(!visible)}>
            <span className="border border-amber-700 py-3 px-10 bg-indigo-300 text-xl text-red-600 font-bold rounded-lg">
              Toggle
            </span>
          </motion.button>
        
           <AnimatePresence>
           { visible && (
            <motion.div className="bg-indigo-500 size-60 rounded-lg flex m-5 flex-wrap"
            variants={box}
            initial= "hidden"
            animate = "visible"
            exit="exit"
           >
          </motion.div> 
              )
           }
           </AnimatePresence>
        </div>
    )
}
export default Lesson11;