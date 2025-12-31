import React from 'react';
import { motion } from 'framer-motion';
import display_art_img from '../assets/artworks/Art_1.jpg'
import { ABOUT, TAG_LINE, ART_1 } from '../data/data.js';
import pdf from "../assets/resume/Resume_Ananya.pdf"
import { pdfjs } from "react-pdf";
import { CgFileDocument } from "react-icons/cg";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = "Portfolio/public/pdf.worker.min.js";

const Home = () => {
  return (
    <div>
      <section id="home">
        <div className="w-full pt-[50px]" id="home-intro">

          <motion.div className="max-w-screen-xl mx-auto p-8">

            <motion.div
              className="text-center bg-gradient-to-r from-secondaryColor via-singleLineText to-primaryColorDark bg-clip-text text-xl  text-transparent"
              initial={{ opacity: 0 }} // Animates from opacity 0 to 1
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {TAG_LINE}
            </motion.div>

            <div className="landing-info  align-center flex flex-col md:flex-row justify-between pt-8">
              <div className='flex flex-col'>


                <motion.div
                  className="w-full sm:w-1/3 lg:w-1/4"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className=" text-headingText text-4xl">Hi</p>
                </motion.div>

                <motion.div
                  className="w-full md:w-7/12"
                  initial={{ opacity: 0, x: 100 }} // Slide in from left
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div>{ABOUT.map((about, index) =>(
                    <div key={index}>
                    <div className='text-paragraphText' dangerouslySetInnerHTML={{__html: about.content}}></div>
                    <div className="pt-4 flex flex-wrap gap-2 justify-center md:justify-start">{about.skills.map((tech, techIndex) =>(
                      <span key={techIndex} className="rounded bg-blogHeading/30 px-3 py-1 text-sm text-gray-700 whitespace-nowrap">{tech}</span>
                    ))}</div>
                    </div>
                  ))}</div>

                  <div className="mt-5 mb-5">

                    <motion.button
                      className="bg-primaryColor  text-secondaryColor px-4 py-2 rounded shadow-md"
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.9 }}
                    >  
                    <a href={pdf}
                      target="_blank"
                      rel="noopener noreferrer" >
                      <div className='flex flex-cols gap-4 items-center'>
                      <span><CgFileDocument /></span>
                        <span>View Resume</span>
                        </div>
                      </a>
                    </motion.button>


                  </div>
                </motion.div></div>

              <motion.div
                className="w-full bg-primaryColor p-2 md:w-5/12 flex flex-col mb-5"
                initial={{ opacity: 0, x: 50 }} // Slide in from right
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={display_art_img}
                  alt="home pic"
                  className="max-h-96 float-right"
                />
                <div className="text-center text-paragraphText mt-4">
                  {ART_1}
                </div>
              </motion.div>
            </div>
            {/* <div className='about p-8  rounded-lg bg-gradient-to-r from-secondaryColor via-singleLineText to-primaryColorDark border border-neutral-300 justify-between flex flex-row'>
              <motion.div
                className="flex flex-wrap justify-between"
                initial={{ opacity: 0 }} // Fade in
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }} // Delay and duration
              >
                <motion.div
                  className="w-full sm:w-1/3 lg:w-1/4"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <p className=" text-primaryShade text-4xl content-center pt-8 w-full md:w-4/12 ">BLOGS</p>
                </motion.div>


                <div className="w-full md:w-8/12">
                  <div className="text-left text-primaryShade mt-4">{INTRODUCTION} </div>
                </div>
              </motion.div>
            </div> */}


          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
