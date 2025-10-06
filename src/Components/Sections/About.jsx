export const About = () => {
 

const frontendSkills = [
  { name: "JavaScript"},
  { name: "TypeScript" },
  { name: "React"},
  { name: "Next.js" },
  { name: "Tailwind CSS"},
  { name: "Framer Motion"},
  { name: "Git"},
];

const backendSkills = [
  { name: "Node.js"},
  { name: "Express.js" },
  { name: "MongoDB", icon: "fas fa-database" },
  { name: "SQL", icon: "fas fa-database" },
    { name: "RESTful APIs" },
];


return (
<section id="about" className="min-h-screen flex items-center justify-center py-20">
<div className="max-w-3xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        {" "}
        About Me
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-6">
I’m a Frontend Developer passionate about crafting responsive and interactive web experiences using React and modern JavaScript.
My focus is on clean code, elegant design, and smooth user experience.
I love learning new technologies and continuously improving my development skills to create high-quality web applications.
</p>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
   <h3 className="text-xl font-bold mb-4">Frontend</h3>
   <div className="flex flex-wrap gap-2">
    {frontendSkills.map((tech,key) => (
        <span 
        key={key}
        className="bg-blue-500/10 text-blue-500 py-1  px-3 rounded-full  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
         {tech.name}
   
        </span>
    ))}
   </div>
    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
   <h3 className="text-xl font-bold mb-4">Backend</h3>
   <div className="flex flex-wrap gap-2">
    {backendSkills.map((tech,key) => (
        <span 
        key={key}
        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full  text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
         {tech.name}
   
        </span>
    ))}
   </div>
    </div>
</div>
</div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    <div className="p-6 rounded-xl  border-white/10 border hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-bold mb-4">🎓Education</h3> 
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
            <strong>Bachelor of Science in Computer Science</strong> - Daffodil institute of it (2016-2021)
        </li>
        <li>
            Relavant Coursework: Data Structures, Algorithms, Web Development, Database Management, Frontend Frameworks...
        </li>

      </ul>

    </div>
      <div className="p-6 rounded-xl  border-white/10 border hover:-translate-y-1 transition-all">
      <h3 className="text-xl font-bold mb-4">💼Work Experience</h3> 
      <div className="space-y-4 text-gray-300">
        <div>
             <h4 className="font-bold">Frontend Developer (Self-Employed)</h4> <br />
    <p className="text-sm text-gray-400 font-semibold">Jan 2024 – Present</p>
    <br />
    <p>
      Developing modern web applications using React, Next.js, and Tailwind CSS. 
      Focused on writing clean, reusable code and creating responsive UI designs.
    </p>
        </div>

      </div>

    </div>
   

 </div>

</div>
</section>
)
}