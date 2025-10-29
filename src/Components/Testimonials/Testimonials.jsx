import React, { useRef } from "react";
import "./Testimonials.css";
import next from "../../assets/next.png";
import back from "../../assets/back.png";
import student from "../../assets/student.png";
import student6 from "../../assets/student6.png";
import student7 from "../../assets/student7.png";
import student1 from "../../assets/student1.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 50; // move by 50% since two cards per view
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 50;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={back} alt="Back" className="back-btn" onClick={slideBackward} />
      <img src={next} alt="Next" className="next-btn" onClick={slideForward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={student} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions ever. The supportive community, state-of-the-art
                facilities, and commitment to academic excellence have truly
                exceeded my expectations.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={student6} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Studying at Edusity has been a transformative experience. The
                professors are incredibly supportive, the resources are
                top-notch, and the learning environment encourages growth and
                innovation. I feel confident in my skills and future career
                opportunities.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={student7} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                I couldn’t have chosen a better place for my higher education.
                Edusity’s focus on practical experience, state-of-the-art labs,
and collaborative culture has helped me develop both personally
                and professionally. Every day here has been inspiring.
              </p>
            </div>
          </li>
           <li>
            <div className="slide">
              <div className="user-info">
                <img src={student1} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Studying at Edusity has been a transformative experience. The
                professors are incredibly supportive, the resources are
                top-notch, and the learning environment encourages growth and
                innovation. I feel confident in my skills and future career
                opportunities.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
