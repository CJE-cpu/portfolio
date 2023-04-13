import React from 'react'

import { Header, About, Skills, Projects, Contact, Footer } from './containers';
import { Navbar, Profile, Banner } from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <div>
          <Navbar />
          <Header />
        </div>
        <Banner />
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App