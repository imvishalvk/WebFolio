import { useState } from 'react'
import './App.css'
import About from './Components/About'
import Footer from './Components/Footer'
import Hero1 from './Components/Hero1'
import NavHead from './Components/NavHead'
import Pricing from './Components/Pricing'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import ContactModal from './Components/ContactModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('')

  const openModal = (planName = '') => {
    setSelectedPlan(planName)
    setModalOpen(true)
  }

  return (
    <div className='bg-gray-900'>
      <NavHead onContactClick={() => openModal()} />
      <Hero1 />
      <hr className="w-4/5 text-white" />
      <Skills />
      <hr className="w-4/5 text-white" />
      <Projects />
      <hr className="w-4/5 text-white" />
      <Pricing openModal={openModal} />
      <hr className="w-4/5 text-white" />
      <About />
      <hr className="w-4/5 text-white" />
      <Footer />

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planName={selectedPlan}
      />
    </div>
  )
}

export default App
