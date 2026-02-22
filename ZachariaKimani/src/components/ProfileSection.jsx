import { motion } from 'framer-motion'
import { optimizedImageProps } from '../utils/helpers'

const ProfileSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col md:flex-row items-center gap-8 p-8 bg-dark-300/50 rounded-2xl border border-gray-800 backdrop-blur-sm"
    >
      {/* Profile Image */}
      <div className="relative flex-shrink-0">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl">
          <img
            {...optimizedImageProps('/profile.jpg', 'Zacharia Kimani', {
              width: 224,
              height: 224,
              priority: true,
              className: 'w-full h-full object-cover'
            })}
          />
        </div>
        
        {/* Status Indicator */}
        <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-500 rounded-full border-2 border-dark-300">
          <span className="sr-only">Available for work</span>
        </div>
      </div>

      {/* Profile Info */}
      <div className="flex-1 text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold mb-2"
        >
          Zacharia Kimani
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-blue-400 mb-4"
        >
          Full-Stack Developer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 mb-6 max-w-2xl"
        >
          Based in Kenya, I specialize in building scalable web applications, 
          mobile apps, and backend systems. Passionate about clean code, 
          performance optimization, and creating exceptional user experiences.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center md:justify-start gap-6"
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">20+</div>
            <div className="text-sm text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">10+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ProfileSection