import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import SkipLink from './components/SkipLink'
import Skeleton from './components/Skeleton'

// Lazy load components below the fold
const FeaturedProject = lazy(() => import('./components/FeaturedProject'))
const Projects = lazy(() => import('./components/Projects'))
const TechStack = lazy(() => import('./components/TechStack'))
const Experience = lazy(() => import('./components/Experience'))
const Philosophy = lazy(() => import('./components/Philosophy'))
const About = lazy(() => import('./components/About'))
const Certifications = lazy(() => import('./components/Certifications'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SkipLink />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Suspense fallback={<Skeleton className="h-96" />}>
          <FeaturedProject />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-96" />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-64" />}>
          <TechStack />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-64" />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-64" />}>
          <Philosophy />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-64" />}>
          <About />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-32" />}>
          <Certifications />
        </Suspense>
        <Suspense fallback={<Skeleton className="h-32" />}>
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App