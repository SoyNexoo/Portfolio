import { motion } from "framer-motion";
import s from "./AboutMe.module.css";
import {
  AkarIconsCssFill,
  AkarIconsNodeFill,
  AkarIconsReduxFill,
  Express,
  Figma,
  MdiBootstrap,
  MdiGithub,
  MdiSlack,
  ProfilePic,
  React,
  TablerBrandFramerMotion,
  TeenyiconsJavascriptOutline,
  WhhPgsql,
} from "../../utils/Icons";
import Reveal from "../../components/reveal/Reveal";
const AboutMe = () => {
  return (
    <div className={s.container} id="aboutMe">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className={s.img}
      >
        <ProfilePic width="400" />
      </motion.div>
      <div className={s.info}>
        <div className={s.name}>
          <Reveal>
            <h1>JULIAN LUQUE</h1>
            <h5>
              Joven <span>desarrollador web</span>
            </h5>
          </Reveal>
        </div>
        <div className={s.description}>
          <p>
            Graduado de HENRY en el stack PERN y con experiencia en diseño para
            equipos E-Sports. Estoy en busca de mi primer trabajo como
            desarrollador web. Apasionado por <span>React</span> y{" "}
            <span>JavaScript</span>, me esfuerzo por crear experiencias web
            sorprendentes.
          </p>
        </div>
        <div className={s.stack}>
          <h3>Mi stack:</h3>
          <div className={s.rule}></div>
          <div className={s.secContainer}>
            <div className={s.section}>
              <h3>Frontend</h3>
              <div className={s.habs}>
                <React width={40}></React>
                <Figma width={40}></Figma>
                <MdiBootstrap width={40}></MdiBootstrap>
                <AkarIconsReduxFill width={40}></AkarIconsReduxFill>
                <TablerBrandFramerMotion width={40}></TablerBrandFramerMotion>

                <AkarIconsCssFill width={40}></AkarIconsCssFill>
              </div>
            </div>
            <div className={s.section}>
              <h3>Backend</h3>
              <div className={s.habs}>
                <TeenyiconsJavascriptOutline
                  width={40}
                ></TeenyiconsJavascriptOutline>
                <Express width={40}></Express>
                <AkarIconsNodeFill width={40}></AkarIconsNodeFill>
              </div>
            </div>
          </div>
          <div className={s.section}>
            <h3>Herramientas</h3>
            <div className={s.habs}>
              <MdiGithub width={40}></MdiGithub>
              <MdiSlack width={40}></MdiSlack>
              <WhhPgsql width={40}></WhhPgsql>
            </div>
          </div>
        </div>
      </div>
      <div className={s.blur}></div>
      <div className={s.blur2}></div>
    </div>
  );
};

export default AboutMe;
