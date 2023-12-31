import { motion } from "framer-motion";
import s from "./AboutMe.module.css";
import {
  AkarIconsCssFill,
  AkarIconsNodeFill,
  AkarIconsReduxFill,
  CibTypescript,
  Express,
  FaBrandsSass,
  Figma,
  MdiBootstrap,
  MdiGithub,
  MdiSlack,
  MdiTailwind,
  ProfilePic,
  React,
  TablerBrandFramerMotion,
  TeenyiconsJavascriptOutline,
  TeenyiconsMongodbOutline,
  TeenyiconsNextjsSolid,
  WhhPgsql,
} from "../../utils/Icons";
import Reveal from "../../components/reveal/Reveal";
import Appear from "../../components/appear/Appear";
const AboutMe = () => {
  const frontend = [
    <React key={"react"} width={40}></React>,
    <MdiBootstrap key={"bootstrap"} width={40}></MdiBootstrap>,
    <AkarIconsReduxFill key={"redux"} width={40}></AkarIconsReduxFill>,
    <TablerBrandFramerMotion
      key={"framer"}
      width={40}></TablerBrandFramerMotion>,
    <AkarIconsCssFill key={"css"} width={40}></AkarIconsCssFill>,
    <FaBrandsSass key={"Sass"} width={40}></FaBrandsSass>,
    <MdiTailwind width={40} key={"Tailwind"}></MdiTailwind>,
    <CibTypescript width={40} key={"Typescript"}></CibTypescript>,
    <TeenyiconsNextjsSolid width={40} key={"NextJS"}></TeenyiconsNextjsSolid>,
  ];

  const backend = [
    <TeenyiconsJavascriptOutline
      key={"js"}
      width={40}></TeenyiconsJavascriptOutline>,
    <Express key={"express"} width={40}></Express>,
    <AkarIconsNodeFill key={"node"} width={40}></AkarIconsNodeFill>,
    <TeenyiconsMongodbOutline
      width={40}
      key={"mongo"}></TeenyiconsMongodbOutline>,
  ];

  const tools = [
    <Figma key={"figma"} width={40}></Figma>,
    <MdiGithub key={"github"} width={40}></MdiGithub>,
    <MdiSlack key={"slack"} width={40}></MdiSlack>,
    <WhhPgsql key={"postgres"} width={40}></WhhPgsql>,
  ];
  return (
    <div className={s.container} id="aboutMe">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className={s.img}>
        <ProfilePic width="400" />
      </motion.div>
      <div className={s.info}>
        <div className={s.name}>
          <Reveal>
            <h5>
              Joven <span>desarrollador web</span>
            </h5>
            <h1>JULIAN LUQUE</h1>
          </Reveal>
        </div>
        <div className={s.description}>
          <Reveal>
            <p>
              Con habilidades destacadas en el stack PERN y valiosa experiencia
              en diseño UX / UI. Actualmente en búsqueda activa de oportunidades
              como desarrollador web. Apasionado por React y JavaScript, me
              dedico a la creación de experiencias web impactantes.
            </p>
          </Reveal>
        </div>
        <div className={s.stack}>
          <Reveal>
            <h3>Mi stack:</h3>
          </Reveal>
          <div className={s.rule}></div>
          <div className={s.secContainer}>
            <div className={s.section}>
              <h3>Frontend</h3>
              <div className={s.habs}>
                <Appear props={frontend}></Appear>
              </div>
            </div>
            <div className={s.section}>
              <h3>Backend</h3>
              <div className={s.habs}>
                <Appear props={backend}></Appear>
              </div>
            </div>
          </div>
          <div className={s.section}>
            <h3>Herramientas</h3>
            <div className={s.habs}>
              <Appear props={tools}></Appear>
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
