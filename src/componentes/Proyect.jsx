import React from 'react'
import s from "../Styles/Proyect.module.css"
import { useModal } from '../Hook/UseModal'
import Modal from './Modal'

const Proyect = () => {
  const[isOpenModal2,openModal2,closeModal2] =useModal(false)
  const[isOpenModal1,openModal1,closeModal1] =useModal(false)
  const[isOpenModal3,openModal3,closeModal3] =useModal(false)
  return (
    <section  className={s.proyect} id="proyect">
        <proyect className={s.container}>
        <div className={s.card} >
            <div className={s.cover}>
              <a target="_blank" href="https://rgbtech.vercel.app/">
            <img   src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1664201968/Repositorio/Astronauta_3d_t1axew.png' alt=""/>
            </a>
            <div className={s.imgback}></div>
            </div>
            <div className={s.description}>
              <h2>RGBTech</h2>
              <p>E-commerce focused on gamer products</p>
                <button onClick={openModal1}>Details</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h3>RGBTech</h3>
                <p className={s.detail}>
                <a className={s.title__details} target="_blank" href="https://rgbtech.vercel.app/"> RGBTech</a>
La aplicación fue desarrollada en el bootcamp de Henry entre 6 integrantes aplicando la metodologia de trabajo Scrum<br/>
- La misma se desarrollo con diversas tecnologias:<br/>
- Para el frontend: React, Redux toolkit,Tailwind, Auth0,Cloudinary.<br/>
- Para el backend: Node.js con express, Nodemailer, pasarela de pago de Paypal.<br/>
- Para base de datos: Sequelize, PostgreSQL.<br/>
- Control de versión: Git y GitHub<br/>
- Manejo de proyectos: Trello, Figma.<br/>
- Deployment de la aplicación a través de Railway y Vercel<br/>

Esta aplicación cuenta con funcionalidades cómo:<br/>
- Management de usuarios y configuración de permisos<br/>
- Notificaciones a usuario a través de mail ( Nodemailer )<br/>
- Integración de pasarela de Pago ( Paypal)<br/>
- Manejo de favoritos y carrito de compras<br/>
- Panel de administrador con estadísticas de ventas y CRUD para manejo de productos.<br/>
</p>
            </Modal>
            </div>
        </div>
        <div className={s.card} >
            <div className={s.cover}>
            <img src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1663243330/Repositorio/cardDog_bbdxl7.png' alt=''/>
            <div className={s.imgback}></div>
            </div>
            <div className={s.description}>
              <h2>Dog Breeds</h2>
              <p>Single Page Application about dog breeds.</p>
              <button onClick={openModal2}>Details</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h3>Modal1</h3>
                <p>Hola este es el contenido de mi modal 1</p>
            </Modal>
            </div>
        </div>
        <div className={s.card} >
            <div className={s.cover}>
            <img src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1663243664/Repositorio/card_portafolio_jdu2hu.png' alt=""/>
            <div className={s.imgback}></div>
            </div>
            <div className={s.description}>
              <h2>Portafolio</h2>
              <p>my Portfolio, which will be updated over time</p>
              <button onClick={openModal3}>Details</button>
            <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                <h3>Modal1</h3>
                <p>Hola este es el contenido de mi modal 1</p>
            </Modal>
            </div>
        </div>
        </proyect>
        
    </section>
  )
}

export default Proyect