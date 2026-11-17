import { useEffect } from 'react'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'
import 'aos/dist/aos.css'
import AOS from 'aos'

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Project />
      </main>
      <Footer />
    </>
  );
}

export default App
