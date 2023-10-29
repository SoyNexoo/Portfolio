import "./App.css";
import Home from "./views/home/Home";
import Nav from "./components/nav/Nav";
import AboutMe from "./views/aboutme/AboutMe";
import Projects from "./views/projects/Projects";
import Stars from "./components/stars/Stars";

function App() {
  return (
    <>
      <Stars></Stars>
      <Nav />
      <Home></Home>
      <Projects></Projects>
      <AboutMe></AboutMe>
    </>
  );
}

export default App;
