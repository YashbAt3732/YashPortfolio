import { useEffect, useMemo, useRef, useState } from "react"
import unimartImg from '../assets/unimart_campus.png'
import unimartMobile from '../assets/unimart_mobile.png'
import clinicImg from '../assets/clinic_mgmt.png'
import clinicMobile from '../assets/nivaaran_mobile.png'
// import img4 from '../assets/img4.jpeg'
// import photo4 from '../assets/photo4.jpeg'
import { useMotionValueEvent, useScroll } from "framer-motion"
import { motion, AnimatePresence } from "framer-motion"
//check whether the device is mobile or not
const useIsMobile=(query="(max-width:639px)")=>{
  const [isMobile, setIsMobile]=useState(
    typeof window!=="undefined" && window.matchMedia(query).matches
  )
  useEffect(()=>{
    if(typeof window==="undefined") return;
    const mql=window.matchMedia(query);
    const handler = (e)=> setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    setIsMobile(mql.matches);
    return ()=> mql.removeEventListener("change", handler);
  }, [query])
  return isMobile;
}
const Projects = () => {
  const isMobile=useIsMobile();
  const sceneRef=useRef(null);
  //projects to show in project section
  const projects = useMemo(
    () => [
      {
        title: "TheUniMart",
        link: "",
        bgColor: isMobile ? "#8A4830":"#EA580C",
        image: isMobile ? unimartMobile : unimartImg,
        githubLink: "https://github.com/YashbAt3732/TheUniMart",
      },
      {
        title: "Nivaaran App",
        link: "",
        bgColor: isMobile ? "#153A4B":"#3B82F6",
        image: isMobile ? clinicMobile : clinicImg,
        githubLink: "https://github.com/YashbAt3732/ClinicManagementSystem",
      },
    ],
    [isMobile] // re-run only when `isMobile` changes
  );

  const {scrollYProgress} = useScroll({
    target:sceneRef,
    offset:["start start","end end"]
  })
  const thresholds=projects.map((_, i)=>(i+1)/projects.length);
  const [activeIndex, setActiveIndex]=useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v)=>{
    const idx=thresholds.findIndex((t)=> v<=t);
    setActiveIndex(idx === -1 ? thresholds.length-1 : idx);
  });
  const activeProject=projects[activeIndex];
  return (
    <section id="projects" 
      ref={sceneRef} 
      className='relative text-white'
      style={{
        height: `${90*projects.length}vh`,
        backgroundColor: activeProject.bgColor,
        transition: "background-color 400ms ease"
      }}
    >
      <div className="sticky top-0 flex flex-col h-screen items-center justify-center">
        <h2 className={`text-3xl font-semibold z-10 text-center ${isMobile ? "mt-4" : "mt-8"}`}>My Work</h2>
        <div className={`relative w-full flex-1 flex items-center justify-center ${isMobile ? "-mt-4": ""}`}>
          {projects.map((project, idx)=>(
            <div 
              key={project.title} 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 
              ${activeIndex===idx ? "opacity-100 z-20" : "opacity-0 z-0 sm:z-10"}`
              }
              style={{
                width: isMobile ? "90%" : "95%", maxWidth: "1600px"
              }}
            >
              <AnimatePresence mode="wait">
                {activeIndex===idx && (
                  <motion.h3 key={project.title}
                    initial={{opacity:0, y:-30}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y:30}}
                    transition={{duration:0.5, ease:"easeOut"}}
                    className={`block text-center text-[clamp(2.5rem,8vw,6rem)] text-white/95 sm:absolute sm:-top-24 sm:left-[35%] lg:left-0 sm:mb-0
                      italic font-bold ${isMobile? "-mt-24": ""}
                    `}
                    style={{
                      zIndex:30, textAlign: isMobile? "center":"left"
                    }}
                  >
                    {project.title}
                  </motion.h3>
                )}
              </AnimatePresence>
              <div className={`relative w-full overflow-hidden bg-black/20 shadow-2xl 
                    md:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] 
                    ${isMobile? " mb-6 rounded-lg" : "mb-10 sm:mb-12 rounded-2xl"}
                    h-[65vh] sm:h-[72vh]
                  `}
                  style={{
                    zIndex:10,
                    transition:"box-shadow 250ms ease"
                  }}
              >
                <img src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover md:object-center drop-shadow-xl md:drop-shadow-2xl"  
                  style={{
                    position: "relative",
                    zIndex:10,
                    filter:"drop-shadow(0px 16px 40px rgba(0,0,0,0.65))",
                    transition:"filter 200ms ease"
                  }}
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0"
                  style={{
                    zIndex:11,
                    background:"linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0) 40%)"
                  }}
                >
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`absolute ${isMobile ? "bottom-20" : "bottom-10"} flex gap-4`}>
          {/* Conditionally render View Project only if link is not empty */}
          {activeProject?.link && activeProject.link.trim() !== "" && (
            <a
              href={activeProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
              aria-label={`View ${activeProject.title}`}
            >
              View Project
            </a>
          )}
          {/* Always show GitHub link */}
          {activeProject?.githubLink && (
            <a
              href={activeProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 font-semibold rounded-lg bg-white text-black hover:bg-gray-200 transition-all"
              aria-label={`View ${activeProject.title} on GitHub`}
            >
              GitHub Link
            </a>
          )}
        </div>

      </div>
    </section>
  )
}

export default Projects