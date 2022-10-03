import React from 'react'
import s from "../Styles/Proyect.module.css"
import { useModal } from '../Hook/UseModal'
import Modal from './Modal'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Proyect = () => {
  const [isOpenModal2, openModal2, closeModal2] = useModal(false)
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  const [isOpenModal3, openModal3, closeModal3] = useModal(false)
  return (
    <section className={s.proyect} id="proyect">
      <proyect className={s.container}>
        <div data-aos="fade-up" 
        data-aos-duration="6000"
        className={s.card} style={{transition: "1000ms"}} >
          <div className={s.cover}>
            <a target="_blank" href="https://rgbtech.vercel.app/">
              <img src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1664201968/Repositorio/Astronauta_3d_t1axew.png' alt="" />
            </a>
            <div className={s.imgback}></div>
          </div>
          <div className={s.description}>
            <h2>RGBTech</h2>
            <p>E-commerce focused on gamer products</p>
            <button onClick={openModal1}>Details</button>
            <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
              <div className={s.container__details}>
                <h3><a className={s.title__details} target="_blank" href="https://rgbtech.vercel.app/"> RGBTech</a></h3>
                <hr />
                <p className={s.detail}>
                  The application was developed in Henry's bootcamp among 6 members applying the Scrum work methodology.<br />
                  This application has functionalities such as:<br />
                  - User management and permissions configuration<br />
                  - Notifications to user through mail ( Nodemailer )<br />
                  - Payment gateway integration (Paypal)<br />
                  - Management of favorites and shopping cart<br />
                  - Administrator panel with sales statistics and CRUD for product management.<br />
                  <br />
                </p>
                <p className={s.detail}>
                  Applied technologies:<br />
                  - frontend: React, Redux toolkit, Tailwind.<br />
                  - backend: Node.js, express, Nodemailer, Paypal payment gateway.<br />
                  - Database: Sequelize, PostgreSQL.<br />
                  - DVCS: Git, GitHub<br />
                  - Project management: Trello, Figma.<br />
                </p>
              </div>
            </Modal>
          </div>
        </div>
        <div data-aos="fade-up"
        data-aos-duration="6000"
         className={s.card}
         style={{transition: "1000ms"}} >
          <div className={s.cover}>
            <img src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1663243330/Repositorio/cardDog_bbdxl7.png' alt='' />
            <div className={s.imgback}></div>
          </div>
          <div className={s.description}>
            <h2>Dog Breeds</h2>
            <p>Single Page Application about dog breeds.</p>
            <button onClick={openModal2}>Details</button>
            <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
              <div className={s.container__details}>
                <h3><a className={s.title__details} > DOG BREEDS</a></h3>
                <hr />
                <p className={s.detail}>
                  Solo project done at Henry's bootcamp, accessing a dog breeds API<br />
                  This application has functionalities such as:<br />
                  - Filter the different races by their characteristics<br />
                  - Create new races<br />
                  - Edit races<br />
                  <br />
                </p>
                <p className={s.detail}>
                  Applied technologies:<br />
                  - frontend: React, Redux, Css.<br />
                  - backend: Node.js, Express.<br />
                  - Database: Sequelize, PostgreSQL.<br />
                </p>
              </div>
            </Modal>
          </div>
        </div>
        <div data-aos="fade-up" 
        data-aos-duration="6000"
        className={s.card} 
        style={{transition: "1000ms"}}>
          <div className={s.cover}>
            <img src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1663243664/Repositorio/card_portafolio_jdu2hu.png' alt="" />
            <div className={s.imgback}></div>
          </div>
          <div className={s.description}>
            <h2>Portafolio</h2>
            <p>my Portfolio, which will be updated over time</p>
            <button onClick={openModal3}>Details</button>
            <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
            <div className={s.container__details}>
                <h3><a className={s.title__details} > MY PORFOLIO</a></h3>
                <hr />
                <p className={s.detail}>
                I try to represent my tastes regarding web design and other areas that identify me<br />
                   As my knowledge improves, I will add new features that allow it to stand out more<br />
                   <br />
                   About me:<br />
                   -I love drawing and music<br />
                   -In my free time I practice with my Sax,<br />
                   or play different online games.<br />
                </p>
              </div>
            </Modal>
          </div>
        </div>
      </proyect>

    </section>
  )
}

export default Proyect