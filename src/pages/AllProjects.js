import { PROJECTS } from "../data/data.js";
import { motion } from "framer-motion";

const AllProjects = () => {
  return (
    <section id="all-projects" className="px-6">
      <motion.h1
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-headingText text-4xl text-center mb-8">Projects</span>
      </motion.h1>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 pb-16 mx-auto ">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col rounded-xl bg-primaryShade border border-neutral-300 p-6 hover:shadow-lg transition-shadow"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {/* Image */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center mb-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-36 w-auto rounded object-contain"
              />
            </a>

            {/* Content */}
            <h3 className="mb-2 text-xl font-semibold text-secondaryColor text-center">
              {project.title}
            </h3>

            <p className="mb-4 text-paragraphText text-sm text-center">
              {project.description}
            </p>

            {/* Link */}
            {project.link && (
              <div className="mb-4 text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primaryColor hover:underline"
                >
                  View Project
                </a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default AllProjects;