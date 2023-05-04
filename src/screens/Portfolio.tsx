import React from "react";
import Preloader from "../components/content/preLoader/Preloader";
import LeftPart from "../components/content/leftPart/LeftPart";
import RightPart from "../components/content/rightPart/RightPart";
import MobileMenu from "../components/mobile/MobileMenu";

const Portfolio = () => {
  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#"></a>
        </span>
      </div>

      {/* <!-- PRELOADER --> */}
      <Preloader />
      {/* <!-- /PRELOADER --> */}

      {/* <!-- MOBILE MENU --> */}
      <MobileMenu />
      {/* <!-- /MOBILE MENU --> */}

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <LeftPart />
        {/* <!-- /LEFTPART --> */}

        {/* <!-- RIGHTPART --> */}
        <RightPart />
        {/* <!-- /RIGHTPART --> */}

        <a className="arlo_tm_totop" href="#"></a>
      </div>
    </div>
  );
};

export default Portfolio;
