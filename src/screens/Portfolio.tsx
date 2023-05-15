import { useEffect, useState } from "react";
import { FloatButton } from "antd";
import { isMobile } from "react-device-detect";

import Preloader from "~/components/content/preLoader/Preloader";
import LeftPart from "~/components/content/leftPart/LeftPart";
import RightPart from "~/components/content/rightPart/RightPart";
import MobileMenu from "~/components/mobile/MobileMenu";

const Portfolio = () => {
  const [showLeftPart, setShowLeftPart] = useState<boolean>(false);
  useEffect(() => {
    if (isMobile) setShowLeftPart(true);
  }, [isMobile]);
  return (
    <div className="arlo_tm_wrapper_all">
      <div id="arlo_tm_popup_blog">
        <div className="container">
          <div className="inner_popup scrollable"></div>
        </div>
        <span className="close">
          <a href="#home"></a>
        </span>
      </div>

      {/* <!-- PRELOADER --> */}
      <Preloader />

      {/* <!-- MOBILE MENU --> */}
      <MobileMenu />

      {/* <!-- CONTENT --> */}
      <div className="arlo_tm_content">
        {/* <!-- LEFTPART --> */}
        <LeftPart
          showLeftPart={showLeftPart}
          setShowLeftPart={setShowLeftPart}
        />

        {/* <!-- RIGHTPART --> */}
        <RightPart
          showLeftPart={showLeftPart}
          setShowLeftPart={setShowLeftPart}
        />

        <FloatButton.BackTop tooltip={<div>Scroll to top</div>} />
      </div>
    </div>
  );
};

export default Portfolio;
