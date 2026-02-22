import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import AnimatedCursor from './components/AnimatedCursor'
import SEO from './components/SEO'
import { reportWebVitals } from './utils/helpers'
import Home from './pages/Home'

// Lazy load other pages
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))

function App() {
  useEffect(() => {
    if (typeof reportWebVitals === 'function') {
      reportWebVitals()
    }
  }, [])

  return (
    <>
      <SEO page="home" />
      <div className="min-h-screen bg-dark-500 text-gray-100">
        <ScrollProgress />
        <AnimatedCursor />
        <Navbar />
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  )
}

// Make sure there's a default export
export default App
