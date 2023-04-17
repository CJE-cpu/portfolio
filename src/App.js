import React from 'react'

import { Header, About, Skills, Projects, Contact, Footer } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <div>
          <Navbar />
          <Header />
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App