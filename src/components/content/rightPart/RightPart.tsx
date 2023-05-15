import HomeCv from "~/components/content/homeCv/HomeCv";
import About from "./about/About";
import Skill from "./skill/Skill";
import Project from "./project/Project";
import Contact from "./contact/Contact";

interface Iprops {
  showLeftPart: boolean;
  setShowLeftPart: (value: boolean) => void;
}
const RightPart = (props: Iprops) => {
  return (
    <>
      {" "}
      <div
        className={
          props.showLeftPart ? "opened arlo_tm_rightpart" : "arlo_tm_rightpart"
        }
      >
        <div className="rightpart_inner">
          <HomeCv />
          {/* <!-- ABOUT --> */}
          <About />
          {/* <!-- SKILLS --> */}
          <Skill />
          {/* <!-- SERVICES --> */}
          <Project />
          {/* <!-- CONTACT & FOOTER --> */}
          <Contact />
        </div>
      </div>
    </>
  );
};

export default RightPart;
