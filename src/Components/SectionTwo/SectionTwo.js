import "./sectiontwo.css";

import Drop from "./inkdrop.png";

function SectionTwo() {
  return (
    <div className="sectionTwo relative  h-screen w-screen bg-tertiary">
      <div
        className="
            sq1
    absolute
    hidden
    lg: flex
    w - 40 h - 40 bg -
            primary 
            

            "
      ></div>
      <img
        src={Drop}
        alt="drop"
        className="hidden lg:flex h-64 w-64  absolute right-20 bottom-2 "
      />
      <img
        src="
    https: // avatars.githubusercontent.com/u/65999534?v=4
        "
        alt=" "
        className="hidden lg:flex h-44 w-44 absolute right-20 top-20 my-photo"
      />

      <div className=" flex flex-col items-center  h-screen w-screen justify-center">
        <div className=" abt text-6xl  lg:text-8xl text-primary font-extrabold">
          <span className="abt-letter">a</span>
          <span className="abt-letter">b</span>
          <span className="abt-letter">o</span>
          <span className="abt-letter">u</span>
          <span className="abt-letter">t</span>
          <span className="abt-letter"> </span>
          <span className="abt-letter">m</span>
          <span className="abt-letter">e</span>
          <span className="abt-letter">.</span>
        </div>
        <div className="abt-content text-normal flex flex-col justify-center items-center lg:text-3xl text-center lg:p-4 ml-3 mr-3 text-primary font-extrabold">
          <img
            src="
                        https://avatars.githubusercontent.com/u/65999534?v=4
                    "
            alt=""
            className="lg:hidden h-36 w-36 "
          />
          <span className="mt-2">
            Oh! Hi there! My name is Diganta and I'm a senior engineering
            student who's always looking for ways to mix my love of computer
            science and web development with my passion for cricket and chess.
            If you need a website built or a cricket game won, I'm your guy.
            Just don't challenge me to a game of chess unless you're ready to be
            beaten by a master strategist (or at least, that's what I tell
            myself). When I'm not hitting sixes or checkmating opponents, I'm
            always up for a good chat and learning new things, so don't be shy
            and say hi
          </span>
          <div className="flex items-center justify-evenly w-screen">
            <div className="bg-primary text-tertiary p-3 m-4 rounded-md hover:bg-blueGray-900">
              <a href="#tech">Tech I know</a>
            </div>
            <div className="bg-primary text-tertiary p-3 m-4 rounded-md hover:bg-blueGray-900">
              <a href="#home">Let's go back</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
