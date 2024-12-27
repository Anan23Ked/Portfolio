import logo from "../assets/imgdemo.png";

export const TAG_LINE = `Software Developer | Programmer | Design Thinker | Artist | Writer`

export const INTRODUCTION = `A creative, data driven computer science graduate working as a Project Associate at CMTI  from  Bangalore, India.
Fashion and Art fuels my mind when I'm off black screens with lines ending with semicolon.
Or a poem or two when the pen and paper beckons me`

export const ABOUT = `
  <div>
    I'm a Project Associate at Central Manufacturing Technology Institute (CMTI),
    my work revolves around software product development for electronic equipments and machines. 
    <br>
    <br>I conduct user research, design strategic product and develop applications for desktop and web. I also have experinece in ML, building YOLO model from scratch, preprocessing and annotation dataset.
    <br>
    <br>With a B.E degree in Computer Science and Engineering, I try to apply my Software Development skills to merge with my passion, art and creativity to innovate products that merge their boundries 
    <br>

  </div>
`

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
    image: logo,
    description:
      "Developing a YOLO basd ML model interface for Thermal Camera to idetify defects in MIG welding with thermal data and performded image processoing, dataset creation and annotation. Developed GUI with camera's SDK and Windows Desktop application with Python PyQT. Applied multuthreaded programming to seamlesly integrate Yolov11 model in backend",
    technologies: ["Python PyQt", "Yolo", "OpenCV", "Roboflow"],
    link: ""
  },
  {
    title: "Machine Health Monitoring System",
    image: logo,
    description:
    "Designed and Developed a Website for CMTI's smart machine manufacturing lab to moniter machine health parameters and slend when values are beyond the set threshold. Deployed it oin the local server of the unit. Benifitted machine operator's job to track the conditions of sensors and data acquired from the machines",

    technologies: ["Python FastAPI", "Vue.js", "PostgreSQL", "TailwindCSS"],
    link: ""
  },
  {
    title: "Iridescence.AI -Text to 3D Mesh model ",
    image: logo,
    description:
      `Parsed textual input into pre-trained stable diffusion model to generate 2D image which is used as input for Frequency Radiance Fields(FreeNerf) to generate 3D views which were then used to construct mesh model using marching cube algorithm
     
        `,
    technologies: ["Python", "Machine Learning"],
    link: "https://github.com/Anan23Ked/Text_to_3DMesh_Model-FreeNeRF"
  },
  {
    title: "ArtInsight",
    image: logo,
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
    image: logo,
    description:
      "Developed a text generation system from input speech video using Wav2Vec2 Transformers, Google Text-to-Speech library, enhancing readilibity for people with hearing disabilities.",
    technologies: ["Python", "Flask", "OpenCV"],
    link: "https://github.com/Anan23Ked/Lip-To-Speech-Synthesis"
  },
  {
    title: "Web Page Redesign",
    image: logo,
    description:
      "Redesigned the Webpage of a cybersecurity company on Figma and deployed on Wix with custom JavaScript functionalities",
    technologies: ["Figma", "JavaScript", "Wix"],
    link: "https://ananyakedlaya.wixsite.com/appsecurewix/contact-us"
  },
  {
    title: "LeARnify - an AR Education application",
    image: logo,
    description:
      "An ongoing project on inducing inclusivity in education by creating accessible and creative content using Augmented Reality to enhance learning experince of high school studeents, and extend its use case to slow learners. This is oart of a nation-wide hackathon conducted by WAVES India.",
    technologies: ["LensStudio", "JavaScript", "Figma"],
    link: "https://docs.google.com/presentation/d/1-PUBe8EpsiqHnXeagwifZCPWqWG8Eg0chPe0KOSWzKw/edit?usp=sharing"
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