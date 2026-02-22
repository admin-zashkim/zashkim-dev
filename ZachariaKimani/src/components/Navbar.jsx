import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { navLinks, socialLinks } from '../data/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (path) => {
    setIsOpen(false)
    if (path.startsWith('#')) {
      const element = document.querySelector(path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-400/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tight hover:text-blue-400 transition-colors"
          >
            Zacharia Kimani
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`text-sm font-medium transition-colors hover:text-blue-400 ${
                  location.pathname === link.path ? 'text-blue-400' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Social Links */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </a>
            
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition-colors"
              aria-label="WhatsApp Community"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.41-9.91 9.86 0 1.74.46 3.45 1.33 4.98L2.12 22l5.3-1.3c1.48.82 3.15 1.25 4.86 1.25 5.45 0 9.9-4.41 9.9-9.86.01-5.45-4.44-9.87-9.9-9.87zm-.02 2c4.39 0 7.95 3.53 7.95 7.86 0 4.33-3.56 7.86-7.95 7.86-1.43 0-2.8-.38-4.01-1.09l-.29-.17-3.2.78.85-3.07-.17-.3c-.67-1.16-1.04-2.5-1.04-3.88 0-4.33 3.56-7.86 7.95-7.86z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-dark-400/95 backdrop-blur-md rounded-b-xl"
        >
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className="block py-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex space-x-4 py-2 border-t border-gray-700 mt-2">
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                GitHub
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400">
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar