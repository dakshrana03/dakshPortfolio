import React from "react";
import "./Education.css";
import services from "../Data/Education.json";

const Education = () => {
  return (
    <div id="educationn">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <ul className="nav nav-tabs" data-aos="fade-down">
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#education">
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#internship">
                  Internship
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="education">
                {services.map((item, i) => (
                  <div className="card educationblock" key={i}>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-5">
                          <h5 data-aos="fade-right">
                            {item.coursename} - {item.courseyear}
                          </h5>
                        </div>
                        <div className="col-sm-7">
                          <div className="educationright">
                            <h5 data-aos="fade-left">{item.institute}</h5>
                            <h6 data-aos="fade-left">{item.grade}</h6>
                            <ul className="education-points">
                              <li>Maintained an 83% average throughout the degree.</li>
                              <li>Learned and implemented Data Structures and Algorithms.</li>
                              <li>Worked on Machine Learning models for coursework and projects.</li>
                              <li>Participated in game development events, CS seminars, and clubs.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="tab-pane fade" id="internship">
                <div className="card educationblock">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-5">
                        <h5 data-aos="fade-right">August 2023 – April 2024</h5>
                      </div>
                      <div className="col-sm-7">
                        <div className="educationright" data-aos="fade-left">
                          <h5><b>Huskie’s Athletics Association</b></h5>
                          <h6><em>Statistical Analyst</em></h6>
                          <h6>
                            - Statistical analysis using SPSS, Excel, and R,
                            <br />
                            - Developed and maintained databases for managing research data, increasing data retrieval efficiency by 30%.
                            <br />
                            - Collaborated with 10+ team members to interpret statistical results and conducted quality control checks on 100+ data entries, ensuring 98% data accuracy.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card educationblock">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-5">
                        <h5 data-aos="fade-right">April 2023 – August 2023</h5>
                      </div>
                      <div className="col-sm-7">
                        <div className="educationright" data-aos="fade-left">
                          <h5><b>Information Technology & Communication University of Saskatchewan</b></h5>
                          <h6><em>Information Technology Summer Student Analyst</em></h6>
                          <h6>
                            - Performed BIOS wipes and hardware data wipe procedures on 50+ devices; re-imaged 200+ computers for deployment.
                            <br />
                            - Used Identity and access management (IAM) for security management. Resolved 100+ tickets monthly with a 95% first-time resolution rate.
                            <br />
                            - Used Python and PowerShell to automate routine IT tasks, significantly reducing manual effort and increasing operational efficiency.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
