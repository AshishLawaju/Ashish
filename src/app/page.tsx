import React from "react";
import WorkTogether from "./components/worktogether/WorkTogether";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import {motion,useScroll,useMotionValueEvent} from "framer-motion"
const Home = () => {
  return (
    <main className="bg-main-white dark:bg-main-black  select-none">
      <Navbar />
      <Hero />
      <WorkTogether />
      <Footer />
    </main>
  );
};

export default Home;
