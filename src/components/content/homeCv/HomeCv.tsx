import React from "react";
import { TypeAnimation } from "react-type-animation";
import avatar from "~/assets/img/hero/avatar.jpg";
const HomeCv = () => {
  return (
    <>
      {" "}
      <div className="arlo_tm_section" id="home">
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
                  <img src={avatar} alt="hero" />
                </div>
                <div className="name_holder">
                  <h3>
                    Thanh <span>Dat</span>
                  </h3>
                </div>
                <div className="text_typing">
                  <p>
                    I'm a &nbsp;
                    <TypeAnimation
                      sequence={[
                        "Freelance",
                        2000, // Waits 1s
                        "Ui/UX ",
                        2000, // Waits 2s
                        "Engiiner",
                        2000,
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      style={{
                        fontSize: "1.4em",
                        display: "inline-block",
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="arlo_tm_arrow_wrap bounce anchor">
              <a href="#about">
                <i className="xcon-angle-double-down"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCv;
