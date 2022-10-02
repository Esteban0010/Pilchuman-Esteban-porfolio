import React, { useState, useEffect } from 'react'
import nav from "../Styles/NavBar.module.css"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { motion } from 'framer-motion'

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [shouldShowActions, setShouldShowActions] = useState()
  const [lastYPos, setLastYPos] = useState(0);
  useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos < lastYPos;
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener('scroll', handleScroll, false);
    return () => {
      window.removeEventListener('scroll', handleScroll, false)
    };
  }, [lastYPos])

  return (
    <motion.header
      className={nav.header}
      animate={{ opacity: shouldShowActions ? 1 : 0 }}
      initial={{ opacity: 0 }}
      transition={{ opacity: { duration: 0.2 } }}
    >
      <nav className={nav.nav}>
        <a href='../assets/Cv_Pilchuman_Esteban_Dev.pdf' download><button className={nav.nombre}>Download CV</button></a>{!open ? (
          <button onClick={() => setOpen(!open)} className={nav.open}>
            <AiOutlineMenu />
          </button>
        ) : (
          <ul className={nav.ul}>
            <button onClick={() => setOpen(!open)} className={nav.close}>
              <AiOutlineClose />
            </button>
            <li><a onClick={() => setOpen(!open)} href="#presentation">Home</a></li>
            <li><a onClick={() => setOpen(!open)} href="#proyect">Proyect</a></li>
            <li><a onClick={() => setOpen(!open)} href="#skill">Skill</a></li>
            {/* <li><a onClick={() => setOpen(!open)} href="#contact">Contact</a></li>
        <li><a onClick={() => setOpen(!open)} href="#contact">About me</a></li> */}
          </ul>)}
        <ul className={nav.menu}>
          <li><a onClick={() => setOpen(!open)} href="#presentation">Home</a></li>
          <li><a onClick={() => setOpen(!open)} href="#proyect">Proyect</a></li>
          <li><a onClick={() => setOpen(!open)} href="#skill">Skill</a></li>
          {/* <li><a onClick={() => setOpen(!open)} href="#contact">Contact</a></li>
        <li><a onClick={() => setOpen(!open)} href="#contact">About me</a></li> */}
        </ul>
      </nav>
    </motion.header>
  )
}

export default NavBar