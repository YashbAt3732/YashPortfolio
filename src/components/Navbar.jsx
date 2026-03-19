import { useEffect, useRef, useState } from "react"
import OverlayMenu from "./OverlayMenu"
import Logo from "../assets/Logo.png"
import { FiMenu } from "react-icons/fi";
import { time } from "framer-motion";
export default function Navbar(){
  const [menuOpen, setMenuOpen]= useState(false);
  const [visible, setVisible]=useState(true);
  const [forceVisible, setForceVisible]=useState(false);
  const lastScrollY=useRef(0);
  const timerId=useRef(null);
  // both below useeffect is used for the functionality of hiding the navbar when on home screen and other
  useEffect(()=>{
    const homeSection=document.querySelector("#home");
    const observer= new IntersectionObserver( //browser API
      ([entry])=>{
        if(entry.isIntersecting){
          setForceVisible(true);
          setVisible(true);
        }
        else{
          setForceVisible(false);
        }
      },{threshold: 0.1} //triggers when the homepage is 10% visible
    )
    if(homeSection) observer.observe(homeSection);
    return ()=>{
      if(homeSection) observer.unobserve(homeSection);
    }
    
  },[])
  useEffect(()=>{
    const handleScroll=()=>{
      if(forceVisible){
        setVisible(true);
        return;
      }
      const currentScrollY=window.scrollY;
      if(currentScrollY>lastScrollY.current){
        setVisible(false);
      }
      else{
        setVisible(true);
      }
      if(timerId.current) clearTimeout(timerId.current);
      timerId.current=setTimeout(() => {
        setVisible(false);
      }, 3000 );
      lastScrollY.current=currentScrollY;
    }
    window.addEventListener("scroll", handleScroll, {passive:true})
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
      if(timerId.current) clearTimeout(timerId.current);
    }
  },[forceVisible])
  return(
    <>
      <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-2 z-50 transition-transform duration-300 ${visible? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex items-center space-x-2">
          {/* <img src={Logo} alt="logo" className="h-12 w-10"/> */}
          
        </div>
        <div className="hidden lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex lg:items-center">
          <a
            href="#home"
            className="relative top-0.5 px-3 py-1 rounded-xl font-semibold uppercase text-white/90
            backdrop-blur-md bg-gradient-to-r from-white/10 via-white/5 to-white/10
            border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.6)]
            transition-all duration-500 ease-out
            hover:from-white/20 hover:via-white/10 hover:to-white/20
            hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
            Home
          </a>
          <a
            href="#about"
            className="relative top-0.5 px-3 py-1 ml-3 rounded-xl font-semibold uppercase text-white/90
            backdrop-blur-md bg-gradient-to-r from-white/10 via-white/5 to-white/10
            border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.6)]
            transition-all duration-500 ease-out
            hover:from-white/20 hover:via-white/10 hover:to-white/20
            hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
            About
          </a>
          <a
            href="#skills"
            className="relative top-0.5 px-3 py-1 ml-3 rounded-xl font-semibold uppercase text-white/90
            backdrop-blur-md bg-gradient-to-r from-white/10 via-white/5 to-white/10
            border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.6)]
            transition-all duration-500 ease-out
            hover:from-white/20 hover:via-white/10 hover:to-white/20
            hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
            Skills
          </a>
          <a
            href="#projects"
            className="relative top-0.5 px-3 py-1 ml-3 rounded-xl font-semibold uppercase text-white/90
            backdrop-blur-md bg-gradient-to-r from-white/10 via-white/5 to-white/10
            border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.6)]
            transition-all duration-500 ease-out
            hover:from-white/20 hover:via-white/10 hover:to-white/20
            hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
            Projects
          </a>
          <a
            href="#contact"
            className="relative top-0.5 px-3 py-1 ml-3 rounded-xl font-semibold uppercase text-white/90
            backdrop-blur-md bg-gradient-to-r from-white/10 via-white/5 to-white/10
            border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.6)]
            transition-all duration-500 ease-out
            hover:from-white/20 hover:via-white/10 hover:to-white/20
            hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
            Contact Me
          </a>
        </div>
        <div className="block ml-auto lg:ml-0">
          <button 
            onClick={()=> setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
          >
            <FiMenu/>
          </button>
        </div>
      </nav>
    <OverlayMenu isOpen={menuOpen} onClose={()=>setMenuOpen(false)}/>
    </>
  )
}