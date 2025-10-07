import { FaGithub, FaLinkedin,FaPhone, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <div className="px-4 w-150">
        <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Get in Touch
        </h2>
                <div className="flex flex-col-1 justify-center-safe mt-6 space-x-8 text-3xl text-gray-600 hover:text-blue-500">

              <a href="https://shopnilc4@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
          </a>    
          <a href="https://github.com/shopnil9826" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shah-rabbani-chowdhury-764630355/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          
        </div>
        <br />

        <form className="space-y-6">
          <div className="relative">
            <input 
              type="text"
              id="name"
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Name..."
            />
          </div>

          <div className="relative">
            <input 
              type="email"
              id="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Example@gmail.com"
            />
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              placeholder="Type your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}

      </div>
    </section>
  );
};
