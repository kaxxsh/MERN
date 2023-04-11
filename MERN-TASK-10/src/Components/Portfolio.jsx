import { useState } from "react";
import { GrMail } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./Main.css";
import { useNavigate } from "react-router-dom";

function Portfolio() {
  const navigate = useNavigate();
  let LinkedIn = "https://www.linkedin.com/in/kameshwaran-m-001a06214";
  let GitHub = "https://github.com/kaxxsh";
  let CertificateSecurity =
    "https://drive.google.com/file/d/15aPcGYsrFQvtRChZFTrZGN0H8csBBv6m/view";
  let CertificateJava =
    "https://udemy-certificate.s3.amazonaws.com/pdf/UC-66f287f7-c85c-40b2-93d7-6cf09027a94d.pdf";
  let CertificateJavascript =
    "https://udemy-certificate.s3.amazonaws.com/pdf/UC-f3eadf46-fdf2-40ba-851b-df5501ce80ca.pdf";
  return (
    <>
      <nav>
        <div className="Nav-Box">
          <button className="Nav-Title" onClick={() => navigate("/Portfolio")}>
            Portfolio
          </button>
          <button className="Nav-Title" onClick={() => navigate("/Calculator")}>
            Calculator
          </button>
          <button className="Nav-Title" onClick={() => navigate("/Rick&morty")}>
            Rick & morty
          </button>
        </div>
      </nav>
      <div className="Portfolio">
        <div className="Main-Container">
          <section>
            <div className="Name">KAMESHWARAN M</div>
            <div className="Connect">
              <div className="Contact">
                <div className="Mail">
                  <GrMail size="1.1rem" />
                  <div className="MainID">Kameshwaran2002@gmail.com</div>
                </div>
                <div className="LinkedIn">
                  <AiFillLinkedin size="1.1rem" />
                  <a href={LinkedIn}>LinkedIn</a>
                </div>
              </div>
              <div className="Contact">
                <div className="phone">
                  <GrPhone size="1.1rem" />
                  <div className="Phonenum">8940416664</div>
                </div>
                <div className="Github">
                  <AiFillGithub size="1.1rem" />
                  <a href={GitHub}>GitHub</a>
                </div>
              </div>
            </div>
          </section>
          <div className="Career-Container">
            <div className="Career-Box">
              <div className="Carrer-Title">Career Objective</div>
            </div>
            <div className="Carrer-Content">
              <div className="Carrer-subTitle">
                I am enthusiastic about learning new things. Seeking a position
                where I can maximize my abilities and contribute to the growth
                of the organization.
              </div>
            </div>
          </div>
          <div className="Education-Container">
            <div className="Education-Box">
              <div className="Education-Title">Education</div>
            </div>
            <div className="Education-Content">
              <div className="Education-TimeLine">
                <div className="TimeLine">2020 – present</div>
                <div className="TimeLine">2018/04 – 2020/03</div>
                <div className="TimeLine">2017/04 – 2019/03</div>
              </div>
              <div className="Education-Details">
                <div className="Education">
                  <div className="Course">B.Tech Information Technology</div>
                  <div className="College">Saveetha Engineering College</div>
                  <div className="Percentage">
                    Secured 8.35 CGPA (Till 4th Semester)
                  </div>
                </div>
                <div className="Education">
                  <div className="Course">Higher Secondary Certificate</div>
                  <div className="College">Sigaram Matric Hr.Sec Schoo</div>
                  <div className="Percentage">Aggregated with 6.1%</div>
                </div>
                <div className="Education">
                  <div className="Course">
                    Secondary School Leaving Certificate
                  </div>
                  <div className="College">Sigaram Matric Hr.Sec School</div>
                  <div className="Percentage">Aggregated with 7.76%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="Skills-Container">
            <div className="Skills-Box">
              <div className="Skills-Title">Skills</div>
            </div>
            <div className="Skills-Content">
              <div className="Skills-Block">
                <div className="Skills">
                  <div className="Domain">Web Development</div>
                  <div className="Domain-Details">
                    ReactJS, JavaScript, HTML&CSS
                  </div>
                </div>
                <div className="Skills">
                  <div className="Domain">BlockChain Technology</div>
                  <div className="Domain-Details">Intermediate Level</div>
                </div>
                <div className="Skills">
                  <div className="Domain">Ethical Hacking</div>
                  <div className="Domain-Details">Intermediate Level</div>
                </div>
                <div className="Skills">
                  <div className="Domain">Placement coordinator</div>
                  <div className="Domain-Details">Information Technology</div>
                </div>
              </div>
              <div className="Skills-Block">
                <div className="Skills">
                  <div className="Domain">JAVA Programming</div>
                  <div className="Domain-Details">Advanced Level</div>
                </div>
                <div className="Skills">
                  <div className="Domain">C Programming</div>
                  <div className="Domain-Details">Intermediate Level</div>
                </div>
                <div className="Skills">
                  <div className="Domain">NFT</div>
                  <div className="Domain-Details">Advanced Level</div>
                </div>
                <div className="Skills">
                  <div className="Domain"></div>
                  <div className="Domain-Details"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="Project-Container">
            <div className="Project-Box">
              <div className="Project-Title">Project</div>
            </div>
            <div className="Project-Content">
              <div className="Project-TimeLine">
                <div className="Timeline">2023/02 – 2023/02</div>
                <div className="Timeline">2023/01 – 2023/01 </div>
                <div className="Timeline">2022/07 – 2022/12</div>
                <div className="Timeline">2023/02 – 2023/02 </div>
              </div>
              <div className="Project-Details">
                <div className="Project">
                  <div className="Project-Name"> Tic-Tac-Toe</div>
                  <div className="Project-Description">An XO game</div>
                  <div className="Project-Domain">ReactJS,HTML,CSS</div>
                </div>
                <div className="Project">
                  <div className="Project-Name">Meme_Maker</div>
                  <div className="Project-Description">
                    An user friendly Meme-Generator to create a Meme with
                    different template
                  </div>
                  <div className="Project-Domain">ReactJS,HTML,CSS</div>
                </div>
                <div className="Project">
                  <div className="Project-Name">
                    Dynamic Usage of Crypto transactions
                  </div>
                  <div className="Project-Description">
                    An user friendly webpage for crypto currency transactions
                    using blockchain technology
                  </div>
                  <div className="Project-Domain">
                    ReactJS,HTML,CSS,Solidity,ETH
                  </div>
                </div>
                <div className="Project">
                  <div className="Project-Name">Image-Searcher</div>
                  <div className="Project-Description">
                    An intractive way of representing a image searcher
                  </div>
                  <div className="Project-Domain">ReactJS,HTML,CSS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Main-Container">
          <div className="Certificate-Container">
            <div className="Certificate-Box">
              <div className="Certificate-Title">Certificate</div>
            </div>
            <div className="Certificate-Block">
              <div className="certificate-Content">
                <div className="Certificate">
                  <a className="certificate-Design" href={CertificateSecurity}>
                    Security Fundamentals
                  </a>
                  <div className="Institude">Microsoft</div>
                </div>
                <div className="Certificate">
                  <a className="certificate-Design" href={CertificateJava}>
                    Java Programming
                  </a>
                  <div className="Institude">Udemy</div>
                </div>
              </div>
              <div className="certificate-Content">
                <div className="Certificate">
                  <a
                    className="certificate-Design"
                    href={CertificateJavascript}
                  >
                    Javascript
                  </a>
                  <div className="Institude">Udemy</div>
                </div>
                <div className="Certificate">
                  <div className="Certificate-Course"></div>
                  <div className="Institude"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="Interests-Container">
            <div className="Interests-Box">
              <div className="Interests-Title">Interests</div>
            </div>
            <div className="Interests-Block">
              <div className="Course-Interests">
                <div className="Domain-Interests">NFT Technology</div>
                <div className="Domain-Interests">Web Development </div>
                <div className="Domain-Interests">Ethical Hacking</div>
                <div className="Domain-Interests">Crypto Currency</div>
              </div>
            </div>
          </div>
          <div className="Language-Container">
            <div className="Language-Box">
              <div className="Language-Title">Language</div>
            </div>
            <div className="Language-Block">
              <div className="Language-Known">
                <div className="Languages">Tamil</div>
                <div className="Languages">English</div>
              </div>
            </div>
          </div>
          <div className="Career-Container">
            <div className="Career-Box">
              <div className="Carrer-Title">Declaration</div>
            </div>
            <div className="Carrer-Content">
              <div className="Carrer-subTitle">
                I hereby declare that all the information mentioned above is
                free from error to the best of my knowledge and i bear
                responsibility for any deviation from them at any later stage
              </div>
            </div>
          </div>
          <div className="Signature-Container">
            <div className="Sign-Box">
              <div className="Sign">Kameshwaran</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
