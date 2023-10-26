import React from "react";
import { motion } from "framer-motion";
import s from "./AboutMe.module.css";
const AboutMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className={s.container}
      id="aboutMe"
    >
      <div></div>
    </motion.div>
  );
};

export default AboutMe;
