import Reveal from "../../components/reveal/Reveal";
import { Love, MdiGithub, MdiGmail, MdiLinkedin } from "../../utils/Icons";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.container}>
      <div className={style.contact}>
        <div className={style.thanks}>
          <Reveal>
            <h1>Gracias por tu tiempo! 🙌</h1>
          </Reveal>
          <div className={style.underline}></div>
          <Reveal>
            <p>
              Si estás interesado en colaborar, aprender más sobre mis proyectos
              o simplemente charlar sobre código y diseño, no dudes en
              contactarme a través de mis redes sociales. Estoy siempre
              dispuesto a conectar con otros apasionados por la tecnología y el
              desarrollo web.{" "}
            </p>
          </Reveal>
          <div className={style.social}>
            <Reveal>
              <a
                href="https://github.com/SoyNexoo"
                id={style.github}
                target="__blank"
              >
                <MdiGithub width={30}></MdiGithub>
              </a>
            </Reveal>
            <Reveal>
              <a
                id={style.linkedin}
                href="https://www.linkedin.com/in/julian-luque-2ba0281a6/"
                target="__blank"
              >
                <MdiLinkedin width={30}></MdiLinkedin>
              </a>
            </Reveal>
            <Reveal>
              <a
                id={style.mail}
                href="mailto:julianlu29.03@gmail.com"
                target="__blank"
              >
                <MdiGmail width={30}></MdiGmail>
              </a>
            </Reveal>
          </div>
          <Reveal>
            <p>No funciono el link del correo? Perfecto, este es mi correo</p>
          </Reveal>
          <Reveal>
            <p>Julianlu29.03@gmail.com</p>
          </Reveal>
        </div>
      </div>
      <div>
        <Love width={550}></Love>
      </div>
    </div>
  );
};

export default Contact;
