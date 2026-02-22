// ============================================
// SEO & Meta Tags Generator
// ============================================

const baseUrl = 'https://zashkim-dev.onrender.com'

export const generateMetaTags = (page, customData = {}) => {
  const defaults = {
    home: {
      title: 'Zacharia Kimani - Full-Stack Developer | Kenya',
      description: 'Full-Stack Developer from Kenya specializing in web applications, mobile apps, and backend systems. Expert in React, Node.js, and modern web technologies.',
      image: '/og-home.jpg',
      keywords: 'Full-Stack Developer Kenya, React Developer, Node.js Expert, Web Development Kenya'
    },
    about: {
      title: 'About Zacharia Kimani - Full-Stack Developer from Kenya',
      description: 'Learn about Zacharia Kimani, a passionate Full-Stack Developer based in Kenya with 5+ years of experience building scalable web and mobile solutions.',
      image: '/og-about.jpg',
      keywords: 'Zacharia Kimani bio, Kenya developer, Full-Stack developer profile'
    },
    projects: {
      title: 'Projects by Zacharia Kimani - Web & Mobile Applications',
      description: 'Explore portfolio projects including WhatsApp automation bots, e-commerce platforms, and cross-platform mobile applications built with modern technologies.',
      image: '/og-projects.jpg',
      keywords: 'React projects, Node.js portfolio, mobile apps Kenya, WhatsApp bot'
    },
    contact: {
      title: 'Contact Zacharia Kimani - Full-Stack Developer',
      description: 'Get in touch with Zacharia Kimani for collaboration, project inquiries, or development opportunities.',
      image: '/og-contact.jpg',
      keywords: 'hire developer Kenya, contact Full-Stack developer'
    }
  }

  const data = { ...defaults[page], ...customData }
  
  return {
    title: data.title,
    meta: [
      { name: 'description', content: data.description },
      { name: 'keywords', content: data.keywords },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${baseUrl}${customData.path || '/'}` },
      { property: 'og:title', content: data.title },
      { property: 'og:description', content: data.description },
      { property: 'og:image', content: `${baseUrl}${data.image}` },
      { property: 'og:site_name', content: 'Zacharia Kimani Portfolio' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: `${baseUrl}${customData.path || '/'}` },
      { name: 'twitter:title', content: data.title },
      { name: 'twitter:description', content: data.description },
      { name: 'twitter:image', content: `${baseUrl}${data.image}` },
      { name: 'twitter:creator', content: '@zachariakimani' },
      
      // Additional SEO
      { name: 'author', content: 'Zacharia Kimani' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'English' }
    ]
  }
}

// ============================================
// Structured Data (JSON-LD) for Rich Snippets
// ============================================

export const getStructuredData = (type = 'person') => {
  const baseStructured = {
    person: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Zacharia Kimani',
      url: baseUrl,
      image: `${baseUrl}/profile.jpg`,
      sameAs: [
        'https://github.com/dev-zashkim',
        'https://www.linkedin.com/in/zachariah-kimani-759247391/',
        'https://twitter.com/zachariakimani'
      ],
      jobTitle: 'Full-Stack Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nairobi',
        addressCountry: 'KE'
      },
      knowsAbout: [
        'React.js',
        'Node.js',
        'React Native',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
        'Express.js',
        'Tailwind CSS'
      ]
    },
    
    website: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Zacharia Kimani Portfolio',
      url: baseUrl,
      description: 'Full-Stack Developer portfolio showcasing web and mobile applications',
      author: {
        '@type': 'Person',
        name: 'Zacharia Kimani'
      }
    },
    
    breadcrumb: (path) => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: path.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${baseUrl}${item.url}`
      }))
    })
  }

  return type === 'person' ? baseStructured.person : 
         type === 'website' ? baseStructured.website : 
         baseStructured.breadcrumb
}

// ============================================
// Image Optimization
// ============================================

export const optimizedImageProps = (src, alt, options = {}) => {
  const { width, height, priority = false, className = '' } = options
  
  return {
    src,
    alt,
    width,
    height,
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
    fetchpriority: priority ? 'high' : 'auto',
    onLoad: (e) => {
      e.currentTarget.classList.add('image-loaded')
    },
    onError: (e) => {
      e.currentTarget.src = '/fallback-image.jpg'
    },
    className: `optimized-image ${className}`
  }
}

// ============================================
// Performance Monitoring
// ============================================

export const reportWebVitals = () => {
  if (process.env.NODE_ENV === 'production' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = window.performance.timing
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart
        const ttfb = perfData.responseStart - perfData.requestStart
        
        console.log('📊 Performance Metrics:', {
          'Page Load Time': `${pageLoadTime}ms`,
          'Time to First Byte': `${ttfb}ms`,
          'DOM Interactive': perfData.domInteractive - perfData.navigationStart + 'ms'
        })
      }, 0)
    })
  }
}

// ============================================
// Form Validation & Helpers
// ============================================

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  return re.test(phone)
}

export const sanitizeInput = (input) => {
  return input.replace(/[<>]/g, '')
}

// ============================================
// Scroll & Animation Utilities
// ============================================

export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

export const getScrollPosition = () => {
  return {
    x: window.scrollX,
    y: window.scrollY
  }
}

// ============================================
// Date & Time Utilities
// ============================================

export const getCurrentYear = () => new Date().getFullYear()

export const formatDate = (date, options = {}) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  })
}