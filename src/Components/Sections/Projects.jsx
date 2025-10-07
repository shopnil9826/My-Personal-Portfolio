export const Projects = () => {
    return( 
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                {" "}
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition -all">
                    <h3 className="text-xl font-bold mb-2">Admin Dashboard</h3>
                    <p className="text-gray-300 mb-4">
                     Developed a responsive admin dashboard using React, Tailwind CSS, recharts, framer motion, and React Router. 
    Features include user management, analytics charts, and dynamic data rendering.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["TypeScript", "React", "Nextjs", "TailwindCSS", "Recharts", "Framer Motion", "React Router"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition -all"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-2">
                            </a>
                    </div>
                </div>
                <div className="p-6 rounded-xl border-white/10 hover:translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition -all">
                    <h3 className="text-xl font-bold mb-2">Ecommerce Frontend</h3>
                    <p className="text-gray-300 mb-4">
                        A responsive ecommerce frontend built with React and Tailwind CSS, featuring product listings, a shopping cart, and user authentication.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "React", "Vite", "Tailwind CSS"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition -all"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-2">
                            </a>
                    </div>
                </div>
          
                <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1  hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition -all">
                    <h3 className="text-xl font-bold mb-2">A restaurant landing page</h3>
                    <p className="text-gray-300 mb-4">
                     Built a responsive restaurant landing page using React ,Tailwind CSS and Framer Motion.
    Features include menu sections, responsive design, animated hero section, and contact form integration.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["JavaScript", "React", "TailwindCSS", "Framer Motion"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition -all"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-2">
                            </a>
                    </div>
                </div>
                     <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition -all">
                    <h3 className="text-xl font-bold mb-2">A Software Services</h3>
                    <p className="text-gray-300 mb-4">
         This project is a completed UI implementation for a MERN Stack Developer task. It features pixel-perfect frontend sections with animations, built using React based on a Figma design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["TypeScript", "React", "TailwindCSS", "Material-UI","Framer Motion"," ReactSpring","CSS","GSAP"].map((tech, key) => (
                            <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition -all"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-2">
                            </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    );
};