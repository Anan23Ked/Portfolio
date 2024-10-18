// import React, { useState } from "react";
// import {Navbar, Image } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import Container from "react-bootstrap/Container";
// import logo from "../assets/logo.jpg";
// import Button from "react-bootstrap/Button";
// import { Link } from "react-router-dom";
// import { CgGitFork } from "react-icons/cg";
// import {
//   AiFillStar,
//   AiOutlineHome,
//   AiOutlineFundProjectionScreen,
//   AiFillPicture
// } from "react-icons/ai";

// import { CgFileDocument } from "react-icons/cg";

// const NavBar = () => {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Container>
//         <Navbar.Brand href="/" className="d-flex">
//           {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
//         <Image
//         src={logo}
//         alt="brand"
//         className="img-fluid"
//         style={{ width: "40px", height: "40px", marginRight: "10px" }} // Adjust thumbnail size
//       />
//           Ananya Kedlaya
//         </Navbar.Brand>
//         <Navbar.Toggle
//           aria-controls="responsive-navbar-nav"
//           onClick={() => {
//             updateExpanded(expand ? false : "expanded");
//           }}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </Navbar.Toggle>
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto" defaultActiveKey="#home">
//             <Nav.Item>
//               <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
//                 <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/project"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiOutlineFundProjectionScreen
//                   style={{ marginBottom: "2px" }}
//                 />{" "}
//                 Projects
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item>
//               <Nav.Link
//                 as={Link}
//                 to="/resume"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
//               </Nav.Link>
//             </Nav.Item>
  
//             <Nav.Item>
//             <Nav.Link
//                 as={Link}
//                 to="/gallery"
//                 onClick={() => updateExpanded(false)}
//               >
//                 <AiFillPicture style={{ marginBottom: "2px" }} /> Gallery
//               </Nav.Link>
//             </Nav.Item>

//             <Nav.Item className="fork-btn">
//               <Button
//                 href="https://github.com/soumyajit4419/Portfolio"
//                 target="_blank"
//                 className="fork-btn-inner"
//               >
//                 <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
//                 <AiFillStar style={{ fontSize: "1.1em" }} />
//               </Button>
//             </Nav.Item>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiFillPicture
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        navColour ? "bg-gray-800 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="brand"
            className="w-10 h-10 mr-2"
          />
          <span className="text-white text-lg font-semibold">Ananya Kedlaya</span>
        </Link>
        
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => updateExpanded(!expand)}
        >
          {/* Hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-primaryColor"></span>
            <span className="block w-6 h-0.5 bg-primaryColor"></span>
            <span className="block w-6 h-0.5 bg-primaryColor"></span>
          </div>
        </button>

        <div
          className={`${
            expand ? "block" : "hidden"
          } md:flex items-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 items-center mt-4 md:mt-0">
            <li>
              <Link
                to="/"
                className="text-secondaryColor hover:text-secondaryHover hover:underline transition-all duration-300"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineHome className="inline mr-1" /> Home
              </Link>
            </li>

            <li>
              <Link
                to="/project"
                className="text-white hover:text-gray-300 transition-all duration-300"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen className="inline mr-1" /> Projects
              </Link>
            </li>

            <li>
              <Link
                to="/resume"
                className="text-white hover:text-gray-300 transition-all duration-300"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument className="inline mr-1" /> Resume
              </Link>
            </li>

            <li>
              <Link
                to="/gallery"
                className="text-white hover:text-gray-300 transition-all duration-300"
                onClick={() => updateExpanded(false)}
              >
                <AiFillPicture className="inline mr-1" /> Gallery
              </Link>
            </li>

            <li className="mt-4 md:mt-0">
              <a
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition-all duration-300"
              >
                <CgGitFork className="mr-1" /> <AiFillStar className="ml-1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
