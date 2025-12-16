import React from 'react'
import "./about.css"
import about from "../../assets/images/about.png"
import play_icon from "../../assets/images/play-icon.png"

export default function About () {
  return (
     <div className='about'>
      <div className="about-left">
        <img src={about} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
     <div className="about-right">
        <h3> ABOUT UNIVERSITY </h3>
        <h2> Nurturing Tomorrow's Leader Today </h2>
        <p> With a focus on innovation, hands-on learning and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools and communities.</p>
        <p> Whether you aspire to become a teacher, administrator, counselor or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education. </p>
        </div>
    </div>
  )
}



