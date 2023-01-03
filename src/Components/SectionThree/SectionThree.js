import "./sectionthree.css";

import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJquery,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiWebpack,
} from "react-icons/si";

function SectionThree() {
  return (
    <div className="section-three relative  w-screen h-screen bg-primary">
      <div className="a flex flex-col items-center justify-center w-screen h-screen">
        <div className="tech-header text-6xl mt-9 mb-6  lg:text-8xl  font-extrabold">
          {/* tech i know */}
          <span className="tech-head-each">t</span>
          <span className="tech-head-each">e</span>
          <span className="tech-head-each">c</span>
          <span className="tech-head-each">h</span>
          <span className="tech-head-each"> </span>
          <span className="tech-head-each">i</span>
          <span className="tech-head-each"> </span>
          <span className="tech-head-each">k</span>
          <span className="tech-head-each">n</span>
          <span className="tech-head-each">o</span>
          <span className="tech-head-each">w</span>
          <span className="tech-head-each">.</span>
        </div>
        <div className="tech-stack font-bold text-8xl mt-2 w-[85vw] justify-center items-center grid grid-cols-12 gap-2">
          <div className="tech-stack-each tech-html flex justify-center p-4 col-span-2">
            <AiFillHtml5 className="" />
          </div>
          <div className="tech-stack-each tech-css flex justify-center p-4 col-span-2">
            <FaCss3Alt className="" />
          </div>
          <div className="tech-stack-each  tech-js flex justify-center p-4 col-span-2">
            <IoLogoJavascript className="" />
          </div>
          <div className="tech-stack-each tech-react flex justify-center p-4 col-span-2">
            <FaReact className="" />
          </div>
          {/* complete for all imported icons */}
          <div className="tech-stack-each tech-bootstrap flex justify-center p-4 col-span-2">
            <FaBootstrap className="" />
          </div>
          <div className="tech-stack-each tech-tailwind flex justify-center p-4 col-span-2">
            <SiTailwindcss className="" />
          </div>
          <div className="tech-stack-each tech-jquery flex justify-center p-4 col-span-2">
            <SiJquery className="" />
          </div>
          <div className="tech-stack-each tech-docker flex justify-center p-4 col-span-2">
            <SiDocker className="" />
          </div>

          <div className="tech-stack-each  tech-postman flex justify-center p-4 col-span-2">
            <SiPostman className="" />
          </div>

          <div className="tech-stack-each tech-firebase flex justify-center p-4 col-span-2">
            <SiFirebase className="" />
          </div>

          <div className="tech-stack-each tech-webpack flex justify-center p-4 col-span-2">
            <SiWebpack className="" />
          </div>

          <div className="tech-stack-each tech-redux flex justify-center p-4 col-span-2">
            <SiRedux className="" />
          </div>

          <div className="tech-stack-each flex tech-node justify-center p-4 col-span-2">
            <IoLogoNodejs className="" />
          </div>

          <div className="tech-stack-each tech-mongo flex justify-center p-4 col-span-2">
            <SiMongodb className="" />
          </div>

          <div className="tech-stack-each flex tech-express justify-center p-4 col-span-2">
            <SiExpress className="" />
          </div>

          <div className="tech-stack-each flex tech-mysql justify-center p-4 col-span-2">
            <GrMysql className="" />
          </div>

          <div className="tech-stack-each flex tech-cpp justify-center p-4 col-span-2">
            <SiCplusplus className="" />
          </div>

          <div className="tech-stack-each tech-git flex justify-center p-4 col-span-2">
            <FaGitAlt className="" />
          </div>

          <div className="html text-6xl absolute top-2 left-4 font-bolder">
            HTML
          </div>
          <div className="css text-6xl absolute bottom-3 right-3 font-bolder">
            CSS
          </div>
          <div className="js text-6xl absolute left-6 top-20 font-bolder">
            JS
          </div>
          <div className="react text-6xl absolute right-10 bottom-20 font-bolder">
            REACT
          </div>
          <div className="node text-6xl absolute top-20 right-5 font-bolder">
            NODE
          </div>
          <div className="mongo text-6xl absolute left-16 right-16 bottom-12 font-bolder">
            MONGO
          </div>
          <div className="express text-6xl absolute font-bolder top-4 left-3 right-6">
            EXPRESS
          </div>
          <div className="bootstrap text-6xl absolute font-bolder top-1/2">
            BOOTSTRAP
          </div>
          <div className="tailwind text-6xl absolute font-bolder left-2/3 right-3/4">
            TAILWIND
          </div>
          <div className="jquery text-6xl absolute font-bolder top-1/3 right-3/4">
            JQUERY
          </div>
          <div className="docker text-6xl absolute font-bolder bottom-2/3 right-6">
            DOCKER
          </div>
          <div className="postman text-6xl absolute font-bolder top-1/4 left-2/3">
            POSTMAN
          </div>
          <div className="firebase text-6xl absolute font-bolder top-1/4 left-2/3">
            FIREBASE
          </div>
          <div className="webpack text-6xl absolute font-bolder top-1/4 left-2/3">
            WEBPACK
          </div>
          <div className="redux text-6xl absolute font-bolder top-1/4 left-2/3">
            REDUX
          </div>
          <div className="cpp text-6xl absolute font-bolder top-1/4 left-2/3">
            C++
          </div>
          <div className="mysql text-6xl absolute font-bolder top-2/4 left-2/3">
            MYSQL
          </div>
          <div className="git text-6xl absolute font-bolder top-1/4 left-2/3">
            GIT
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
