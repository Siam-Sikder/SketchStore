import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import Features from './components/Features';
import Facts from './components/Facts';
import Screenshots from './components/Screenshots';
import Download from './components/Download';
import HowTo from './components/HowTo';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <Features/>
      <Facts/>
      <Screenshots/>
      <Download/>
      <HowTo/>
      <Pricing/>
      <Contact/>
    </>
  )
}

export default App
