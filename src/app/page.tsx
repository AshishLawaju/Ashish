import React from "react";
import WorkTogether from "./components/worktogether/WorkTogether";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";

const Home = () => {
  return (
    <main className="bg-main-white dark:bg-main-black relative">
  
      <Hero />
      <WorkTogether />
      <Footer />
    </main>
  );
};

export default Home;
