import React, { useState, useEffect } from "react";
import profile_picture from "../assets/profile_picture.png"
import { Link } from "react-router-dom";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";
// import { GrGallery } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import pdf from "../assets/resume/Resume_Ananya.pdf"
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = "Portfolio/public/pdf.worker.min.js";
// pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;


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

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const navItems = [
    {
      to: "/allprojects",
      label: "Projects",
      icon: <AiOutlineFundProjectionScreen className="inline mr-1" />,
    },

    {
      to: "/blog",
      label: "Blog",
      icon: <TfiWrite className="inline mr-1" />,
    },
    // {
    //   to: "/gallery",
    //   label: "Gallery",
    //   icon: <GrGallery className="inline mr-1" />,
    // },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${navColour ? "bg-white shadow-md" : "bg-white"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link to="/#home" className="flex items-center">
          <img src={profile_picture} alt="brand" className="w-10 h-10 mr-2" />
          <span className="text-secondaryColor text-2xl">
            Ananya Kedlaya
          </span>
        </Link>

        <button
          className="md:hidden focus:outline-none"
          onClick={() => updateExpanded(!expand)}
        >
          <div className="relative w-6 h-6">
            {["rotate-45 top-2", "opacity-0", "-rotate-45 top-2"].map(
              (classMod, index) => (
                <span
                  key={index}
                  className={`block absolute left-0 w-full h-0.5 bg-primaryColorDark transform transition-all duration-300 ${expand ? classMod : `top-${index * 2}`
                    }`}
                ></span>
              )
            )}
          </div>
        </button>

        <div
          className={`${expand ? "block" : "hidden"
            } md:block duration-500 md:static absolute bg-white md:min-h-fit min-h-[30vh] left-0 top-[90%] flex items-center w-full md:w-auto px-4`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 items-center mt-0 md:gap-[4vw] md:mt-0 space-y-6 md:space-y-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.to}
                  className="group relative text-secondaryColor hover:text-secondaryHover transition-all duration-300 inline-block"
                  onClick={() => updateExpanded(false)}
                >
                  {item.icon}
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute left-0 bottom-[-5px] w-0 h-1 md:mt-2 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}


            <li className="mt-4 md:mt-0">

              <a
                href="https://github.com/Anan23Ked"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-secondaryColor hover:text-secondaryHover transition-all duration-300 inline-block"
              > <FiGithub className="inline mr-1" />GitHub

              </a>
            </li>

            <li className="mt-4 md:mt-0">

              <a
                href={pdf} target="_blank"
                rel="noopener noreferrer"
                className="group relative text-secondaryColor hover:text-secondaryHover transition-all duration-300 inline-block"
              > <CgFileDocument className="inline mr-1" />Resume

              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

