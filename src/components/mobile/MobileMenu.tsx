import { useEffect, useState } from "react"
import logoMobile from "~/assets/img/logo/mobile_logo.png"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { useTranslation } from "react-i18next"
const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState<string>("home")

  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const tab = hash.replace("#", "")
      setActiveTab(tab)

      const section = document.querySelector(hash)
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
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

  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false)
  // multiple languages
  const { t, i18n } = useTranslation()

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }
  return (
    <>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div>
            <a
              onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                handleScrollTab("home", e), setOpenMenuMobile(false)
              }}
              href="#home"
            >
              <img src={logoMobile} alt="mobile_logo" className="logo" />
            </a>
          </div>
          <div className="hamburger-box">
            {!openMenuMobile ? (
              <RxHamburgerMenu
                className="hamburger-inner"
                onClick={() => {
                  setOpenMenuMobile(true)
                }}
              />
            ) : (
              <RxCross1
                className="hamburger-inner"
                onClick={() => {
                  setOpenMenuMobile(false)
                }}
              />
            )}
          </div>
        </div>
        <div
          className={
            openMenuMobile
              ? "arlo_tm_mobile_menu_wrap is-active"
              : "arlo_tm_mobile_menu_wrap"
          }
        >
          <div className="mob_menu">
            <ul className="anchor_nav">
              <li>
                <a
                  className={activeTab === "home" ? "active" : ""}
                  onClick={(
                    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                  ) => {
                    handleScrollTab("home", e), setOpenMenuMobile(false)
                  }}
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
                  ) => {
                    handleScrollTab("about", e), setOpenMenuMobile(false)
                  }}
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
                  ) => {
                    handleScrollTab("skills", e), setOpenMenuMobile(false)
                  }}
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
                  ) => {
                    handleScrollTab("project", e), setOpenMenuMobile(false)
                  }}
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
                  ) => {
                    handleScrollTab("contact", e), setOpenMenuMobile(false)
                  }}
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
        </div>
      </div>
    </>
  )
}

export default MobileMenu
