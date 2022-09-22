import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/styles/App.css";
// import image from "./images/background.jpg"

import Nav from "./Components/Nav";
import Stack from "./Components/Stack";
import MyStory from "./Components/MyStory";
import Skills from "./Components/Skills";
import ProfileCard from "./Components/ProfileCard";
import Projects from "./Components/Projects";
import SoftSkills from "./Components/SoftSkills";
import Footer from "./Components/Footer";

function App() {
  const url =
    "https://firebasestorage.googleapis.com/v0/b/litos-portfolio.appspot.com/o/Job%20Vid.mp4?alt=media&token=b0b7b109-cd7e-4e85-91a2-9b5c657fe219";

  return (
    <main className="app">
      <Router>
        <Nav />
        <Stack />
        <MyStory url={url} />
        <Routes>
          <Route path="/Skills" element={<Skills />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/MyStory" element={<MyStory />}></Route>
          <Route path="/softskills" element={<SoftSkills />}></Route>
        </Routes>
        <Projects />
        <Skills />
        <SoftSkills />
        <ProfileCard />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
