import { motion } from 'framer-motion'
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './components/Home';
import Education from "./components/Education";
import Experience from './components/Experience';
import Projects from "./components/Projects";
import Contact from './components/ContactMe';
import {BrowserRouter as Router} from "react-router-dom";

function App() {

  return (
    <Router>
   
      <div className="App overflow-hidden">

        <NavBar />

        <div>
          <section>
            <div className="w-full" id="home">
              <motion.div className="max-w-screen-xl mx-auto p-8">
                <Home />
                <Experience />
                <Projects />
                <Education />
                <Contact />
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
