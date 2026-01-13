import { BrowserRouter as Router } from "react-router-dom";

import NavBar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import AppRoutes from "./routes.js";

function App() {
  return (
    <Router>
      <div className="App min-h-screen flex flex-col">
        <NavBar />

        <div className="flex-grow">
          <AppRoutes />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
