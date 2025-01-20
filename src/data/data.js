import AIWeld from '../assets/images/AIweld.png'
import ArtInsight from '../assets/images/ArtInsight.png'
import Learnify from '../assets/images/Learnify.png'
import Iridescence from '../assets/images/Iridescence.png'
import LipToSpeech from '../assets/images/LipToSpeech.png'
import MachineMonitoring from '../assets/images/MachineMonitoring.png'
import Redesign from '../assets/images/Redesign.png'

export const TAG_LINE = `Software Developer | Programmer | Design Thinker | Artist | Writer`

export const INTRODUCTION = `A creative, data driven computer science graduate working as a Project Associate at CMTI  from  Bangalore, India.
Fashion and Art fuels my mind when I'm off black screens with lines ending with semicolon.
Or a poem or two when the pen and paper beckons me`

export const ABOUT = [{
  content:
`
  <div>
    A Project Associate at Central Manufacturing Technology Institute (CMTI),
    my work revolves around software product development for electronic equipments and machines. 
    <br>
    <br>I conduct user research, design strategic product and develop applications for desktop and web. I also have experinece in ML, building and deploying YOLO model for real-time applications, preprocessing and annotation dataset. Practice MVP code architecture and multithreaded programming
    <br>
    <br>With a B.E degree in Computer Science and Engineering, I try to apply my Software Development skills to merge with my passion, art and creativity to innovate products that merge their boundries 
    <br>

  </div>
`,
skills : ["JavaScript", "React.js", "Vue.js", "Python", "FastAPI", "PyQt", "ML"]}]

export const ART_1 = "Acrylic on Paper - Art by me Selfishness, Suffering, Curiosity, Three qualities paving way for development guided by the Sun and balanced by the Moon in this vast universe of ours "

export const EXPERIENCES = [
  {
    year: "November 2023 - Present",
    role: `<u>Project Associate</u>`,
    company: "Central Manufacturing Technology Institute (CMTI)",
    description:
      `<ul>
      <li>• Developed Remote Machine Health monitoring web application for Institution Machines</li>
      <li>• Build a YOLO model from scratch and used it to analyse thermal images to detech defects during welding</li>
      <li>• Thermal Image Processing</li>
      <li>• Custom dataset creation and annotation using Roboflow</li>
      <li>• Python PyQt desktop Application development</li>
      <li>• GUI development using Thermal Camera SDK</li>
      <li>• Full Stack Web Application with FastAPI, Vue.js, PostgreSQL databse</li>
      <li>• Migrated databse from MongoDB to PostgreSQL</li>
      <li>• UX Research and Designed UI on Figma</li>
    </ul>`,
    
    technologies: ["Python", "PyQt", "FastAPI", "JavaScript", "Vue.js", "React.js", "PostgreSQL", "MongoDB", "OpenCV","Machine Learning", "YOLO", "CNN", "Figma", "Git", "Github", "Docker", "Roboflow"],
  }
]

export const PROJECTS = [
  {
    title: "AI enabled Real Time Weld Defect Detection Application",
    image: AIWeld,
    description:
      "Developing a YOLO basd ML model interface for Thermal Camera to idetify defects in MIG welding with thermal data and performded image processoing, dataset creation and annotation. Developed GUI with camera's SDK and Windows Desktop application with Python PyQT. Applied multuthreaded programming to seamlesly integrate Yolov11 model in backend",
    technologies: ["Python PyQt", "Yolo", "OpenCV", "Roboflow"],
    link: ""
  },
  {
    title: "Machine Health Monitoring System",
    image: MachineMonitoring,
    description:
    "Designed and Developed a Website for CMTI's smart machine manufacturing lab to moniter machine health parameters and slend when values are beyond the set threshold. Deployed it oin the local server of the unit. Benifitted machine operator's job to track the conditions of sensors and data acquired from the machines",

    technologies: ["Python FastAPI", "Vue.js", "PostgreSQL", "TailwindCSS"],
    link: ""
  },

  {
    title: "Iridescence.AI -Text to 3D Mesh model ",
    image: Iridescence,
    description:
      `Parsed textual input into pre-trained stable diffusion model to generate 2D image which is used as input for Frequency Radiance Fields(FreeNerf) to generate 3D views which were then used to construct mesh model using marching cube algorithm
     
        `,
    technologies: ["Python", "Machine Learning"],
    link: "https://github.com/Anan23Ked/Text_to_3DMesh_Model-FreeNeRF"
  },
  {
    title: "LeARnify - an AR Education application",
    image: Learnify,
    description:
      "An ongoing National Level Hackthon project on inducing inclusivity in education by creating accessible and creative content using Augmented Reality to enhance learning experince of high school students, and extend its use case to slow learners. User Flow demonstrated on Figma and AR implementation using LensStudio, created as a Snapchat filter",
    technologies: ["LensStudio", "JavaScript", "Figma"],
    link: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=e99399228d1f482c8f6476a4aee57982&metadata=01"
  },
  {
    title: "ArtInsight",
    image: ArtInsight,
    description:

      `An ongoing Personal UI/UX Project that will be deveoloped into a workable application
        
       
 
The project focuses on minimizing the hassle of searching through various websites to make ourselves aware about displayed artworks in historical museums and aid those who love to visit workshops, shows and auctions around their city but stay unaware of their happenings unless they have subscribed to the agency’s mailing list. 

        Conducted requirement analysis, market research to analyse competetors standars, drew personas to better understand user needs and pain points
        Started with a basic wireframe sketch, iterated over it until UI seemed seamless and light
        Developed wireframe and prtotype of minimal representatiom of the onboardng page, apt to the coloursceme chosen
        
        `,
    technologies: ["Figma", "UI elements", "UX research"],
    link: ""
  },
  {
    title: "Lip-to-Speech synthesis",
    image: LipToSpeech,
    description:
      "Developed a text generation system from input speech video using Wav2Vec2 Transformers, Google Text-to-Speech library, enhancing readilibity for people with hearing disabilities.",
    technologies: ["Python", "Flask", "OpenCV"],
    link: "https://github.com/Anan23Ked/Lip-To-Speech-Synthesis"
  },
  {
    title: "Web Page Redesign",
    image: Redesign,
    description:
      "Redesigned the Webpage of a cybersecurity company on Figma and deployed on Wix with custom JavaScript functionalities",
    technologies: ["Figma", "JavaScript", "Wix"],
    link: "https://ananyakedlaya.wixsite.com/appsecurewix/contact-us"
  },


];

export const EDUCATION = [
  {
    title: "Aug 2019 - May 2023",
    cardTitle: "B.E Computer Science and Engineering",
    cardSubtitle: "Acharya Institute of Technology | CGPA: 7.82",
    cardDetailedText: (
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
    cardDetailedText: (
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
    cardDetailedText: (
      <ul style={{ color: 'rgb(77, 16, 31)' }}>
        <li>• Actively participated in Science exhibition</li>
        <li>• Won various art and painting competetion throughout schooling</li>
        <li>• Contributed in School wall painting</li>
        <li>• Active in Sports- Badminton, Throwball and Athletics</li>
      </ul>),
  }
]

export const CONTACT = {
  address: "Bangalore, India",
  email: "kedlayaananya@gmail.com",

};