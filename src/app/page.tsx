import React from "react";
import WorkTogether from "./components/worktogether/WorkTogether";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Scroller from "./components/scroll/scroll";
const Home = () => {
  return (
    <main className="bg-main-white dark:bg-main-black  select-none relative">
      <Hero />
      <Scroller/>
      <WorkTogether />

      <Navbar />
      <Footer />
    </main>
  );
};

export default Home;
