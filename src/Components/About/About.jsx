import React from 'react'
import './About.css'
import About1 from '../../assets/About1.png'
import playbutton from '../../assets/playbutton.png'
const About = () => {
   return (
    <div className='about'>
      <div className="about-left">
        <img src={About1} alt="About" />
        <img src={playbutton} alt="Play" className="play-icon" />
      </div>

      <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our university’s comprehensive education programs. 
         Our cutting-edge curriculum empowers students with the knowledge, skills, and real-world experiences 
         needed to excel in the ever-evolving field of education.</p>
         <p>With a strong focus on innovation, hands-on learning, and personalized mentorship, our programs prepare 
         aspiring educators to create meaningful impact in classrooms, schools, and communities.</p>
         <p>Join us and start shaping the future of education — one learner at a time.</p>

        </div>

    </div>
  )
}

export default About