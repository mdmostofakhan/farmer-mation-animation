import {motion, useAnimate} from "framer-motion"
import { useEffect } from "react"


const Lesson7 = () => { 
    const [scope, animate] = useAnimate()

    useEffect(() => {

        animate([
            [scope.current, {rotate: 90}],
            [scope.current, {opacity: 0}],
            [scope.current, {rotate: 180}],
            [scope.current, {opacity: 1}],
            [scope.current, {rotate: 360}],
            [scope.current, {y: 200}],
            [scope.current, {y: -200}],
            [scope.current, {y: 200}],
            [scope.current, {y: 0}],
          
        ])
    },[])

    return(
        <div className="border border-red-600 size-[400px] flex justify-center items-center">
           <motion.div
           className=" bg-amber-300 rounded-lg size-60 flex justify-center items-center flex-wrap"
            ref={scope}
            
           ></motion.div>
        </div>
    )
}
export default Lesson7;