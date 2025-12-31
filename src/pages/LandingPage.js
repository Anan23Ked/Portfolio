import { motion } from "framer-motion";
import Home from "../components/Home.js"
import Education from "../components/Education.js";
import Experience from "../components/Experience.js";
import Projects from "../components/Projects.js";
import Contact from "../components/ContactMe.js";

const LandingPage = () => {
  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center bg-backgroundColor">
        <div className="w-full bg-gray-50" id="home">
            <motion.div className="max-w-screen-xl mx-auto p-8">
            <Home />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            </motion.div>
        </div>
    </div>
    );
}

export default LandingPage;