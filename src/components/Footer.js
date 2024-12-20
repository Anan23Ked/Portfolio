import React from "react";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="bg-secondaryColor text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-center md:text-left">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-m">Designed and Developed by Ananya Kedlaya</h3>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-m">Copyright © {year} Ananya Kedlaya</h3>
          </div>
          <div className="w-full md:w-1/3">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li>
                <a
                  href="https://github.com/Anan23Ked"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ananyakedlaya/"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/coloured_ink/"
                  className="text-white hover:text-gray-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;