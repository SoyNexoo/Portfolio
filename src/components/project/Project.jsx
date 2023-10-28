/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect } from "react";
import s from "./Project.module.css";
import Reveal from "./../reveal/Reveal";
const Project = ({ title, description, image, tech }) => {
  const [showDesc, setShowDesc] = useState(false);

  if (showDesc == false) {
    description = description.split("").slice(0, 90).join("");
    description = description + "...";
  }

  const list = () => {
    return tech.map((item, index) => {
      const lastIndex = index == tech.length - 1;
      return (
        <li key={index}>
          {lastIndex ? null : " "}
          {item}
          {lastIndex ? null : <span>-</span>}
          {lastIndex ? null : " "}
        </li>
      );
    });
  };

  return (
    <div className={`${s.container}`}>
      <img src={image} alt={title} />
      <Reveal>
        <ul className={s.list}>{list()}</ul>
      </Reveal>

      <Reveal>
        <h1>{title}</h1>
      </Reveal>
      <Reveal>
        <p className={s.description}>
          {description}{" "}
          {showDesc ? (
            <span onClick={() => setShowDesc(false)}>Mostrar menos</span>
          ) : (
            <span onClick={() => setShowDesc(true)}>Mostrar mas</span>
          )}
        </p>
      </Reveal>
    </div>
  );
};

export default Project;
