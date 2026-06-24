import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
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
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  )
}

export default App