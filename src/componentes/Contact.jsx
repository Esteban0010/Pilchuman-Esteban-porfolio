import React from 'react'
import { useModal } from '../Hook/UseModal'
import Modal from './Modal'
import s from "../Styles/Contact.module.css"
import emailjs from "emailjs-com"

const Contact = () => {
    function sendEmail ( e ) {
         e.preventDefault ( ) ;
        
  emailjs.sendForm('service_jtxr1go','template_djs53gi',e.target,"JHJMZFKJhxPNw3Rwy")
 }
 const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  return (
    <section className={s.section} id="contact">
      <div>
        <h2>Gmail</h2>

        <img onClick={openModal1} src="https://res.cloudinary.com/ddroxn7iv/image/upload/v1662985527/Repositorio/gmail-small_qtecee.png" alt="logo" />
        <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <form  onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
        </Modal>
      </div>

    </section>
  )
}

export default Contact