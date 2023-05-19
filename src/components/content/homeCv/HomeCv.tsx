import { isMobile } from "react-device-detect"
import { TypeAnimation } from "react-type-animation"
// import avatar from "~/assets/img/hero/avatar.jpg"
import { useTranslation } from "react-i18next"
import avatarAuth from "~/assets/img/hero/auth.jpg"
const HomeCv = () => {
  const handleScrollToAbout = () => {
    const section = document.querySelector("#about")
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  const { t } = useTranslation()
  return (
    <>
      {" "}
      <div
        className={
          isMobile ? "arlo_tm_section device-mobile" : "arlo_tm_section"
        }
        id="home"
      >
        <div className="arlo_tm_hero_header_wrap">
          <div className="arlo_tm_universal_box_wrap">
            <div className="bg_wrap">
              <div
                className="overlay_image hero jarallax"
                data-speed="0.1"
              ></div>
              <div className="overlay_color hero"></div>
            </div>
            <div className="content hero">
              <div className="inner_content">
                <div className="image_wrap">
                  <img src={avatarAuth} alt="hero" />
                </div>
                <div className="name_holder">
                  <h3>
                    {t("home.firstName")} &nbsp;
                    <span>{t("home.lastName")}</span>
                  </h3>
                </div>
                <div className="text_typing">
                  <p>
                    {t("home.intro")} &nbsp;
                    <TypeAnimation
                      sequence={[
                        "Front-end developer",
                        2000, // Waits 1s
                        "Front-end ",
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
                  </p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <a onClick={handleScrollToAbout}>
                <i className="xcon-angle-double-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeCv
