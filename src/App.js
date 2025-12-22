import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import LandingPage from "./pages/LandingPage.js";
import AllProjects from "./pages/AllProjects.js";
import Gallery from "./pages/Gallery.js";
import BlogList from "./pages/BlogList.js";
import BlogPost from "./pages/BlogPost.js";

function App() {
  return (
    <Router>
      <div className="App overflow-hidden">
        {/* Persistent */}
        <NavBar />

        {/* Routed content */}
        <Routes>
         
          <Route
            path="/"
            element={<LandingPage />}
          />

          {/* All projects page */}
          <Route
            path="/allprojects"
            element={<AllProjects />}
          />

          {/* Gallery page */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />

  <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        {/* Persistent */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
