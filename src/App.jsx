import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../src/styles/App.css";
// import image from "./images/background.jpg"

import Stack from "./Components/Stack";
import MyStory from "./Components/MyStory";
import Skills from "./Components/Skills";
import ProfileCard from "./Components/ProfileCard";
import Projects from "./Components/Projects";
import SoftSkills from "./Components/SoftSkills";
import Footer from "./Components/Footer";
import { Link } from "react-router-dom";

function App() {
  const handleClick = () => {
    window.scrollTo({
      top: 720,
      left: 100,
      behavior: "smooth",
    });
  };
  const url =
    "https://firebasestorage.googleapis.com/v0/b/litos-portfolio.appspot.com/o/Job%20Vid.mp4?alt=media&token=b0b7b109-cd7e-4e85-91a2-9b5c657fe219";

  return (
    <main className="app">
      <Router>
        <nav className="nav-wrp container-fluid row">
          <div className="col col-sm-6 pb-0">
            <Link exact={true} to="/">
              <h4>My Story</h4>
            </Link>
          </div>

          <div className="col col-sm-6 row">
            <div className="col text-end">
              <Link onClick={handleClick} to="/projects">
                Projects
              </Link>
            </div>
            <div className="col text-end text-nowrap">
              <Link onClick={handleClick} to="/softskills">
                Soft Skills
              </Link>
            </div>
          </div>
        </nav>
        <Stack />
        <MyStory url={url} />
        <Switch>
          <Route path="/Projects" component={Projects}></Route>
          <Route path="/softskills" component={SoftSkills}></Route>
        </Switch>
        <Skills />
        <ProfileCard />
        <Footer />
      </Router>
    </main>
  );
}

export default App;
