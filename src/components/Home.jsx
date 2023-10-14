import React from 'react'
import { Link } from 'react-scroll';
import '../styles/Home.css'

function Home() {
  return (
    <main>
        <div className='home__content'>
            <h1 className='home__title'>¡Hola! Soy Walter Jiménez</h1>
            <p className='home__description'>Soy un desarrollador web, me gusta aprender nuevas tecnologías y crear proyectos.</p>
            <div className='home__btn-container'>
                <Link className='home__btn' to='About' smooth= {true}>Más sobre mí</Link>
            </div>
        </div>
    </main>
  )
}

export { Home }