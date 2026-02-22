import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-dark-400">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="space-y-6 text-gray-300">
            <p className="text-lg leading-relaxed">
              I'm Zacharia Kimani, a Full-Stack Developer based in Kenya with a passion for
              building scalable, high-performance applications. My approach to development
              focuses on clean architecture, performance optimization, and delivering
              exceptional user experiences.
            </p>
            
            <p className="text-lg leading-relaxed">
              With expertise across the entire development stack, I specialize in creating:
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {[
                'WhatsApp automation bots with real-time capabilities',
                'Full-stack e-commerce platforms with admin dashboards',
                'Cross-platform mobile applications using React Native',
                'RESTful APIs and backend systems with Node.js',
                'Database design and optimization (SQL & NoSQL)',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-3"
                >
                  <span className="text-blue-400 mt-1">→</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <p className="text-lg leading-relaxed mt-6">
              My technical philosophy centers on writing clean, maintainable code and
              building systems that scale. I believe in the power of technology to solve
              real-world problems and consistently deliver solutions that exceed expectations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About