"use client";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  // Set mounted to true after the component has mounted on the client
  useEffect(() => setMounted(true), []);

  // Avoid rendering anything theme-related until the component is mounted
  if (!mounted) {
    return null; // You can return a loading indicator or an empty fragment here
  }

  return (
    <>
      <div
        className={`fixed z-40   right-0 top-[25%] ${
          resolvedTheme === "light" ? "bg-[#0C0202]" : "bg-white"
        } transition-all ease-in-out duration-500 p-3 pl-4 pr-2 rounded-l-full cursor-pointer inline-block`}
      >
        {resolvedTheme === "light" ? (
          <FiMoon
            className="text-white text-2xl"
            onClick={() => setTheme("dark")}
          />
        ) : (
          <FiSun
            className="text-[#0C0202] text-2xl"
            onClick={() => setTheme("light")}
          />
        )}
      </div>
    </>
  );
};

export default ThemeChanger;
