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
      top: 710,
      behavior: "smooth",
    });
  };
  const url =
    "https://firebasestorage.googleapis.com/v0/b/litos-portfolio.appspot.com/o/Loom%20Message%20-%2011%20April%202023.mp4?alt=media&token=1874c461-4586-4ee6-b448-4653fb7fdf61";

  return (
    <main className="app container-fluid">
      <Router>
        <nav className="nav-wrp row d-flex justify-content-between">
          <div className="col col-xs-6 align-self-center">
            <Link exact={true} to="/">
              <h4 className="fs-1">My Story</h4>
            </Link>
          </div>

          <div className="col text-center align-self-center">
            <Link onClick={handleClick} to="/projects">
              Projects
            </Link>
          </div>
          <div className="col text-end align-self-center">
            <Link onClick={handleClick} to="/softskills">
              Soft Skills
            </Link>
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
