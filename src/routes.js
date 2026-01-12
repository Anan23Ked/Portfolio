import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.js";
import AllProjects from "./pages/AllProjects.js";
import Gallery from "./pages/Gallery.js";
import BlogList from "./pages/BlogList.js";
import BlogPost from "./pages/BlogPost.js";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/allprojects" element={<AllProjects />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
};

export default AppRoutes;
