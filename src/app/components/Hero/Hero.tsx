import { FaArrowRight } from "react-icons/fa6";
import bg from "./assets/bg-CD.png";
import "./hero.css";
import { FiCornerRightDown } from "react-icons/fi";
const Hero = () => {
  return (
    <section
      className="w-full h-[100vh] "
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container ">
        <div> &nbsp; </div>
        <h1 className="mt-10 	text-[133px] font-bold pt-12 text-main-black dark:text-main-white">
          <span className="abc">A</span>SHISH <span className="abc">L</span>AWAJ
          <span className="abc">U</span>
        </h1>

        <div className=" flex mt-20">
          <div className=" basis-1/2">

          <div className="flex items-center mt-20 gap-2 text-[17px] animate-bounce  h-5 ">
            <p className="border-b border-black dark:border-main-white pb-1 ">
              Hit Me Up
            </p>

            <FaArrowRight />
          </div>
          </div>
          <div className="basis-1/2">
            <h3 className="text-3xl font-semibold mt-2">
              I&apos;m a Software Developer with a passion for building clean,
              user-friendly interfaces and robust applications.
            </h3>
            <button className=" mt-14 px-7 py-[10px] bg-primary rounded-3xl border-[2px] border-black flex  gap-2 text-main-white">
              EXPLORE MY WORKS{" "}
              <FiCornerRightDown className="text-xl animate-bounce" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
