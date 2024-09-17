import React from "react";
import WorkTogether from "./components/worktogether/WorkTogether";
import Footer from "./components/footer/Footer";
import Hero from "./components/Hero/Hero";

const Home = () => {
  return (
    <main className="bg-main-white dark:bg-main-black  select-none">
  
      <Hero />
      <WorkTogether />
      <Footer />
    </main>
  );
};

export default Home;
