import { TypeAnimation } from "react-type-animation"
import { useRef, useEffect } from "react"
import portrait from "~/assets/img/about/1.jpg"
import bgi from "~/assets/img/about/550x640.jpg"
import myCv from "~/assets/cv/v1.0-Detail-Debugging.pdf"
import Parallax from "parallax-js"
import { isMobile } from "react-device-detect"
const About = () => {
  const sceneEl = useRef(null)

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      })
      parallaxInstance.enable()
      return () => parallaxInstance.disable()
    }
  }, [])
  ;<div ref={sceneEl}>{/* html */}</div>

  return (
    <>
      <div
        style={{ height: "100vh" }}
        className={
          isMobile
            ? "arlo_tm_section device-mobile relative"
            : "arlo_tm_section relative"
        }
        id="about"
      >
        <div
          className={
            isMobile
              ? "arlo_tm_about_wrapper_all about-mobile"
              : "arlo_tm_about_wrapper_all"
          }
        >
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Main information about me</span>
            </div>
            <div
              className={
                isMobile
                  ? "arlo_tm_about_wrap about-mobile"
                  : "arlo_tm_about_wrap"
              }
            >
              <div className="author_wrap">
                <div className={isMobile ? "leftbox about-mobile" : "leftbox"}>
                  <div
                    className="about_image_wrap parallax"
                    ref={sceneEl}
                    data-relative-input="true"
                  >
                    <div className="image layer" data-depth="0.1">
                      <img src={bgi} alt="550x640" />
                      <div
                        className="inner"
                        data-img-url={portrait}
                        style={{ backgroundImage: `url(${portrait})` }}
                      ></div>
                    </div>
                    <div className="border layer" data-depth="0.3">
                      <img src={bgi} alt="550x640" />
                      <div className="inner"></div>
                    </div>
                  </div>
                </div>
                <div
                  className={isMobile ? "rightbox about-mobile" : "rightbox"}
                >
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      Hi there...I'm a &nbsp;
                      <TypeAnimation
                        sequence={[
                          "Intern Front-end",
                          2000, // Waits 1s
                          "Fresher Front-end",
                          2000, // Waits 2s
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{
                          fontSize: "1em",
                          display: "inline-block",
                        }}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Hi, my name is <strong>Thanh Dat</strong>. I was
                      originally a refrigeration engineer from University of
                      Science and Technology, but I have a passion for
                      programming so I want to pursue the path that I love.
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Birthday:</label> 24.05.1997
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Gender</label> Male
                        </span>
                      </li>

                      <li>
                        <span>
                          <label>Email:</label>
                          <a href="mailto:kimthanhdat0510@gmail.com">
                            kimthanhdat0510&#64;gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Git hub:</label>
                          <a href="https://github.com/Thanhdat013">
                            github.com/Thanhdat013
                          </a>
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
  )
}

export default About
