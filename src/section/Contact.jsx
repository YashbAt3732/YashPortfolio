import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import ParticlesBackground from "../components/ParticlesBackground";
import img from "../assets/contactus.png";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // Floating + fade animation styles
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
      }
      .animate-float {
        animation: float 4s ease-in-out infinite;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .fade-in {
        animation: fadeIn 0.8s ease forwards;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setDone(true);
          setLoading(false);
          e.target.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#03161f] to-[#042c3a] text-white overflow-hidden px-6 py-16"
    >
      {/* Particle Background */}
      <ParticlesBackground />

      {/* Glowing teal blob (mobile background accent) */}
      <div className="absolute md:hidden left-1/2 top-32 -translate-x-1/2 w-72 h-72 bg-gradient-to-r from-[#14b8a6]/30 to-[#0ea5e9]/30 blur-[120px] rounded-full opacity-60 animate-pulse"></div>

      {/* Contact Container */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#0b0f12]/80 to-[#0b1a1a]/70 backdrop-blur-lg border border-[#14b8a6]/20 rounded-3xl shadow-[0_0_30px_rgba(20,184,166,0.2)] p-8 md:p-12 transition-all duration-500 hover:shadow-[0_0_60px_rgba(20,184,166,0.3)]">

        {/* Left Image (hidden on small screens) */}
        <div className="hidden md:flex justify-center md:w-1/2 w-full mb-10 md:mb-0">
          <img
            src={img}
            alt="Contact illustration"
            className="w-80 md:w-96 animate-float drop-shadow-[0_0_25px_rgba(20,184,166,0.6)]"
          />
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-5 w-full md:w-1/2 fade-in"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] bg-clip-text text-transparent mb-3">
            Let’s Work Together
          </h2>

          <p className="text-gray-300 text-base md:text-sm mb-4 leading-relaxed">
            Have an idea or want to hire me? Drop a message below —  
            I’d love to collaborate and bring your vision to life ✨
          </p>

          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="p-4 rounded-lg bg-[#0b1114]/60 border border-[#14b8a6]/20 focus:outline-none focus:ring-2 focus:ring-[#14b8a6] placeholder-gray-400 transition-all duration-300 hover:bg-[#0d161a]/70 text-sm md:text-base"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="p-4 rounded-lg bg-[#0b1114]/60 border border-[#14b8a6]/20 focus:outline-none focus:ring-2 focus:ring-[#14b8a6] placeholder-gray-400 transition-all duration-300 hover:bg-[#0d161a]/70 text-sm md:text-base"
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              required
              className="p-4 h-36 rounded-lg bg-[#0b1114]/60 border border-[#14b8a6]/20 focus:outline-none focus:ring-2 focus:ring-[#14b8a6] placeholder-gray-400 resize-none transition-all duration-300 hover:bg-[#0d161a]/70 text-sm md:text-base"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#14b8a6] text-white font-semibold py-3 rounded-lg mt-2 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_40px_rgba(20,184,166,0.6)] disabled:opacity-50 text-sm md:text-base"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {done && (
            <p className="text-[#14b8a6] text-sm mt-2 animate-pulse">
               Message sent successfully! I’ll get back to you soon 🚀
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
