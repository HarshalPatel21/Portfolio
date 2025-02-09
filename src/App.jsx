import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Skills from "./Components/Skills";
import WorkExp from "./Components/WorkExp";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen   max-w-2xl mx-auto py-12 sm:py-24 px-6 flex flex-col gap-8">
        <Header />
        <About />
        <WorkExp />
        <Education />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default App;
