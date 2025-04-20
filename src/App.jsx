// import {motion} from 'framer-motion'

import './App.css'
import Lesson from './pages/Lesson'
import Lesson3 from './pages/Lesson3'
import Lesson4 from './pages/Lesson4'
import LessonTow from './pages/LessonTow'

function App() {
  

  return (
    <div>
        <div className='flex justify-center items-center mt-10 '>
        <Lesson></Lesson>
       </div>
       <div className='my-20 flex justify-center items-center'>
       <LessonTow/>
       </div>
       <div className='my-20 flex justify-center items-center'>
        {/* <Lesson3/> */}
       </div>
       <div className='my-20 flex justify-center items-center'>
        <Lesson4/>
       </div>
 </div>
  )
}

export default App
