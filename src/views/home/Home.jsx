import { Programming } from "../../utils/Icons";
import s from "./Home.module.css";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className={s.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="home"
    >
      <div className={s.text}>
        <h5>Programador web - Junior</h5>
        <h1>
          HOLA, SOY JULIAN LUQUE<span>!</span>
        </h1>
        <p>
          Desarrollador web junior apasionado por la programación y el diseño
          <span> creativo</span>! Me destaco por mi proactividad y mi capacidad
          para organizarme, lo que me permite abordar proyectos desafiantes con
          <span> entusiasmo</span> y determinación<span>.</span>
        </p>
        <button>Contactame!</button>
      </div>
      <Programming width={500}></Programming>
      <div className={s.blur}></div>
      <div className={s.blur2}></div>
    </motion.div>
  );
};

export default Home;
