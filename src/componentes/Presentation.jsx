import React, { useEffect } from 'react'
import { useModal } from '../Hook/UseModal'
import Modal from './Modal'
import emailjs from "emailjs-com"
import s from "../Styles/Presentation.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from "../assets/Logo-Esteban.png"


const Presentation = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_jtxr1go', 'template_djs53gi', e.target, "JHJMZFKJhxPNw3Rwy")
  }
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once:false
    });
  }, []);
  return (
    <section className={s.presentation} id="presentation" >
      <label className={s.link__conteiner} >
        <a target="_blank" href="https://github.com/Esteban0010"><img className={s.link__img} src="https://res.cloudinary.com/ddroxn7iv/image/upload/v1662985505/Repositorio/github-small_xx2uia.png" alt="no hay img" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/esteban-pilchuman-878bb021a/"><img className={s.link__img} src="https://res.cloudinary.com/ddroxn7iv/image/upload/v1662985505/Repositorio/linkedin-small_ulvnlb.png" alt="no hay img" /></a>
      </label>
      <div className={s.present}>

        <div className={s.Saludo}><h2>Hello</h2><h2>, i’m</h2></div>
        <h1 className={s.name}>Pilchuman Esteban</h1>
        <h1>Fullstack web Developer</h1>
        <p>I have a preference for the frontend, I am passionate about new technologies and the details that make a project stand out from the rest.</p>
        <button onClick={openModal1}>Let’s Talk</button>
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
          <form onSubmit={sendEmail}>
            <div className={s.nameEmail}>
              <div className={s.form__group}>
                <input className={s.form__input} type="text" name="user_name" id='name' placeholder=' ' />
                <label for="name" className={s.form_label}>Name</label>
              </div>
              <div className={s.form__group}>
                <input className={s.form__input} type="email" name="user_email" id='mail' placeholder=' ' />
                <label for="mail" className={s.form_label}>Mail</label>
              </div>
            </div>
            <div className={s.ContMsj}>
              <h3>Message</h3>
              <textarea className={s.msj} name="message" />
            </div>
            <button onClick={closeModal1} type="submit" value="Send" >Send</button>
          </form>
        </Modal>
      </div>
      <img data-aos="zoom-out-right"
        className={s.imgR}
        src={Logo} alt='No img' />
    </section>
  )
}

export default Presentation