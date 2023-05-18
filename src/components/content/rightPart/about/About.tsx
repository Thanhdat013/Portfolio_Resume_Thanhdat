import { TypeAnimation } from "react-type-animation"
import { useRef, useEffect } from "react"
import portrait from "~/assets/img/about/1.jpg"
import bgi from "~/assets/img/about/550x640.jpg"
import avatarAuth from "~/assets/img/hero/auth.jpg"

import myCv from "~/assets/cv/v1.0-Detail-Debugging.pdf"
import Parallax from "parallax-js"
import { isMobile } from "react-device-detect"
import { useTranslation } from "react-i18next"
const About = () => {
  const sceneEl = useRef(null)

  // useEffect(() => {
  //   if (sceneEl && sceneEl.current) {
  //     const parallaxInstance = new Parallax(sceneEl.current, {
  //       relativeInput: true,
  //       hoverOnly: true,
  //     })
  //     parallaxInstance.enable()
  //     return () => parallaxInstance.disable()
  //   }
  // }, [])

  const { t } = useTranslation()
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
            <div
              className="arlo_tm_title_holder"
              style={{ paddingBottom: "24px" }}
            >
              <h3>{t("about.heading")}</h3>
              <span>{t("about.title")}</span>
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
                      {t("about.desc")} &nbsp;
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
                      {t("about.intro1")}{" "}
                      <strong> {t("about.subIntro1")}</strong>
                      {t("about.intro1-1")}
                    </p>
                    <br />
                    <p>{t("about.intro2")}</p>
                    <br />
                    <p>{t("about.intro3")}</p>
                    <br />
                    <p>{t("about.intro4")}</p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>{t("about.birthday")}</label>
                          <span>{t("about.myBirthday")}</span>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>{t("about.myBirthday")} </label>
                          <span>{t("about.myBirthday")}</span>
                        </span>
                      </li>

                      <li>
                        <span>
                          <label>{t("about.email")} </label>
                          <a href="mailto:kimthanhdat0510@gmail.com">
                            {t("about.myEmail")}
                          </a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>{t("about.github")}</label>
                          <a href="https://github.com/Thanhdat013">
                            {t("about.myGithub")}
                          </a>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="buttons_wrap">
                    <ul>
                      <li>
                        <a href={myCv} download>
                          <span> {t("about.download")}</span>
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
