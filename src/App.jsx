import Navbar from "./components/Navbar";
import About from "./section/About";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Footer from "./section/Footer";
import Home from "./section/Home";
import Projects from "./section/Projects";
import Skills from "./section/Skills";
import Testimonial from "./section/Testimonial";
import CustomCursor from "./components/CustomCursor";
import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";
export default function App(){
  const [introDone, setIntroDone]=useState(false);
  return(
    <>
    {!introDone && <IntroAnimation onFinish={()=>setIntroDone(true)}/>}
    {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor/>
          {/* <ParticlesBackground/> */}
          <Navbar/>
          <Home/>
          <About />
          <Skills/>
          <Projects/>
          {/* <Experience/>
          <Testimonial/> */}
          <Contact/>
          {/* <Footer/> */}
        </div>
      )}
    </>
  )
}