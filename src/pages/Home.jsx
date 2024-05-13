import React from 'react'
import Contact from '../componentes/Contact'
import NavBar from '../componentes/NavBar'
import Presentation from '../componentes/Presentation'
import Proyect from '../componentes/Proyect'
import Skill from '../componentes/Skill'

const Home = () => {
  return (
    <div>
      
    <NavBar/>
    <Presentation/>
    <Proyect/>
    <Skill/>
    <Contact/>
    </div>
  )
}

export default Home