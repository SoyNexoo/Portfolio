import { Folder, House, Person, SocialMedia } from "../../utils/Icons";
import s from "./Nav.module.css";
import { motion } from "framer-motion";
const Nav = () => {
  const scrollToElement = (elementSelector, instance = 0) => {
    const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
      elements[instance].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  };
  return (
    <motion.div
      className={s.container}
      initial={{ top: "25%", opacity: 0 }}
      animate={{ opacity: 1, top: "50%" }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
    >
      <nav className={s.nav}>
        <ul>
          <li onClick={() => scrollToElement("#home")}>
            <House width={30}></House>
          </li>
          <li onClick={() => scrollToElement("#aboutMe")}>
            <Person width={30}></Person>
          </li>
          <li>
            <Folder width={30}></Folder>
          </li>
          <li>
            <SocialMedia width={30}></SocialMedia>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

export default Nav;
