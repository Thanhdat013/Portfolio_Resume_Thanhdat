import desktopLogo from "~/assets/img/logo/desktop-logo.png"
import { useState, useEffect } from "react"
import { isMobile } from "react-device-detect"
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs"
interface Props {
  showLeftPart: boolean
  setShowLeftPart: (value: boolean) => void
}
const LeftPart = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string>("home")

  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const tab = hash.replace("#", "")
      setActiveTab(tab)
      const section = document.querySelector(`${tab}`)
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
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
      }, 1000)
    }
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
            <a href="#">
              <img src={desktopLogo} alt="desktop-logo" />
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
                  Home
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
                  About
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
                  Skill
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
                  Project
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
                  Contact
                </a>
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
