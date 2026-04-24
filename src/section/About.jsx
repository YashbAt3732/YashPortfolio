import {motion} from 'framer-motion'
import boy from '../assets/boy.jpg'
import ParticlesBackground from '../components/ParticlesBackground'
const About = () => {
  //stats in button type profile
  const stats=[
    {label: "Focus", value:"Web Development"},
    {label: "Skills", value:"Full Stack"},
    {label: "Speciality", value:"Problem Solving"},
  ]
  //properties for three bubbles in background
  const glows=["-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-10 right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] opacity-15 blur-[100px]"
  ]
  return (
    <section id='about' className='w-full min-h-screen flex items-center justify-center relative bg-black text-white overflow-hidden'>
      {/* Moving star background */}
      <ParticlesBackground />
      
      <div className='absolute inset-0 pointer-events-none'>
        {glows.map((c,i)=>(
          <div key={i} style={{ animationDelay: `${i * 0.4}s` }} className={`absolute rounded-full bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2] animate-pulse ${c} `}/>
        ))}
      </div>
      <div className=' z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-10 py-20 flex flex-col gap-12'>
        <motion.div className="flex flex-col md:flex-row items-center md:items-center gap-10 pb-3"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration:0.6}}
          viewport={{once:true, amount:0.4}}
        > 
          <motion.div
            className="relative -mt-6 md:-mt-10 w-44 h-44 md:w-[220px] md:h-[220px] rounded-full overflow-hidden 
            shadow-[0_0_25px_rgba(28,216,210,0.4)] border-2 border-[#1cd8d2]/60 
            bg-gradient-to-br from-[#1cd8d2]/10 to-[#302b63]/10"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <img src={boy} alt="profile" className="w-full h-full object-cover rounded-full contrast-105 brightness-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-full"></div>
          </motion.div>

          <div className='flex-1 flex flex-col justify-center text-center md:text-left '>
            <h2 className='text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent
              bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#1cd8d2] 
            '>
            Yash Rawat
            </h2>
            <p className='mt-2 text-lg sm:text-xl text-white/90 font-semibold'>
              Full Stack Developer, Competitive Programmer
            </p>
            <p className='mt-4 text-gray-300 leading-relaxed text-base sm:text-lg max-w-2xl md:max-w-3xl'>
              I build clean, efficient app applications with a focus on usability and performance. 
              I enjoy solving challenging problems through code and continuously learning new technologies to improve my craft.
            </p>
            <div className='mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl'>
              {stats.map((item, i)=>(
                <motion.div key={i} className=' relative rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center'
                  initial={{opacity:0, y:10}}
                  whileInView={{opacity:1, y:0}}
                  transition={{delay:0.05*i, duration:0.4}}
                  viewport={{once:true, amount:0.3}}
                >
                  <div className='text-sm text-gray-400'>{item.label}</div>
                  <div className='text-base font-semibold text-gray-300'>{item.value}</div>
                </motion.div>
              ))}
            </div>
            <div className='mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start '>
              <a href="#projects" className='inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-5 py-3 hover:bg-gray-200 transition'>View Projects</a>
              <a href="#contact" className='inline-flex items-center justify-center rounded-lg border bg-white/10 border-white/20 text-white px-5 py-3 hover:bg-white/20 transition'>Get In Touch</a>
            </div>
          </div>
        </motion.div>
        <motion.div className='text-center md:text-left'
          initial={{opacity:0, x:-30}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.6, delay:0.2}}
          viewport={{once:true, amount:0.4}}
        >
          <h3 className='text-2xl sm:text-3xl font-bold text-white mb-3'>About Me</h3>
          <p className='text-gray-300 leading-relaxed text-base sm:text-lg'>
            I’m a Computer Science Engineering student with a strong passion for software development and competitive programming. 
            I focus on building efficient, reliable, and user-centric applications while continuously enhancing my technical and problem-solving skills. 
          </p>
          <p className='mt-4 text-gray-400 text-base sm:text-lg'>
            I enjoy creating user-focused applications and exploring innovative solutions that blend performance with great design.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About