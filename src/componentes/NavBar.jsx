import React, { useState } from "react";
import nav from "../Styles/NavBar.module.css"
import { AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <header className={nav.header}>
      <nav className={nav.nav}>
      <a href='../assets/Cv_Pilchuman_Esteban_Dev.pdf' download><button className={nav.nombre}>Download Cv</button></a>{!open ? (
				  <button onClick={() => setOpen(!open)} className={nav.open}>
          <AiOutlineMenu/>
          </button>
			) : (
				<ul className={nav.ul}>
        <button onClick={() => setOpen(!open)} className={nav.close}>
        <AiOutlineClose/>
        </button>
        <li><a onClick={() => setOpen(!open)} href="#presentation">Inicio</a></li>
        <li><a onClick={() => setOpen(!open)} href="#proyect">Proyect</a></li>
        <li><a onClick={() => setOpen(!open)} href="#skill">Skill</a></li>
        {/* <li><a onClick={() => setOpen(!open)} href="#contact">Contact</a></li>
        <li><a onClick={() => setOpen(!open)} href="#contact">About me</a></li> */}
      </ul>)}
      <ul className={nav.menu}>
        <li><a onClick={() => setOpen(!open)} href="#presentation">Inicio</a></li>
        <li><a onClick={() => setOpen(!open)} href="#proyect">Proyect</a></li>
        <li><a onClick={() => setOpen(!open)} href="#skill">Skill</a></li>
        {/* <li><a onClick={() => setOpen(!open)} href="#contact">Contact</a></li>
        <li><a onClick={() => setOpen(!open)} href="#contact">About me</a></li> */}
      </ul>
    </nav>
    </header>
  )
}

export default NavBar