import React, { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './components/Home';
import Education from "./components/Education";
import Experience from './components/Experience';
import Projects from "./components/Projects";
import { TAG_LINE, ABOUT, EDUCATION, EXPERIENCES, PROJECTS } from "./data/data";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Router>
      {/* <Preloader load={load} /> */}

      <div className="App">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <div>
          <section>
            <div className="w-full" id="home">
              <motion.div className="max-w-screen-xl mx-auto p-8">
                
                <Experience />
                <Projects />
                <Education />
              </motion.div>


            </div>
          </section>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
