import { motion } from "framer-motion";
import Home from "../components/Home"
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/ContactMe";

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