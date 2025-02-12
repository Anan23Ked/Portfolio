import { PROJECTS } from "../data/data.js";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
    const [showAll, setShowAll] = useState(false)
    const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3)
    return (
        <section id="projects">
            <div >
                <motion.h1
                    className="my-20 text-center text-4xl"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-headingText text-4xl tracking-tight">
                        Projects
                    </span>
                </motion.h1>
                <div>
                    {visibleProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="m-8 flex p-8 flex-wrap rounded-lg bg-primaryShade border border-neutral-300 lg:flex-nowrap  lg:justify-center "
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="w-full lg:w-1/4 flex justify-center lg:justify-start ">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        src={project.image}
                                        width={150}
                                        height={150}
                                        alt={project.title}
                                        className="mb-6 rounded"
                                    />
                                </a>
                            </div>
                            <div className="w-full max-w-xl md:text-left lg:w-3/4">
                                <div className="justify-inbetween text-center content-center">
                                    <h6 className="mb-2 text-xl text-secondaryColor font-semibold  text-center lg:text-left">{project.title}</h6></div>
                                <p className="mb-4 text-paragraphText text-center lg:text-left">{project.description}</p>
                                <div className="mb-4 text-center lg:text-left"> {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative text-secondaryColor hover:text-secondaryHover transition-colors duration-300 group"
                                    >
                                        Link to project
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primaryColor transition-all duration-300 group-hover:w-full"></span>
                                    </a>)}

                                </div>
                                <div className="flex flex-wrap justify-center lg:justify-start">
                                    {project.technologies.map((tech, techIndex) => (
                                        <motion.span
                                            key={techIndex}
                                            className="mr-2 mt-2 rounded bg-primaryColor px-2 py-1 text-sm  text-neutral-800"
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-right m-8">
                    <button onClick={() => setShowAll(!showAll)}
                        className="px-4 py-2 border rounded text-primaryColorDark bg-primaryShade ">
                        {showAll ? "Show Less" : "View All Projects"}
                    </button></div>
            </div>
        </section>);
};

export default Projects;