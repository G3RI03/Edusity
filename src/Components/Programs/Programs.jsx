import React from 'react'
import './Programs.css'
import student1 from '../../assets/student1.png'
import student2 from '../../assets/student2.png'
import student3 from '../../assets/student3.png'


const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={student1} alt="" />
        <div className="caption"></div>
           <img src="" alt="" />
           <p>Graduation Degree</p>
      </div>

      <div className="program">
        <img src={student2} alt="" />
         <div className="caption"></div>
           <img src="" alt="" />
           <p>Master Degree</p>
      </div>

      <div className="program">
        <img src={student3} alt="" />
         <div className="caption"></div>
           <img src="" alt="" />
           <p>Post Graduation </p>
      </div>
    </div>
  )
}

export default Programs