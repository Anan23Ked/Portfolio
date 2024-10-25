import { EXPERIENCES } from "../data/data";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1
                className="my-20 text-center text-4xl"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
            >
                <motion.span 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-sky-300 via-red-400 to-sky-500 bg-clip-text text-4xl tracking-tight text-transparent"
                >
                    Experience
                </motion.span>
            </motion.h1>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <motion.div 
                        key={index} 
                        className="mb-8 flex flex-wrap lg:justify-center"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <motion.div 
                            className="w-full sm:w-1/3 lg:w-1/4"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <p className="mb-2 text-sm text-neutral-700">{experience.year}</p>
                        </motion.div>
                        <motion.div 
                            className="w-full sm:w-2/3 lg:w-3/4"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <h6 className="mb-2 font-semibold">
                                {experience.role} -{" "}
                                <span className="text-sm text-purple-100">
                                    {experience.company}
                                </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{experience.description}</p>
                            <div className="flex flex-wrap">
                                {experience.technologies.map((tech, techIndex) => (
                                    <motion.span 
                                        key={techIndex} 
                                        className="mr-2 mt-2 rounded bg-neutral-100 px-2 py-1 text-sm text-tag_text"
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;