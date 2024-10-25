import logo from "../assets/logo.jpg";
import { Chrono } from "react-chrono";

export const TAG_LINE = `Software Developer | Programmer | Design Thinker | Artist | Writer`

export const INTRODUCTION = `A creative, data driven computer science graduate working as a Project Associate at CMTI  from  Bangalore, India.
Fashion and Art fuels my mind when I'm off black screens with lines ending with semicolon.
Or a poem or two when the pen and paper beckons me`

export const ABOUT = `
  <div>
    I'm a Project Associate at Central Manufacturing Technology Institute (CMTI),
    my work revolves around software product development for electronic equipments and machines. 
    <br>
    <br>I conduct user research, design strategic product and develop desktop and web application with Python and Javascript Frameworks, like Vue.js and React.js.
    <br>
    <br>With a B.E degree in Computer Science and Engineering, I try to apply my Software Development skills to merge with my passion, art and creativity to innovate products that merge their boundries 
    <br>

  </div>
`

export const EXPERIENCES = [
    {
      year: "November 2023 - Present",
      role: "Project Associate",
      company: "CMTI",
      description:  
      `<ul>
      <li>• Developed Remote Machine Health monitoring web application for Institution Machines</li>
      <li>• Ongoing research to detect defects during welding using thermal camera</li>
      <li>• Thermal Image Processing</li>
      <li>• Python PyQt desktop Application development</li>
      <li>• Full Stack Web Application with FastAPI, Vue.js, PostgreSQL databse</li>
      <li>• Migrated databse from MongoDB to PostgreSQL</li>
      <li>• UX Research and Designed UI on Figma</li>
    </ul>,`,
    // , banking, and customer service. Built data anonymization APIs, processing 100,000+ records with 90% accuracy. Refactored codebase to FastAPI, reducing API response times by 67-90%. Integrated OpenAI, Claude, and LangChain APIs, reducing AI infrastructure by 50%.`,
      technologies: ["Python", "PyQt", "FastAPI", "Vue.js", "React.js", "OpenCV", "PostgreSQL", "MongoDB" ,"Figma", "Git"],
    }
]

export const PROJECTS = [
    {
      title: "Iridescence.AI -Text to 3D Mesh model ",
      image: logo,
      description:
        "Developed Point of Care Kit for Infants to detect Jaundice from scratch. Conducted research as an E-YUVA Fellow in collaboration with DBT, Government of India, under BIRAC.",
      technologies: ["Python", "Machine Learning"],
      link: "https://www.linkedin.com/posts/anikethhebbar_eyuva-birac-teamwork-activity-7232958208519069696-fOck?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "ArtInsight",
      image: logo,
      description:
      
        "Developed a Microsoft Presidio powered data anonymization service to mask data before sending it to LLMs. Extended Presidio’s capabilities by adding custom recognizers for various national identity formats.",
      technologies: ["Python", "Microsoft Presidio"],
      link: "https://github.com/anikethhebbar/anonymization-service"
    },
    {
      title: "WALL-E 2.0",
      image: logo,
      description:
        "Developed a DeepFake detection system using CNNs, enhancing digital security. Aimed at preventing deepfake misuse, promoting safer online interactions.",
      technologies: ["Python", "TensorFlow", "OpenCV"],
      link: "https://github.com/anikethhebbar/deep-detect"
    },
  ];

  export const EDUCATION = [
    {
      title: "Aug 2019 - May 2023",
      cardTitle: "B.E Computer Science and Engineering",
      cardSubtitle: "Acharya Institute of Technology | CGPA: 7.82",
      cardDetailedText:( 
      <ul style={{ color: 'rgb(77, 16, 31)' }}>
      <li>• Studied Web development and AI/ML concepts</li>
      <li>• Best Final Year project in CS&E department</li>
      <li>• Headed the Literary Club and organised events like debates and poem reading</li>
      <li>• Voluntary work - Taught school kids of government Schools, Painted scientific concepts on school walls </li>
      <li>• Organised college cultural events. Took part in  stage and place decoration</li>
    </ul>),
    }, 
    {
      title: "Jun 2017 - June 2023",
      cardTitle: "Pre University- PCMC",
      cardSubtitle: "KLE Independent PU College | Percentage: 91.67%",
      cardDetailedText:( 
      <ul style={{ color: 'rgb(77, 16, 31)' }}> 
      <li>• Studied Physics, Chemistry, Mathematics, Computers</li>
      <li>• Won 2nd place in Best out of waste competetion</li>
      <li>• attended multiple art competetions</li>
    </ul>),
    }, 
    {
      title: "Mar 2017",
      cardTitle: "CBSE 10th std",
      cardSubtitle: "Sri Sri Ravishankar Vidya Mandir | CGPA: 9.6",
      cardDetailedText:( 
      <ul style={{ color: 'rgb(77, 16, 31)' }}> 
      <li>• Actively participated in Science exhibition</li>
      <li>• Won various art and painting competetion throughout schooling</li>
      <li>• Contributed in School wall painting</li>
      <li>• Active in Sports- Badminton, Throwball and Athletics</li>
    </ul>),
    }
  ]