'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function NavLink({ href, children, isActive }: { href: string; children: React.ReactNode; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
      <span
        className={`absolute left-0 -bottom-1 w-full h-px bg-linear-to-r from-white via-white to-white transform origin-center transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
  ];


  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center h-16">
          
          {/* Mobile Toggle (Left) */}
          <div className="md:hidden flex justify-start">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="group relative z-50 flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`} />
              <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ease-out my-1 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1'}`} />
            </button>
          </div>

          {/* Left Links (Desktop) */}
          <div className="hidden md:flex justify-start items-center space-x-8 pl-4">
            {leftLinks.map((link) => (
              <NavLink key={link.name} href={link.href} isActive={pathname === link.href}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex justify-center md:justify-center col-start-2 ">
            <Link href="/" className="relative group block">
                <div className={`relative transition-all duration-500 ease-in-out ${scrolled ? 'w-25 h-25' : 'w-30 h-30'} overflow-visible`}>
                    <Image
                      src="/WHITE.png"
                      alt="Moonomena"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-300"
                    />
                </div>
            </Link>
          </div>

          {/* Right Links (Desktop) */}
          <div className="hidden md:flex justify-end items-center space-x-8 pr-4">
           
             <Link
              href="/contact"
              className="ml-4 px-6 py-2 text-xs font-bold uppercase tracking-widest text-black bg-white rounded-full hover:bg-gray-200 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transform hover:scale-105"
            >
              Let's Talk
            </Link>
          </div>

        </div>
      </div>



      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center space-y-8 transition-all duration-500 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
          {[...leftLinks].map((link) => (
             <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-light tracking-widest transition-all duration-300 hover:scale-110 ${pathname === link.href ? 'text-white' : 'text-white/60 hover:text-white'}`}
              >
                {link.name}
              </Link>
          ))}
           <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-8 px-10 py-4 text-sm font-bold uppercase tracking-widest text-black bg-white rounded-full hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105"
              >
                Let's Talk
            </Link>
      </div>
    </nav>
  );
}
