import { useEffect } from 'react'
import { Element, scroller } from 'react-scroll';
import { Header } from './components/Header.jsx'
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'
import { Projects } from './components/Projects.jsx'
import { Contact } from './components/Contact.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <Element name='Home'>
        <Home/>
      </Element>
      <Element name='About'>
        <About/>
      </Element>
      <Element name='Projects'>
        <Projects/>
      </Element>
      <Element name='Contact'>
        <Contact/>
      </Element>
    </>
  )
}

export default App
