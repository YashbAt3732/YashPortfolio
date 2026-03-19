import { useEffect, useMemo, useState } from "react"
import ParticlesBackground from "../components/ParticlesBackground"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaX, FaXTwitter } from "react-icons/fa6"
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import Lottie from "lottie-react";
import contactAnim from "../assets/customersupport.json"; 
const Home = () => {
  //below code is for the animating the role 
  const roles=useMemo(()=>["App Developer", "Competitive Programmer"],[])
  const[index, setIndex]=useState(0);
  const[subIndex, setSubIndex]=useState(0);
  const[deleting, setDeleting]=useState(false);
  useEffect(()=>{
    const current=roles[index]
    const timeout=setTimeout(() => {
      if(!deleting && subIndex<current.length) setSubIndex(v=>v+1);
      else if(!deleting && subIndex===current.length) setTimeout(() => {setDeleting(true)}, 1200);
      else if(deleting && subIndex>0) setSubIndex(v=>v-1);
      else if(deleting && subIndex===0){setDeleting(false); setIndex(p=>(p+1)%roles.length);}
    },deleting? 40 : 60);
    //cleanup function
    return () => clearTimeout(timeout); 
  },[subIndex, index, deleting, roles])
  //creating the social medias icons
  const social=[
    {Icon: FaLinkedin, label:"LinkedIn", href:"https://www.linkedin.com/in/yash-rawat345/"},
    {Icon: FaGithub, label:"GitHub", href:"https://github.com/YashbAt3732"},
    {Icon: SiLeetcode, label:"Leetcode", href:"https://leetcode.com/u/bOFWMqXAiH/"},
    {Icon: SiCodeforces, label:"Codeforces", href:"https://codeforces.com/profile/Johnlibert"},
  ]
  const glowVariant={
    initial:{scale:1, y:0, filter:"drop-shadow(0 0 0 rgba(0,0,0,0))"},
    hover:{scale:1.2, y:-3, filter:"drop-shadow(0 0 8px rgba(13,88,204,0.9)) drop-shadow(0 0 18px rgba(16,185,129,0.8))", 
      transition:{type:"spring", stiffness:300, damping:15}
    },
    tap:{scale:0.95, y:0, transition:{duration:0.08}},
  }
  return (
    <section 
    id='home'  
    className='w-full relative h-screen bg-black overflow-hidden'
    >
      <ParticlesBackground/>
      
      <div className="absolute inset-0">
        {/* first element in top-left glowing */}
        <div className="absolute -top-32 -left-32 
          w-[70vw ]sm: w-[500vw] md:w-[40vw]
          h-[70vw ]sm: h-[500vw] md:h-[40vw]
          max-w-[500px] max-h-[500px] rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 md:opacity-10 sm:opacity-20  
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse
          "
        >

        </div>
        {/* second element in top-left glowing */}
        <div className="absolute -bottom-32 -right-32 
          w-[70vw ]sm: w-[500vw] md:w-[40vw]
          h-[70vw ]sm: h-[500vw] md:h-[40vw]
          max-w-[500px] max-h-[500px] rounded-full
          bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
          opacity-30 md:opacity-10 sm:opacity-20  
          blur-[100px] sm:blur-[130px] md:blur-[150px]
          animate-pulse"
          style={{animationDelay: "0.5s"}}
          >
        </div>
      </div>
      {/* contents i.e details and the image */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative">
          {/* changed to pr-auto from pr-24 */}
          <div className="w-full lg: pr-auto mx-auto max-w-3xl">
            <motion.div className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{opacity:0, y:12}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.6}}
            >
              <span>
                {roles[index].substring(0, subIndex)}
              </span>
              {/* span for the last line of the role animating */}
              <span className="inline-block w-0.5 ml-1 bg-white animate-pulse align-middle" style={{height:"1em"}}></span>
            </motion.div>
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{opacity:0 , y:40}}
              animate={{opacity:1, y:0}}
              transition={{duration:1}}  
            >
              Hello, I'm<br/>
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Yash Rawat
              </span>
            </motion.h1>
            <motion.p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
              initial={{opacity:0 , y:20}}
              animate={{opacity:1, y:0}}
              transition={{duration:0.8, delay:0.4}} 
            >
             I turn complex challenges into seamless, high-performance app experiences—where sharp competitive logic meets creative craftsmanship, building solutions that are both powerful and beautifully intuitive.
            </motion.p>
            <motion.div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration:0.8, delay:0.8}} 
            >
              <a href="#projects" 
                className="px-6 py-3 rounded-full font-medium text-lg text-black
                bg-white hover:scale-105 transition-all
                "
              >View My Work</a>
              <a href="https://drive.google.com/file/d/1HukDRICp6qq4-pJrF4GxXotevZrmVr8c/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full text-lg font-medium text-black
                bg-white hover:bg-gray-200 shadow-lg hover:scale-105 transition-all
                "
              >My Resume</a>
            </motion.div>
            <div className="mt-10 flex  gap-5 text-2xl md:text-3xl justify-center lg:justify-start">
             {social.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={glowVariant}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="text-gray-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute top-0.5 -translate-y-0.5 pointer-events-none"
          style={{right:"10px", width:"min(22vw, 410px)", height:"min(40vw, 760px)", borderRadius:"50%", 
            filter:"blur(38px)", opacity:0.32, background:"circle-gradient(from 0deg, #1cd8d2, #00bf8f, #302b63,#1cd8d2)"
          }}
          >

          </div>
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex justify-end pointer-events-none select-none"
            style={{
              width: "min(55vw, 620px)",
              maxHeight: "80vh",
            }}
          >
            <Lottie
              animationData={contactAnim}
              loop={true}
              className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(20,184,166,0.6)] animate-float"
            />
          </motion.div>


        </div>
      </div>

    </section>
  )
}

export default Home