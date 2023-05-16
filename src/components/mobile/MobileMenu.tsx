import { useState } from "react"
import logoMobile from "~/assets/img/logo/mobile_logo.png"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
const MobileMenu = () => {
  const [activeTab, setActiveTab] = useState<string>("home")
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
      }, 1000)
    }
  }
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false)

  return (
    <>
      <div className="arlo_tm_mobile_header_wrap">
        <div className="main_wrap">
          <div>
            <a href="#home">
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
                  Home
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
                  About
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
                  Skill
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
                  Project
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
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
