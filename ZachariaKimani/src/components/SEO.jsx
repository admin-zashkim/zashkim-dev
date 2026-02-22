import { useEffect } from 'react'

const SEO = ({ page = 'home', customData = {} }) => {
  // Default SEO data
  const seoData = {
    home: {
      title: 'Zacharia Kimani - Full-Stack Developer | Kenya',
      description: 'Full-Stack Developer from Kenya specializing in web applications, mobile apps, and backend systems. Expert in React, Node.js, and modern web technologies.',
      keywords: 'Full-Stack Developer Kenya, React Developer, Node.js Expert, Web Development Kenya'
    },
    about: {
      title: 'About Zacharia Kimani - Full-Stack Developer from Kenya',
      description: 'Learn about Zacharia Kimani, a passionate Full-Stack Developer based in Kenya building scalable web and mobile solutions.',
      keywords: 'Zacharia Kimani bio, Kenya developer, Full-Stack developer profile'
    },
    projects: {
      title: 'Projects by Zacharia Kimani - Web & Mobile Applications',
      description: 'Explore portfolio projects including WhatsApp automation bots, e-commerce platforms, and cross-platform mobile applications.',
      keywords: 'React projects, Node.js portfolio, mobile apps Kenya, WhatsApp bot'
    },
    contact: {
      title: 'Contact Zacharia Kimani - Full-Stack Developer',
      description: 'Get in touch with Zacharia Kimani for collaboration, project inquiries, or development opportunities.',
      keywords: 'hire developer Kenya, contact Full-Stack developer'
    }
  }

  const data = seoData[page] || seoData.home
  const baseUrl = 'https://zashkim-dev.onrender.com'
  const path = customData.path || '/'

  useEffect(() => {
    // Update document title
    document.title = data.title

    // Update or create meta tags
    const updateMetaTag = (name, content, property = false) => {
      let tag = property 
        ? document.querySelector(`meta[property="${name}"]`)
        : document.querySelector(`meta[name="${name}"]`)
      
      if (!tag) {
        tag = document.createElement('meta')
        if (property) {
          tag.setAttribute('property', name)
        } else {
          tag.setAttribute('name', name)
        }
        document.head.appendChild(tag)
      }
      
      tag.setAttribute('content', content)
    }

    // Basic meta tags
    updateMetaTag('description', data.description)
    updateMetaTag('keywords', data.keywords)
    updateMetaTag('author', 'Zacharia Kimani')
    updateMetaTag('robots', 'index, follow')

    // Open Graph tags
    updateMetaTag('og:type', 'website', true)
    updateMetaTag('og:url', `${baseUrl}${path}`, true)
    updateMetaTag('og:title', data.title, true)
    updateMetaTag('og:description', data.description, true)
    updateMetaTag('og:image', `${baseUrl}/og-image.jpg`, true)
    updateMetaTag('og:site_name', 'Zacharia Kimani Portfolio', true)

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', data.title)
    updateMetaTag('twitter:description', data.description)
    updateMetaTag('twitter:image', `${baseUrl}/og-image.jpg`)

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `${baseUrl}${path}`)

    // Set language
    document.documentElement.setAttribute('lang', 'en')

  }, [page, data, path, baseUrl])

  // This component doesn't render anything
  return null
}

export default SEO
