import { TypeAnimation } from "react-type-animation";
import { useRef, useEffect } from "react";
import portrait from "~/assets/img/about/1.jpg";
import bgi from "~/assets/img/about/550x640.jpg";
import myCv from "~/assets/cv/v1.0-Detail-Debugging.pdf";
import Parallax from "parallax-js";
const About = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    if (sceneEl && sceneEl.current) {
      const parallaxInstance = new Parallax(sceneEl.current, {
        relativeInput: true,
        hoverOnly: true,
      });
      parallaxInstance.enable();
      return () => parallaxInstance.disable();
    }
  }, []);

  <div ref={sceneEl}>{/* html */}</div>;

  return (
    <>
      <div className="arlo_tm_section relative" id="about">
        <div className="arlo_tm_about_wrapper_all">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>About Me</h3>
              <span>Các thông tin chính về tôi</span>
            </div>
            <div className="arlo_tm_about_wrap">
              <div className="author_wrap">
                <div className="leftbox">
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
                <div className="rightbox">
                  <div className="arlo_tm_mini_title_holder">
                    <h4>
                      Mình là Thành Đạt &nbsp;
                      <TypeAnimation
                        sequence={[
                          "Lập trình viên Front-end",
                          2000, // Waits 1s
                          "Front-end",
                          2000, // Waits 2s
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{
                          fontSize: "1.2em",
                          display: "inline-block",
                        }}
                      />
                    </h4>
                  </div>
                  <div className="definition">
                    <p>
                      Xin chào mọi người, mình tên là <strong>Thành Đạt</strong>
                      . Mình là một lập trình viên Front-end. Hiện tại mình chưa
                      có nhiều kinh nghiệm nên rất mong muốn được tham gia và
                      làm việc để tăng thêm kiến thức
                    </p>
                  </div>
                  <div className="about_short_contact_wrap">
                    <ul>
                      <li>
                        <span>
                          <label>Sinh nhật:</label> 24.05.1997
                        </span>
                      </li>
                      <li>
                        <span>
                          <label>Giới tính</label> Nam
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
  );
};

export default About;
