import { FloatButton } from "antd"
import { useEffect, useState } from "react"

import LeftPart from "~/components/content/leftPart/LeftPart"
import RightPart from "~/components/content/rightPart/RightPart"
import MobileMenu from "~/components/mobile/MobileMenu"

const Portfolio = () => {
  const [showLeftPart, setShowLeftPart] = useState<boolean>(false)
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false)
  useEffect(() => {
    if (window.innerWidth < 740) {
      setIsMobileDevice(true), setShowLeftPart(true)
    }
    // if (isMobile) setShowLeftPart(true)
  }, [isMobileDevice])
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

      {/* <!-- MOBILE MENU --> */}
      {isMobileDevice && <MobileMenu />}

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
  )
}

export default Portfolio
