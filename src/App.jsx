import {BrowserRouter as Router,Routes,Route } from "react-router-dom"

import '../src/styles/App.css'
// import image from "./images/background.jpg"



import Nav from "./Components/Nav";
import Stack from "./Components/Stack";
import MyStory from "./Components/MyStory"
import Skills from "./Components/Skills"
import ProfileCard from "./Components/ProfileCard"
import Projects from "./Components/Projects"
import SoftSkills from "./Components/SoftSkills";
import Footer from "./Components/Footer";

function App() {

   const url = 'https://firebasestorage.googleapis.com/v0/b/litos-portfolio.appspot.com/o/Real%20Story.mp4?alt=media&token=2a50b2c9-052f-4e64-a741-825bbf9e2463'
   
  return (

    <main className="app">

       {/* <img src={image} alt="" /> */}
   
       <Router>
        
          <Nav />
          <Stack/>
           <Skills/>
         
          
           <Routes>

              <Route path="/Skills" element={<Skills/>} ></Route>
              <Route path="/Projects" element={<Projects/>}></Route>
              <Route path="/MyStory" element={<MyStory />}></Route>
              <Route path="/softskills" element={<SoftSkills/>}></Route>

           </Routes>

           <MyStory url={url}/>
            <ProfileCard/>
            
   

          <Footer />

       </Router>

    </main>

  );
}

export default App;
