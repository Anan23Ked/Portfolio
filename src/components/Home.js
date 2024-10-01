import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgdemo from "../assets/imgdemo.png";
import Nav from "react-bootstrap/Nav";


const Home = () => {

const resumebtn=()=>{
    console.log("clicked")
}
return(
    <div>
    <section>
      <Container fluid className="home-section" id="home">
    
        <Container className="home-content">
            <div  md={5} style={{ paddingBottom: 20 }} className='tags text-center text-textnotes1 bold'>Software Developer | Programmer | Design Thinker | Artist | Poet | Writer</div>
          <Row>
            <Col md={7} className="home-header">
            <div><h2>Hi, I'm</h2></div>
            <div className='LandingPageInfo text-left text-textnotes '>A  creative, data driven computer science graduate working as a Project Associate at CMTI  from  Bangalore, India.
        Fashion and Art fuels my mind when I'm off black screens with lines ending with semicolon. 
        Or a poem or two when the pen and paper beckons me</div> 

              <div md={5} style={{ paddingTop: 20 }}>
              <Link to="/resume" className='btn btn-primary'><button>View Resume</button></Link>
              </div>
          
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={imgdemo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <div><p>Little info about the art in place</p></div>
            </Col>
          </Row>

{/* <div className="home-header" md={5} style={{ paddingRight: 20 }}><h2>About</h2></div> */}
          <Row>
            <Col md={7} className="home-header"> 
            <div><h2>About</h2></div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
                <div className='LandingPageInfo text-textnotes d-flex align-items-center justify-content-center w-1/2' 
            style={{ height: 'auto', textAlign: 'left', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
             
              <p>I'm a Project Associate at Central Manufacturing Technology Institute (CMTI).
            My works mostly revolves around software product develpment for electronics equipments and machines. A  creative, data driven computer science graduate working as a Project Associate at CMTI  from  Bangalore, India.
        Fashion and Art fuels my mind when I'm off black screens with lines ending with semicolon.<br></br> 
        Or a poem or two when the pen and paper beckons me A  creative, data driven computer science graduate working as a Project Associate at CMTI  from  Bangalore, India.
        Fashion and Art fuels my mind when I'm off black screens with lines ending with semicolon. 
        Or a poem or two when the pen and paper beckons me

        A  creative, data driven computer science graduate working as a Project Associate at CMTI  from  Bangalore, India.
        Fashion and Art fuels my mind when I'm off black screens with lines ending with semicolon. 
        Or a poem or two when the pen and paper beckons me
             </p></div> 
              <div><p>Little info about the art in place</p></div>
            </Col>
          </Row>
        
        
          
              
          
           
        </Container>
      </Container>
  
    </section>

    </div>
);
};

export default Home;