import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import Hero1 from './Components/Hero1'
import NavHead from './Components/NavHead'
import Pricing from './Components/Pricing'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {
  return (
    <div className='bg-gray-900'>
    <NavHead/>
    <Hero1/>
    <hr className=" w-4/5 text-white" />
    <Skills/>
    <hr className=" w-4/5 text-white" />
    <Projects/>
    <hr className=" w-4/5 text-white" />
    <Pricing/>
    <hr className=" w-4/5 text-white" />
    <About />
    <hr className=" w-4/5 text-white" />
    <Footer />
    </div>
  )
}

export default App
