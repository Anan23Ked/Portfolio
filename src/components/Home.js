// import React from 'react'
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import imgdemo from "../assets/imgdemo.png";
// import Nav from "react-bootstrap/Nav";
// import { ABOUT, INTRODUCTION, TAG_LINE } from '../constants/data';
// import Education from './Education';
// import Experience from './Experience';


// const Home = () => {

//   const resumebtn = () => {
//     console.log("clicked")
//   }
//   return (
//     <div>
//       <section>
//         <Container fluid className="home-section" id="home">

//           <Container className="home-content">
//             <div md={5} style={{ paddingBottom: 20 }} className='tags text-center text-tag_text bold'>{TAG_LINE}</div>

//             <Row className="justify-content-md-between">
//               <Col md={7} className="home-header">
//                 <div><h2>Hi, I'm</h2></div>
//                 <div className='LandingPageInfo text-left text-textnotes'>{INTRODUCTION}</div>

//                 <div md={5} style={{ paddingTop: 20 }}>
//                   <Link to="/resume" className='btn btn-primary'>
//                     <button>View Resume</button>
//                   </Link>
//                 </div>
//               </Col>

//               <Col md={5} className="d-flex flex-column align-items-end" style={{ paddingBottom: 20 }}>
//                 <img
//                   src={imgdemo}
//                   alt="home pic"
//                   className="img-fluid"
//                   style={{ maxHeight: "450px", float: "right" }}  // Float right for additional alignment
//                 />
//                 <div className="text-end"><p>Little info about the art in place</p></div>
//               </Col>
//             </Row>

//             <Row className="justify-content-md-between">
//               <Col md={4} className="home-header">
//                 <div><h2>About</h2></div>

//               </Col>

//               <Col md={8} className="d-flex flex-column align-items-end" >
//                 <div dangerouslySetInnerHTML={{ __html: ABOUT }}
//                   className='LandingPageInfo text-textnotes '
//                   style={{ paddingTop: '20px', textAlign: 'left', alignItems: 'right' }} // 20px padding between "About" and the paragraph
//                 >
//                 </div>
//               </Col>
//             </Row>

//             <div>
//               <Col md={3} style={{ paddingTop: 20 }} className="home-header">
//                 <div><h2>Education</h2></div>
//               </Col>
//               <div className='mt-10'><Education /></div>
              
//               </div>

//               <div>
//               <Col md={3} style={{ paddingTop: 20 }} className="home-header">
//                 <div><h2>Work Experience</h2></div>
//               </Col>
//               <div className='mt-10'><Experience /></div>
              
//               </div>
//           </Container>
          
//         </Container>

//       </section>

//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import imgdemo from '../assets/imgdemo.png';
// import { ABOUT, INTRODUCTION, TAG_LINE } from '../constants/data';
// import Education from './Education';
// import Experience from './Experience';

// const Home = () => {

//   const resumebtn = () => {
//     console.log("clicked");
//   };

//   return (
//     <div>
//       <section>
//         <div className="w-full" id="home">

//           <div className="max-w-screen-xl mx-auto p-8">
//             <div className="text-center bg-gradient-to-r from-pink-300 via-purple-400 to-pink-500 bg-clip-text text-xl tracking-tight text-transparent">{TAG_LINE}</div>

//             <div className="flex flex-wrap justify-between">
//               <div className="w-full md:w-7/12">
//                 <div>
//                   <h2 className="text-secondaryColor">Hi, I'm</h2>
//                 </div>
//                 <div className="text-left text-paragraphText mt-4">{INTRODUCTION}</div>

//                 <div className="mt-5">
//                   <Link to="/resume">
//                     <button className="bg-primaryColor text-secondaryColor px-4 py-2 rounded">
//                       View Resume
//                     </button>
//                   </Link>
//                 </div>
//               </div>

//               <div className="w-full md:w-5/12 flex flex-col items-end mb-5">
//                 <img
//                   src={imgdemo}
//                   alt="home pic"
//                   className="max-h-96 float-right"
//                 />
//                 <div className="text-end mt-4">
//                   <p>Little info about the art in place</p>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap justify-between">
//               <div className="w-full md:w-4/12">
//                 <div><h2>About</h2></div>
//               </div>

//               <div className="w-full md:w-8/12">
//                 <div
//                   dangerouslySetInnerHTML={{ __html: ABOUT }}
//                   className="text-textnotes mt-5 text-left"
//                 />
//               </div>
//             </div>

//             <div className="mt-10">
//               <div className="w-full md:w-3/12">
//                 <div><h2>Education</h2></div>
//               </div>
//               <div className="mt-10">
//                 <Education />
//               </div>
//             </div>

//             <div className="mt-10">
//               <div className="w-full md:w-3/12">
//                 <div><h2>Work Experience</h2></div>
//               </div>
//               <div className="mt-10">
//                 <Experience />
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import imgdemo from '../assets/imgdemo.png';
import { ABOUT, INTRODUCTION, TAG_LINE } from '../data/data';
import Education from './Education';
import Experience from './Experience';

const Home = () => {

  const resumebtn = () => {
    console.log("clicked");
  };

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

            <div className="flex flex-wrap justify-between pt-8">
              <motion.h1                
                className="my-20 text-center text-headingText text-4xl"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}> Hi, I am
                

              </motion.h1> 

              <motion.div 
                className="w-full md:w-7/12"
                initial={{ opacity: 0, x: -50 }} // Slide in from left
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                
           
                <div className="text-left text-paragraphText mt-4">{INTRODUCTION}</div>

                <div className="mt-5">
                  <Link to="/resume">
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
                  </Link>
                </div>
              </motion.div>

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

            <motion.div 
              className="flex flex-wrap justify-between"
              initial={{ opacity: 0 }} // Fade in
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }} // Delay and duration
            >
              <div className="w-full md:w-4/12">
                <div><h2>About</h2></div>
              </div>

              <div className="w-full md:w-8/12">
                <div
                  dangerouslySetInnerHTML={{ __html: ABOUT }}
                  className="text-textnotes mt-5 text-left"
                />
              </div>
            </motion.div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }} // Fade in
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="w-full md:w-3/12">
                <div><h2>Education</h2></div>
              </div>
              <div className="mt-10">
                <Education />
              </div>
            </motion.div>

            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }} // Fade in
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <div className="w-full md:w-3/12">
                <div><h2>Work Experience</h2></div>
              </div>
              <div className="mt-10">
                <Experience />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Home;
