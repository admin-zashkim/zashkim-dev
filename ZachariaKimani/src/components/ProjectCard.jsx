import { motion } from 'framer-motion'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="card group"
    >
      <div className="relative overflow-hidden rounded-lg mb-4 aspect-video bg-gradient-to-br from-blue-500/10 to-purple-500/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 text-xs font-medium bg-dark-400 text-gray-300 rounded-md border border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
          >
            Live Demo →
          </a>
        )}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors"
        >
          GitHub →
        </a>
      </div>
    </motion.div>
  )
}

export default ProjectCard