import React, { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Marquee from "./components/Marquee"
import About from "./components/About"
import Eyes from "./components/Eyes"
import Featured from "./components/Featured"
import Cards from "./components/Cards"
import Footer from "./components/Footer"
import LocomotiveScroll from "locomotive-scroll"
import WelcomeModal from "./components/WelcomeModal"

function App() {
  const locomotiveScroll = new LocomotiveScroll()
  const [isWMOpen, setIsWMOpen] = useState(true)
  const [isFading, setIsFading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsFading(true) // Start fading out
      setTimeout(() => {
        setIsWMOpen(false) // Remove the modal after fading out
      }, 500) // Duration of the fade-out animation
    }, 2500) // Delay before starting the fade-out
  }, [])

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      {isWMOpen ? (
        <WelcomeModal isFading={isFading} />
      ) : (
        <>
          <Navbar />
          <LandingPage />
          <Marquee />
          <About />
          <Eyes />
          <Featured />
          <Cards />
          <Footer />
        </>
      )}
    </div>
  )
}

export default App
