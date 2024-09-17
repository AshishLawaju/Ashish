"use client";
import Image from "next/image";
import blackLogo from "../../logo/blackLogo.png";
import whiteLogo from "../../logo/whiteLogo.png";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaArrowRightLong, FaWhatsapp } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { useTheme } from "next-themes";
const Navbar = () => {
  const { resolvedTheme } = useTheme();
  return (
    <nav className="h-[80px] bg-main-white dark:bg-[#0C0202] dark:text-main-white">
      <div className=" flex justify-around items-center h-full">
        {resolvedTheme == "dark" ? (
          <Image alt="ashish lawaju" src={whiteLogo} width={54} height={54} />
        ) : (
          <Image alt="ashish lawaju" src={blackLogo} width={54} height={54} />
        )}
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 hover:text-blue-600 cursor-pointer">
            <FiLinkedin />
            LinkedIn
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#51769b]">
            <FiGithub />
            Github
          </div>
          <div className="flex items-center gap-2 hover:text-green-400 cursor-pointer">
            <FaWhatsapp className="text-[19px]" />
            Whatsapp
          </div>
        </div>

        <div className="font-medium flex gap-2 items-center">
          <CiMenuBurger />
          Menu
        </div>
        <button
          type="button"
          className="bg-primary dark:bg-[#312f2f] text-white flex  items-center gap-3 px-7 py-[10px] rounded-3xl font-medium"
        >
          Get In Touch <FaArrowRightLong />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
