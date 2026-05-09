'use client'

export default function About() {
  return (
    <div className=" pt-60 flex min-h-screen flex-col items-center bg-black text-white px-4 py-24">
      
      {/* Hero Section */}
      <div className="max-w-4xl text-center space-y-6 mb-20 animate-fade-in-up">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-white to-purple-400">
          About Moonomena
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          We are a digital agency born from the idea that creativity has no boundaries. 
          Just like the moon influences the tides, we aim to influence the digital landscape through innovation and design.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl mb-24">
        {[
          { label: "Projects", value: "50+" },
          { label: "Clients", value: "30+" },
          { label: "Awards", value: "10" },
          { label: "Years", value: "5" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
            <span className="text-4xl font-bold text-white mb-2">{stat.value}</span>
            <span className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl w-full items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Philosophy</h2>
          <p className="text-gray-400 leading-relaxed">
            At Moonomena, we believe in the power of simplicity and elegance. Our designs are not just visually appealing; they are functional, intuitive, and crafted to tell a story. We don't just build websites; we create experiences.
          </p>
          <p className="text-gray-400 leading-relaxed">
            From concept to execution, we work closely with our clients to understand their vision and bringing it to life with precision and passion.
          </p>
        </div>
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-blue-900/20 to-purple-900/20">
           {/* Placeholder for an image */}
           <div className="absolute inset-0 flex items-center justify-center text-white/20 font-bold text-2xl">
             [Creative Space Image]
           </div>
        </div>
      </div>

    </div>
  )
}