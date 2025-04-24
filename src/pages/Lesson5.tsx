import {motion, useCycle} from "framer-motion"

const Lesson5 = () => {

    const boxAnimation = [ 
        {x: 0, y: 0, opacity: 1},
        {x: 100, y: 100, opacity: 0.5},
        {x: -100, y: 100, opacity: 0.25},
        {x: 100, y: -100, opacity: 0},
        
    ]

    const [animates, cycle] = useCycle(...boxAnimation )
     
    

    return(
        <div  className="border flex justify-center items-center border-black size-[500px]">
            <motion.div className="  bg-emerald-600 size-64 rounded-lg"
             animate = {animates}
             onTap={() => cycle()}

            ></motion.div> 
        </div>
    )
}
export default Lesson5;