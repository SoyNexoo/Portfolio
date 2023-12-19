import Reveal from "../../components/reveal/Reveal";
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
        <Reveal>
          <h5>Programador web - Junior</h5>
        </Reveal>
        <Reveal>
          <h1>
            HOLA, SOY JULIAN LUQUE<span>!</span>
          </h1>
        </Reveal>
        <Reveal>
          <p>
            Desarrollador web junior apasionado por la programación y el diseño
            <span> creativo</span>! Me destaco por mi proactividad y mi
            capacidad para organizarme, lo que me permite abordar proyectos
            desafiantes con
            <span> entusiasmo</span> y determinación<span>.</span>
          </p>
        </Reveal>
        <Reveal>
          <button>
            {" "}
            <a
              href={
                "https://drive.google.com/file/d/1jZHRVnv9EsBkXSwmw4MJncnYd0jU6dR8/view?usp=sharing"
              }
              target="__blank"
              rel="noopener noreferrer"
            >
              Mi curriculum!
            </a>
          </button>
        </Reveal>
      </div>
      <Programming width={500}></Programming>
      <div className={s.blur}></div>
      <div className={s.blur2}></div>
    </motion.div>
  );
};

export default Home;
