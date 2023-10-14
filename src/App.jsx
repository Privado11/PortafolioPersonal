import { useEffect } from 'react'
import { Element, scroller } from 'react-scroll';
import './App.css'
import { Header } from './components/Header.jsx'
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'

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
    </>
  )
}

export default App
