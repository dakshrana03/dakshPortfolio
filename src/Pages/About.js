import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
                Aspiring software developer blending expertise in computer science with a love for problem-solving. Dedicated to creating impactful and efficient code that drives success.
                <hr></hr>
                <h4>Fun Facts About Me</h4>
                <ul> <li><strong>Sports Enthusiast</strong>: I enjoy playing soccer and other sports.</li> <li><strong>Adventure Seeker</strong>: I love trying new cuisines and outdoor activities.</li> <li><strong>Multilingual</strong>: I speak three languages.</li> <li><strong>Avid Reader</strong>: I read extensively across various genres.</li> </ul>
              </p>


            </div>
          </div>
        </div>

        {/* Technical Skills Card */}
        <div className="row mt-5">
          <div className="col-sm-11 offset-sm-1">
            <div className="skills-card">
              <h4>Technical Skills</h4>
              <ul>
                <li><strong>Experienced in</strong>: HTML, CSS, JavaScript, Python, Java, C#, C, C++, Bash, and Shell </li>
                <li><strong>Well-versed in</strong>: Data Structures and Algorithms, tackling complex computational problems effectively.</li>
                <li><strong>Proficient with</strong>: Object-Oriented Programming practices that facilitate modular design and promote code reuse across applications.</li>
                <li><strong>Skilled in</strong>: PostgreSQL and MySQL, guaranteeing robust data storage and retrieval capabilities.</li>
                <li><strong>Comfortable with</strong>: Version control systems like Git and GitHub</li>
                <li><strong>Knowledgeable about</strong>: Frameworks and libraries such as React, jQuery, Bootstrap, TailwindCSS, Express, Django, NumPy, Pandas, and TensorFlow.</li>
                <li><strong>Familiar with</strong>: Agile software methodologies, Software Architecture concepts, and SOLID design principles.</li>
              </ul>


            </div>
          </div>
        </div>

        {/* Soft Skills Card */}
        <div className="row mt-5">
          <div className="col-sm-11 offset-sm-1">
            <div className="skills-card">
              <h4>Soft Skills</h4>
              <ul>
                <li>Driven by passion and enthusiasm, effectively shares ideas while fostering an open dialogue.</li>
                <li>Adept at learning new concepts and embraces constructive feedback to grow.</li>
                <li>Collaborative spirit for teamwork, thriving in diverse group settings.</li>
                <li>Exceptional in guiding teams, inspiring others to reach their full potential.</li>
                <li>Consistently reliable and dedicated, committed to excellence in every endeavor.</li>

              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
