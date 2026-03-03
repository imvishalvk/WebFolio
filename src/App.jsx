import './App.css'
import About from './Components/About'
import Hero1 from './Components/Hero1'
import NavHead from './Components/NavHead'
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
    <About />


    </div>
  )
}

export default App
