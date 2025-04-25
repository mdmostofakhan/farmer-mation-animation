import { motion, useScroll } from "framer-motion";

const Lesson10 = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="bg-indigo-500  top-0 fixed h-2 w-full origin-center"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default Lesson10;
