'use client'

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-24">
      <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-400 mb-8">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {[
          { title: "Web Development", desc: "Custom websites built with modern technologies." },
          { title: "UI/UX Design", desc: "Intuitive and beautiful user interfaces." },
          { title: "Digital Strategy", desc: "Comprehensive strategies to grow your digital presence." }
        ].map((service) => (
          <div key={service.title} className="p-6 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
            <h2 className="text-xl font-bold mb-3">{service.title}</h2>
            <p className="text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
