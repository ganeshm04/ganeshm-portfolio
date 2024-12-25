
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skills/>
        <Service />
        <Projects />
        <Contact />
        <Footer />
        <Toaster/>
    </div>
  )
}

export default App
