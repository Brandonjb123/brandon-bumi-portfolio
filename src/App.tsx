import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Experience from './components/Experience'
import Philosophy from './components/Philosophy'
import About from './components/About'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeaturedProject />
        <Projects />
        <TechStack />
        <Experience />
        <Philosophy />
        <About />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

export default App