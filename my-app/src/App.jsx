import { useState } from 'react'
import './App.css'
import AboutUs from './components/About-Us-Page/AboutUs'
import HireAGuide from './components/Order-A-Gudie/HireAGuide'
import Nav from './components/About-Us-Page/Nav/Nav'

function App() {
  const [currentPage, setCurrentPage] = useState('about');

  return (
    <div>
      <Nav setCurrentPage={setCurrentPage} />

      <main className="main-content">
        {currentPage === 'about' && <AboutUs />}
        {currentPage === 'hire' && <HireAGuide />}
      </main>
    </div>
  )
}

export default App
