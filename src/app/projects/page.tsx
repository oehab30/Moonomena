'use client'

import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      title: "Nebula Dashboard",
      category: "Web App",
      desc: "A futuristic analytics dashboard for tracking interstellar data.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Lunar Commerce",
      category: "E-Commerce",
      desc: "A premium shopping experience designed for luxury space travel gear.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Orbit Portfolio",
      category: "Portfolio",
      desc: "A minimal, gravity-defying portfolio for a creative director.",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Orbit Portfolio",
      category: "Portfolio",
      desc: "A minimal, gravity-defying portfolio for a creative director.",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Orbjjit Portfolio",
      category: "Portfolio",
      desc: "A minimal, gravity-defying portfolio for a creative director.",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: " kk",
      category: "Portfolio",
      desc: "A minimal, gravity-defying portfolio for a creative director.",
      color: "from-amber-500 to-orange-500"
    },
     {
      title: "Starlight API",
      category: "Backend",
      desc: "High-performance API handling millions of requests per second.",
      color: "from-emerald-500 to-teal-500"
    }
  ]

  return (
    <div className=" pt-60 flex min-h-screen flex-col items-center bg-black text-white px-4 py-24">
      
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Selected Works</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A collection of our most recent and defining projects. Each one is a journey into the unknown.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project) => (
          <Link href="#" key={project.title} className="group relative block h-[400px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all hover:scale-[1.02] hover:border-white/30">
            {/* Background Gradient */}
            <div className={`absolute inset-0 opacity-20 bg-linear-to-br ${project.color} group-hover:opacity-30 transition-opacity`} />
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full bg-linear-to-t from-black via-black/80 to-transparent">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60 mb-2 block">
                {project.category}
              </span>
              <h2 className="text-3xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-400 text-sm max-w-md">
                {project.desc}
              </p>
            </div>

            {/* Hover Icon */}
            <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
               <span className="text-xl">&nearr;</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}