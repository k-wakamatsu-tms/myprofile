import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import MyAvatar from './components/MyAvatar'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Works from './components/Works'
import ScrollUp from './utils/ScrollUp'

const App: React.FC = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <MyAvatar />
      </section>
      <section id="about">
        <About></About>
      </section>
      <section id="skills">
        <Skills></Skills>
      </section>
      <section id="works">
        <Works></Works>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
      <ScrollUp />
    </>
  )
}

export default App
