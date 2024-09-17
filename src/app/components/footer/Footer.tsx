"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import blackLogo from "../../logo/blackLogo.png";
import whiteLogo from "../../logo/whiteLogo.png";
import { CgArrowTopRight } from "react-icons/cg";
import { FaArrowUp } from "react-icons/fa6";
const Footer = () => {
  const { resolvedTheme } = useTheme();
  return (
    <footer className="container bg-[#EBEBEB] dark:bg-[#0C0202] rounded-3xl my-10 p-10 flex flex-col gap-3 items-center ">
      <div>
        {resolvedTheme == "dark" ? (
          <div className="w-[100px] h-[100px]">
            <Image
              alt="ashish lawaju"
              src={whiteLogo}
              className="w-full h-full"
              width={200}
              height={200}
            />
          </div>
        ) : (
          <div className="w-[100px] h-[100px]">
            <Image
              alt="ashish lawaju"
              src={blackLogo}
              className="w-full h-full"
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
      <div className="flex  w-full justify-between text-lg ">
        <div> &copy;2024 Ashish Lawaju</div>
        <div className="flex gap-4">
          <div className="flex items-center">LINKEDIN <CgArrowTopRight   />
          </div>
          <div  className="flex items-center">GITHUB  <CgArrowTopRight   /></div>
          <div  className="flex items-center">WHATSAPP  <CgArrowTopRight   /></div>
        </div>
        <div className="flex items-center gap-2" >Hop to Top <FaArrowUp  className="animate-bounce duration-1000"/>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
