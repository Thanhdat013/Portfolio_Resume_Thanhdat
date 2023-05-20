import { useEffect, useState } from "react"
import { isMobile } from "react-device-detect"
import { useTranslation } from "react-i18next"
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs"
import desktopLogo from "~/assets/img/logo/mobile_logo.png"

interface Props {
  showLeftPart: boolean
  setShowLeftPart: (value: boolean) => void
}
const LeftPart = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string>("home")

  useEffect(() => {
    const { hash } = window.location
    console.log(hash)

    if (hash) {
      const tab = hash.replace("#", "")
      setActiveTab(tab)
      // const section = document.querySelector(`${hash}`)
      // if (section) {
      //   section.scrollIntoView({ behavior: "smooth", block: "start" })
      // }
    }
  }, [])

  const handleScrollTab = (
    tab: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault()
    setActiveTab(tab)
    const section = document.querySelector(`#${tab}`)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" })
      setTimeout(() => {
        window.location.hash = tab
      }, 400)
    }
  }

  // multiple languages
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
  return (
    <>
      <div
        className={
          props.showLeftPart
            ? "opened arlo_tm_leftpart_wrap"
            : " arlo_tm_leftpart_wrap"
        }
      >
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                handleScrollTab("home", e)
              }
              href="#home"
            >
              <img
                src={desktopLogo}
                alt="desktop-logo"
                style={{ width: "120px" }}
              />
            </a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li>
                <a
                  className={activeTab === "home" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleScrollTab("home", e)}
                  href="#home"
                >
                  {t("leftPart.leftPartMenu1")}
                </a>
              </li>
              <li>
                <a
                  className={activeTab === "about" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleScrollTab("about", e)}
                  href="#about"
                >
                  {t("leftPart.leftPartMenu2")}
                </a>
              </li>
              <li>
                <a
                  className={activeTab === "skills" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleScrollTab("skills", e)}
                  href="#skills"
                >
                  {t("leftPart.leftPartMenu3")}
                </a>
              </li>
              <li>
                <a
                  className={activeTab === "project" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleScrollTab("project", e)}
                  href="#project"
                >
                  {t("leftPart.leftPartMenu4")}
                </a>
              </li>
              <li>
                <a
                  className={activeTab === "contact" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => handleScrollTab("contact", e)}
                  href="#contact"
                >
                  {t("leftPart.leftPartMenu5")}
                </a>
              </li>
              <li>
                <strong
                  onClick={() => changeLanguage("vi")}
                  className={
                    i18n.language === "vi"
                      ? "languages-active languages-vi"
                      : "languages-vi"
                  }
                >
                  Vi
                </strong>
                <strong
                  className={i18n.language === "en" ? "languages-active" : ""}
                  onClick={() => changeLanguage("en")}
                >
                  En
                </strong>
              </li>
            </ul>
          </div>
          <div className="leftpart_bottom">
            <div className="social_wrap">
              <ul>
                <li>
                  <a href="#">
                    <BsFacebook
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Thanhdat013"
                    target="_blank"
                    rel="noopener"
                  >
                    <BsGithub
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/%C4%91%E1%BA%A1t-kim-0b3b981aa/"
                    target="_blank"
                    rel="noopener"
                  >
                    <BsLinkedin
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {!isMobile && (
            <a
              className={
                !props.showLeftPart
                  ? "arlo_tm_resize "
                  : "arlo_tm_resize opened"
              }
              href="#"
              onClick={(e) => {
                e.preventDefault()
                props.setShowLeftPart(!props.showLeftPart)
              }}
            >
              <i
                className={
                  !props.showLeftPart
                    ? "xcon-angle-left opened"
                    : "xcon-angle-left"
                }
              ></i>
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default LeftPart
