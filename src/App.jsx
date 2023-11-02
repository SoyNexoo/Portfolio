import "./App.css";
import Home from "./views/home/Home";
import Nav from "./components/nav/Nav";
import AboutMe from "./views/aboutme/AboutMe";
import Projects from "./views/projects/Projects";
import Contact from "./views/contact/Contact";
function App() {
  return (
    <>
      <Nav />
      <Home></Home>
      <Projects></Projects>
      <AboutMe></AboutMe>
      <Contact></Contact>
    </>
  );
}

export default App;
