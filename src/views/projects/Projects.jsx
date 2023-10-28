import { useEffect, useState } from "react";
import Project from "../../components/project/Project";
import Reveal from "../../components/reveal/Reveal";
import s from "./Projects.module.css";
import arrPro from "./projects.json";
import { motion } from "framer-motion";
const Projects = () => {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const actualizarPosicion = (event) => {
      setPosicion({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", actualizarPosicion);

    return () => {
      document.removeEventListener("mousemove", actualizarPosicion);
    };
  }, []);
  return (
    <div className={s.container} id="projects">
      <header className={s.title}>
        <div className={s.line}></div>
        <Reveal noOverflow={true}>
          <h1>Proyectos</h1>
        </Reveal>
        <div className={s.line2}></div>
      </header>
      <div className={s.projects}>
        {arrPro.map((ele) => {
          return (
            <>
              <Project
                key={ele.titulo}
                title={ele.titulo}
                description={ele.descripcion}
                image={ele.imagenLink}
                tech={ele.tecnologias}
              ></Project>
            </>
          );
        })}
        <motion.div
          style={{ left: posicion.x + "px", top: posicion.y + "px" }}
          className={s.cursorBlur}
        ></motion.div>
      </div>

      <div className={s.blur}></div>
      <div className={s.blur2}></div>
    </div>
  );
};

export default Projects;
