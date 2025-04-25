import { motion, useDragControls } from "framer-motion";

const Lesson8 = () => {
    const controls = useDragControls()

  return (
    <div className="border border-red-600 size-[450px] flex flex-wrap justify-center items-center ">
      <div onPointerDown={(e) => controls.start(e)} className="bg-blue-500 w-60 h-10 flex justify-center items-center rounded-lg"></div>
      <motion.div
        className="bg-amber-500 rounded-lg size-64 flex justify-center items-center"
        drag = "x"
        dragListener={false}
        dragControls={controls}
        dragConstraints={{left: 0, right:0}}
      />
    </div>
  );
};

export default Lesson8;
