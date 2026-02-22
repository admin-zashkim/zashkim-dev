import { motion } from 'framer-motion'

const Experience = () => {
  const capabilities = [
    {
      title: 'Backend Architecture',
      items: [
        'Scalable REST API development with Node.js and Express',
        'Authentication systems (JWT, OAuth, Session management)',
        'Database schema design and optimization (PostgreSQL, MongoDB)',
        'WebSocket implementations for real-time features',
      ],
    },
    {
      title: 'Frontend Development',
      items: [
        'Responsive, mobile-first UI development with React',
        'State management (Redux, Context API)',
        'Performance optimization and code splitting',
        'Cross-browser compatibility and accessibility',
      ],
    },
    {
      title: 'DevOps & Deployment',
      items: [
        'CI/CD pipeline setup',
        'Containerization with Docker',
        'Cloud deployment (Vercel, Netlify, AWS)',
        'Performance monitoring and optimization',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Technical Capabilities</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Comprehensive expertise in building production-ready applications
            with focus on scalability and performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, idx) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {capability.title}
              </h3>
              <ul className="space-y-3">
                {capability.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-gray-300">
                    <span className="text-blue-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience