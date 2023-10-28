import React from "react";
import { motion } from "framer-motion";
import s from "./AboutMe.module.css";
import { ProfilePic } from "../../utils/Icons";
import Reveal from "../../components/reveal/Reveal";
const AboutMe = () => {
  return (
    <div className={s.container} id="aboutMe">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className={s.img}
      >
        <ProfilePic width="400" />
      </motion.div>
      <div>
        <Reveal>
          <h1>JULIAN LUQUE</h1>
        </Reveal>
      </div>
      <div className={s.blur}></div>
      <div className={s.blur2}></div>
    </div>
  );
};

export default AboutMe;
