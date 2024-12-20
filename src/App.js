import React, {useState, useEffect} from "react"
import NavBar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './components/Home';
import Resume from "./components/Documents/Resume";
import Education from "./components/Education";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

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

      <div className="App" id={load ? "no-scroll" : "scroll"}>
      <NavBar />
 
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />*/}
          <Route path="/resume" element={<Resume />} /> 
          <Route path="*" element={<Navigate to="/"/>} />
      </Routes> 

      <Footer />
    </div>
  </Router>
  );
}

export default App;
