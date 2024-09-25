"use client";
import Image from "next/image";
import blackLogo from "../../logo/blackLogo.png";
import whiteLogo from "../../logo/whiteLogo.png";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaArrowRightLong, FaWhatsapp } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { useTheme } from "next-themes";
import GetInTouch from "@/app/form/Get In TOuch/GetInTouch";
import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Lenis from "lenis";

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [showGetInTouch, setShowGetInTouch] = useState(false);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isBgTransparent, setBgTransparent] = useState(true);

  /*  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => {
      console.log(latest);
    });
    return () => unsub();
  }, [scrollY]); */

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log(latest)
    const previous = scrollY.getPrevious();

    if (previous && latest > previous && latest > 80) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest < 100) {
      setBgTransparent(true);
    } else {
      setBgTransparent(false);
    }
  });

  useEffect(() => {
    const lenis = new Lenis();

   /*  lenis.on("scroll", (e) => {
      console.log(e);
    }); */

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`h-[80px]  fixed w-full top-0 z-50  dark:border-main-black ${
        isBgTransparent ? "bg-transparent" : "bg-main-white border-b dark:bg-[#0C0202]"
      }  dark:text-main-white`}
    >
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
          onClick={() => setShowGetInTouch((pre) => !pre)}
          className="bg-primary dark:bg-[#312f2f] text-white flex  items-center gap-3 px-7 py-[10px] rounded-3xl font-medium"
        >
          Get In Touch <FaArrowRightLong />
        </button>
      </div>
      {showGetInTouch && <GetInTouch setShowGetInTouch={setShowGetInTouch} />}
    </motion.nav>
  );
};

export default Navbar;
