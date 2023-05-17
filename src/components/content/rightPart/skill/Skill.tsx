import ProgressBar from "@ramonak/react-progress-bar"
import { isMobile } from "react-device-detect"
const Skill = () => {
  return (
    <>
      {" "}
      <div
        style={{ backgroundColor: "#f6f7fd", height: "100vh" }}
        className={
          isMobile ? "arlo_tm_section device-mobile" : "arlo_tm_section"
        }
        id="skills"
      >
        <div
          className={
            isMobile
              ? "arlo_tm_skills_wrap skill-mobile"
              : "arlo_tm_skills_wrap"
          }
        >
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>My Skill</h3>
              <span>Main information about me</span>
            </div>
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Front-end skills</h4>
                </div>
                <div>
                  <li>
                    Ability responsive web design and development follow
                    template.
                  </li>
                  <li>Proficiency in HTML, CSS(SCSS)</li>
                  <li>Programming language: Javascript, Typescript</li>
                  <li>
                    Framework/Library: React.js, Next.js,Bootstrap, Tailwind,
                    Antd
                  </li>
                </div>
              </div>
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Back-end skills</h4>
                </div>
                <div>
                  <li>
                    {" "}
                    Thorough under standing of Docker, mySql, RESTful APIs
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            isMobile
              ? "arlo_tm_skills_wrap skill-mobile"
              : "arlo_tm_skills_wrap"
          }
        >
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Other skills</h4>
                </div>
                <div>
                  <li>Proficient use of source code management tools: GIT</li>
                  <li>Ability to learn and apply new technology</li>
                  <li>Assessed UX and UI designs for technical feasibility.</li>
                </div>
              </div>
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Soft Skills</h4>
                </div>
                <div>
                  <li>Communication Skills</li>
                  <li>Teamwork & Collaboration Abilities</li>
                  <li>Computer Skills: word, excel, power point...</li>
                  <li>Ability to work independently and as part of a team.</li>
                  <li>
                    {" "}
                    Strong time management skills and ability to prioritize
                    tasks.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 
        <div
          className={
            isMobile
              ? "arlo_tm_skills_wrap skill-mobile"
              : "arlo_tm_skills_wrap"
          }
        >
          <div className="container">
            <div className="inner_wrap">
              <div className="leftbox">
                <div className="arlo_tm_mini_title_holder">
                  <h4>Other skills</h4>
                </div>
                <div>
                  <li>Kỹ năng về sử dụng Git</li>
                  <li>Framework/Library: Node.js</li>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Skill
