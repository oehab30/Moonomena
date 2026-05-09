import Link from 'next/link'

function Button() {
  return (
    <div>
      {/* CTA Button */}
      <Link
        href="/projects"
        className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full
                   bg-white text-black font-semibold
                   transition-all duration-300
                   hover:bg-gray-200 hover:scale-105
                   active:scale-95
                   shadow-[0_0_40px_-10px_rgba(255,255,255,0.35)]"
      >
        Explore Our Work
        <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  )
}

export default Button
