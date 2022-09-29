import React from 'react'
import s from "../Styles/Skill.module.css"
import estudio from "../assets/Estudios.png"

const Skill = () => {
  return (
    <section className={s.skill} id="skill">
      <h1> Skills and Experiencie</h1> 
      <div className={s.exp}>
    <div className={s.cont} >
      <div className={s.conteiner}>
        <img className={s.Image} src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1662985504/Repositorio/JavaScrip-small_hrfkhu.png' alt=''/>
        <h3>Javascript</h3>
        </div>
        <div className={s.conteiner}>
        <img className={s.Image} src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1662985509/Repositorio/React-small_b8kikx.png' alt=''/>
        <h3>React.js</h3>
        </div>
        <div className={s.conteiner}>
        <img className={s.Image} src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1662985507/Repositorio/node-small_tvf36p.png' alt=''/>
        <h3>Node.js</h3>
        </div>
        <div className={s.conteiner}>
        <img className={s.Image} src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1663069080/Repositorio/PostgreSQL-small_rtkhyc.png' alt=''/>
        <h3>PostgreSQL</h3>
        </div>
        <div className={s.conteiner}>
        <img className={s.Image} src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1662985508/Repositorio/Redux-small_gbwygr.png' alt=''/>
        <h3>Redux</h3>
        </div>
        <div className={s.conteiner}>
        <img className={s.Image} src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1663069080/Repositorio/Photoshop-small_k7gf1o.png' alt=''/>
        <h3>Photoshop</h3>
        </div>
        <div className={s.conteiner}>
        <img className={s.Image} src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1663069078/Repositorio/html5-small_m6oqsw.png' alt=''/>
        <h3>HTML5</h3>
        </div>
        <div className={s.conteiner}>
        <img className={s.Image} src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1663069078/Repositorio/Css3-small_b7zkc1.png' alt=''/>
        <h3>CSS</h3>
        </div>
        <div className={s.conteiner}>
        <img className={s.Image} src='https://res.cloudinary.com/ddroxn7iv/image/upload/v1663184914/Repositorio/Sequelize_-small_wsx5ox.png' alt=''/>
        <h3>Sequelize</h3>
        </div>
    </div>
    <div className={s.experiencia}>
    <div className={s.backgroundexp}>
      <div className={s.titleExp}><h2>2022 -</h2>
      
      <h2>Graduate student</h2></div>
      <p>Henry<br/>Bootcamp with +800 hours of programming based on practices and real projects</p>
      <div className={s.titleExp}><h2>2022-   </h2>
      <h2>Full-Stack Developer</h2></div>
      <p>Henry<br/>Design and develop an E-commerce oriented to the sale of gamer products</p>
      </div >
      <div className={s.conteiner_logo}>
      <img src="https://res.cloudinary.com/ddroxn7iv/image/upload/v1664469239/Repositorio/Logo-Esteban_b4cff0.png" alt="sin img" className={s.Studi} />
      </div>
    </div>
</div>
    </section>
  )
}

export default Skill