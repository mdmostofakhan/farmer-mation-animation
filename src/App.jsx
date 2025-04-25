// import {motion} from 'framer-motion'

import './App.css'
import Lesson from './pages/Lesson'
import Lesson10 from './pages/Lesson10'
import Lesson11 from './pages/Lesson11'
import Lesson3 from './pages/Lesson3'
import Lesson4 from './pages/Lesson4'
import Lesson5 from './pages/Lesson5'
import Lesson6 from './pages/Lesson6'
import Lesson7 from './pages/Lesson7'
import Lesson8 from './pages/Lesson8'
import Lesson9 from './pages/Lesson9'
import LessonTow from './pages/LessonTow'

function App() {
  
  return (
    <div>
        <div className='flex justify-center items-center mt-10 '>
        {/* <Lesson></Lesson> */}
       </div>
       <div className='my-20 flex justify-center items-center'>
       {/* <LessonTow/> */}
       </div>
       <div className='my-20 flex justify-center items-center'>
        {/* <Lesson3/> */}
       </div>
       <div className='my-20 flex justify-center items-center'>
        {/* <Lesson4/> */}
       </div>
       <div className=' flex justify-center items-center'>
        {/* <Lesson5/> */}
       </div>
       <div className='w-full flex-col flex justify-center items-center '>
         {/* <div className=' bg-red-500 h-[200vh] w-full '>  */}
         {/* <Lesson6></Lesson6> */}
         {/* </div> */}
         <div className=' flex justify-center items-center'>
         {/* <Lesson7/> */}
       </div>
         <div className=' flex justify-center items-center h-screen'>
         {/* <Lesson8/> */}
       </div>
         {/* <div className=' flex justify-center items-center h-screen'>
         <Lesson9/>
       </div> */}
         {/* <div className=' w-full flex flex-col justify-center items-center'>
          <div className='bg-red-500 h-[500vh] w-full'>
          <Lesson10/>
          </div>
       </div> */}
         <div className=' flex  justify-center items-center'>
           <Lesson11 />
       </div>
       </div>
 </div>
  )
}

export default App
