// import {motion} from 'framer-motion'

import './App.css'
import Lesson from './pages/Lesson'
import Lesson3 from './pages/Lesson3'
import Lesson4 from './pages/Lesson4'
import Lesson5 from './pages/Lesson5'
import Lesson6 from './pages/Lesson6'
import Lesson7 from './pages/Lesson7'
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
       <div className=' flex justify-center items-center h-screen'>
        {/* <Lesson5/> */}
       </div>
       <div className='w-full flex-col flex justify-center items-center '>
         {/* <div className=' bg-red-500 h-[200vh] w-full '>  */}
         {/* <Lesson6></Lesson6> */}
         {/* </div> */}
         <div className=' flex justify-center items-center h-screen'>
         <Lesson7/>
       </div>
       </div>
 </div>
  )
}

export default App
