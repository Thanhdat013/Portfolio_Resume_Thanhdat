import { isMobile } from "react-device-detect"
import { useTranslation } from "react-i18next"

const Contact = () => {
  const { t } = useTranslation()
  return (
    <>
      {" "}
      <div
        style={{ backgroundColor: " #f6f7fd", paddingTop: "70px" }}
        className={
          isMobile ? "arlo_tm_section device-mobile" : "arlo_tm_section"
        }
        id="contact"
      >
        <div className="container">
          <div className="arlo_tm_title_holder contact">
            <h3>{t("contact.heading")}</h3>
          </div>
        </div>
        <div className="arlo_tm_footer_contact_wrapper_all">
          <div className="arlo_tm_contact_wrap_all">
            <div className="container">
              <div
                style={{ margin: "24px 0", padding: "0" }}
                className="leftbox"
              >
                <div
                  className={
                    isMobile
                      ? "short_info_wrap contact-mobile"
                      : "short_info_wrap"
                  }
                >
                  <ul>
                    <li>
                      <p>
                        <label>{t("contact.linkedin")}</label>
                        <span>
                          <a
                            href="https://www.linkedin.com/in/%C4%91%E1%BA%A1t-kim-0b3b981aa/"
                            target="_blank"
                            rel="noopener"
                          >
                            {t("contact.myLinkedin")}
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>{t("contact.email")}</label>
                        <span>
                          <a
                            href="mailto: kimthanhdat0510@gmail.com@gmail.com"
                            target="_blank"
                            rel="noopener"
                          >
                            {t("contact.myEmail")}
                          </a>
                        </span>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>{t("contact.phone")}</label>
                        <a href="tel:+84338575296">{t("contact.myPhone")}</a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <label>{t("contact.github")}</label>
                        <span>
                          <a
                            href="https://github.com/Thanhdat013"
                            target="_blank"
                            rel="noopener"
                          >
                            {t("contact.myGithub")}
                          </a>
                        </span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="arlo_tm_footer_wrap">
            <div className="container">
              <p>{t("contact.footer")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
