import styles from './App.module.css'
import { Navbar } from './components/Navbar/Navbar';
import { Intro } from './components/Intro/Intro';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { useEffect } from 'react';
import Aos from"aos";
import 'aos/dist/aos.css';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  useEffect(()=>{
    Aos.init({duration: 1000, // Duración de las animaciones
    offset: 200, // Desplazamiento antes de iniciar la animación
    disable: 'mobile' })
  },[]);
  return (
  <div className={styles.App}>
    <Navbar />
    <Intro />
    <About />
    <Experience />
    <Projects />
    <Contact />
  </div>
  );
}

export default App
