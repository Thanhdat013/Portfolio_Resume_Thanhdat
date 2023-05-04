import { TypeAnimation } from "react-type-animation";

import portrait from "~/assets/img/about/1.jpg";
import bgi from "~/assets/img/about/550x640.jpg";
import myCv from "~/assets/cv/v1.0-Detail-Debugging.pdf";
const About = () => {
  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main informations about me</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
                  <div
                    className="about_image_wrap parallax"
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src={bgi} alt="550x640" />
                      <div className="inner" data-img-url={portrait}></div>
                    </div>
                    <div className="border layer" data-depth="0.2">
                      <img src={bgi} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      I'm Alan Michaelis and &nbsp;
                      <TypeAnimation
                        sequence={[
                          "Freelance",
                          2000, // Waits 1s
                          "Ui/UX ",
                          2000, // Waits 2s
                          "Engiiner",
                          2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{
                          fontSize: "1.2em",
                          display: "inline-block",
                        }}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Hi! My name is <strong>Alan Michaelis</strong>. I am a Web
                      Developer, and I'm very passionate and dedicated to my
                      work. With 20 years experience as a professional Web
                      developer, I have acquired the skills and knowledge
                      necessary to make your project a success. I enjoy every
                      step of the design process, from discussion and
                      collaboration to concept and execution, but I find the
                      most satisfaction in seeing the finished product do
                      everything for you that it was created to do.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> 01.07.1990
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Gender</label> 01.07.1990
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Interests:</label> Soccer, UFC
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Study:</label> Chicago University
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Degree:</label> Master
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Website:</label>
                          <a href="#">www.mywebsite.com</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Mail:</label>
                          <a href="mailto:example@gmail.com">
                            mymail&#64;gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Git hub:</label>
                          <a href="#">&#64;myusername</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={myCv} download>
                          <span>Download CV</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
