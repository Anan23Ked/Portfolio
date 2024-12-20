import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imgdemo from '../assets/imgdemo.png';
import { ABOUT, INTRODUCTION, TAG_LINE } from '../data/data';
import Education from './Education';
import Experience from './Experience';
import pdf from "../assets/resume/Resume_Ananya.pdf" 
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = "Portfolio/public/pdf.worker.min.js";

const Home = () => {
  return (
    <div>
      <section>
        <div className="w-full pt-[100px]" id="home">

          <motion.div className="max-w-screen-xl mx-auto p-8">
          
            <motion.div 
              className="text-center bg-gradient-to-r from-pink-400 via-purple-500 to-pink-600 bg-clip-text text-xl tracking-tight text-transparent"
              initial={{ opacity: 0 }} // Animates from opacity 0 to 1
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              {TAG_LINE}
            </motion.div>

            <div className="landing-info flex flex-row justify-between pt-8">
            <div className='flex flex-col'>
            
              <motion.h1                
                className=" text-headingText text-4xl"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}> Hi, I am

              </motion.h1> 

              <motion.div 
                className="w-full md:w-7/12"
                initial={{ opacity: 0, x: 100 }} // Slide in from left
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <div className="text-left text-paragraphText mt-4">{INTRODUCTION}</div>
           
                <div className="mt-5">
                  <a    href={pdf}
                  target="_blank"
                  rel="noopener noreferrer" >
                    <motion.button 
                      className="bg-primaryColor text-secondaryColor px-4 py-2 rounded shadow-md"
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.5, delay: 0.2}}
                      whileHover={{ scale: 1.05 }} // Hover effect
                      whileTap={{ scale: 0.9 }} // Click effect
                    >
                      View Resume
                    </motion.button>
                  </a>
                  
                </div>
              </motion.div></div>

              <motion.div 
                className="w-full md:w-5/12 flex flex-col items-end mb-5"
                initial={{ opacity: 0, x: 50 }} // Slide in from right
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={imgdemo}
                  alt="home pic"
                  className="max-h-96 float-right"
                />
                <div className="text-end text-smallContent mt-4">
                  <p>Little info about the art in place</p>
                </div>
              </motion.div>
            </div>
            <div className='about justify-between flex flex-row'>
            <motion.div 
              className="flex flex-wrap justify-between"
              initial={{ opacity: 0 }} // Fade in
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }} // Delay and duration
            >
              <div className="text-headingText content-center text-4xl pt-8 w-full md:w-4/12">
                <div><h2>About</h2></div>
              </div>

              <div className="w-full md:w-8/12">
                <div
                  dangerouslySetInnerHTML={{ __html: ABOUT }}
                  className="text-textnotes mt-5 text-left"
                />
              </div>
            </motion.div>
            </div>

            <div className='education content-center flex flex-col'>
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }} // Fade in
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="w-full text-center text-headingText text-4xl">
                <h2>Education</h2>
              </div>
              <div className="mt-10">
                <Education />
              </div>
            </motion.div>
            </div>

            <div className='work_experience content-center flex flex-row'>
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }} // Fade in
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="w-full md:w-3/12 text-headingText text-4xl">
                <motion.h1
                                className="my-20 text-center text-headingText text-4xl"
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.span 
                                    whileInView={{ opacity: 1, x: 0 }}
                                    initial={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.5 }}
                                    
                                >
                                    Work Experience
                                </motion.span>
                            </motion.h1>
              </div>
              <div className="mt-10">
                <Experience />
              </div>
            </motion.div>
            </div>
          </motion.div>
          
        </div>
      </section>
    </div>
  );
};

export default Home;
