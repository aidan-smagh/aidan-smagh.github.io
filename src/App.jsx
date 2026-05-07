import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Header from './components/Header'
import Project from './components/Project'
import 'aos/dist/aos.css'
import AOS from 'aos'
import './App.css'

function App() {

  useEffect(() => {
    AOS.init( {once: true });
  }, []);

  return (
    <div>
      <Header/>
      <Hero/>
      <Experience/>
      <Project/>
    </div>
    );
}

export default App
