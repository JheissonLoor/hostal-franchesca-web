import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Rooms from './components/Rooms'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Gallery />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
