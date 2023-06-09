import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
const Skill = () => {
  const { t } = useTranslation()

  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false)
  useEffect(() => {
    if (window.innerWidth < 740) setIsMobileDevice(true)
  }, [isMobileDevice])
  return (
    <>
      {" "}
      <div
        style={{ backgroundColor: "#f6f7fd" }}
        className={
          isMobileDevice
            ? "arlo_tm_section device-mobile"
            : "arlo_tm_section skill-pc"
        }
        id="skills"
      >
        <div
          className={
            isMobileDevice
              ? "arlo_tm_skills_wrap skill-mobile"
              : "arlo_tm_skills_wrap"
          }
        >
          <div className="container">
            <div
              className={
                isMobileDevice
                  ? "arlo_tm_title_holder skill-mobile"
                  : "arlo_tm_title_holder"
              }
            >
              <h3>{t("skill.heading")}</h3>
              <span>{t("skill.title")}</span>
            </div>
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>{t("skill.frontendSkill")}</h4>
                </div>
                <div>
                  <li>{t("skill.frontendSkill-1")}</li>
                  <li>{t("skill.frontendSkill-2")}</li>
                  <li>{t("skill.frontendSkill-3")}</li>
                  <li>{t("skill.frontendSkill-4")}</li>
                </div>
              </div>
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>{t("skill.backendSkill")}</h4>
                </div>
                <div>
                  <li>{t("skill.backendSkill-1")}</li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            isMobileDevice
              ? "arlo_tm_skills_wrap skill-mobile"
              : "arlo_tm_skills_wrap"
          }
        >
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>{t("skill.otherSkill")}</h4>
                </div>
                <div>
                  <li>{t("skill.otherSkill-1")}</li>
                  <li>{t("skill.otherSkill-2")}</li>
                  <li>{t("skill.otherSkill-3")}</li>
                  <li>{t("skill.otherSkill-4")}</li>
                </div>
              </div>
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>{t("skill.softSkill")}</h4>
                </div>
                <div>
                  <li>{t("skill.softSkill-1")}</li>
                  <li>{t("skill.softSkill-2")}</li>
                  <li>{t("skill.softSkill-3")}.</li>
                  <li>{t("skill.softSkill-5")}</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill
