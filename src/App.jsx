import { useState} from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import './App.css';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Skills from './Components/Skills';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
