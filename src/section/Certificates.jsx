import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { SiCoursera } from 'react-icons/si';
import { HiAcademicCap } from 'react-icons/hi2';

const certificates = [
  {
    id: 1,
    title: "Packet Switching Networks and Algorithms",
    organization: "University of Colorado System (Coursera)",
    link: "https://coursera.org/verify/05YLB0P2W4IV",
    icon: <SiCoursera className="text-[#0056D2]" />,
    color: "from-[#0056D2] to-[#00419E]",
    date: "Coursera Verified"
  },
  {
    id: 2,
    title: "Peer-to-Peer Protocols and Local Area Networks",
    organization: "University of Colorado System (Coursera)",
    link: "https://coursera.org/verify/0LHTOD3WP1GP",
    icon: <SiCoursera className="text-[#0056D2]" />,
    color: "from-[#0056D2] to-[#00419E]",
    date: "Coursera Verified"
  },
  {
    id: 3,
    title: "Privacy and Security in Online Social Media",
    organization: "NPTEL (IIT Hyderabad / SWAYAM)",
    link: "#",
    id_verified: "NPTEL25CS117S1458701986",
    icon: <HiAcademicCap className="text-[#F97316]" />,
    color: "from-[#F97316] to-[#C2410C]",
    date: "NPTEL Verified"
  },
  {
    id: 4,
    title: "FLAMES '25 Summer Training Program",
    subtitle: "Master DSA with Java/C++",
    organization: "W3Grads / The Angaar Batch",
    link: "#",
    icon: <FaAward className="text-[#EAB308]" />,
    color: "from-[#EAB308] to-[#A16207]",
    date: "Summer 2025"
  }
];

const Certificates = () => {
  const [selectedId, setSelectedId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="certificates" className="relative py-20 px-6 overflow-hidden bg-black text-white">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
              }}
              className="relative group perspective-1000"
            >
              <div className="h-full p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                {/* Gradient bar on top */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${cert.color}`} />
                
                <div>
                  <div className="text-4xl mb-6 bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2 min-h-[3.5rem]">
                    {cert.title}
                  </h3>
                  {cert.subtitle && (
                    <p className="text-sm text-blue-400 mb-2 font-medium">{cert.subtitle}</p>
                  )}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed italic">
                    {cert.organization}
                  </p>
                  {cert.id_verified && (
                    <p className="text-[10px] font-mono text-gray-500 mt-2 truncate group-hover:text-gray-300 transition-colors">
                      ID: {cert.id_verified}
                    </p>
                  )}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    {cert.date}
                  </span>
                  {cert.link !== "#" && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors group-hover:text-blue-400"
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
