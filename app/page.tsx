'use client'

import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Capabilities from "../components/Capabilities"
import Thinking from "../components/Thinking"
import Projects from "../components/Projects"
import Learning from "../components/Learning"
import TechStack from "../components/TechStack"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Capabilities />
      <Thinking />
      <Projects />
      <Learning />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
