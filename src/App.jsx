import "./App.css";
import Home from "./views/home/Home";
import Nav from "./components/nav/Nav";
import AboutMe from "./views/aboutme/AboutMe";

function App() {
  return (
    <>
      <Nav />
      <Home></Home>
      <AboutMe></AboutMe>
    </>
  );
}

export default App;
