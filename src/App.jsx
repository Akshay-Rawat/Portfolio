import Navbar from './components/Navbar'
import About from './sections/About'
import AboutMe from './sections/AboutMe'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import HowIWork from './sections/HowIWork'

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <AboutMe />
      <HowIWork />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default App