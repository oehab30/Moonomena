"use client"
import React from 'react'
import Button from '@/components/ui/button'
import { motion } from 'motion/react'

function Hero() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center bg-black text-white overflow-hidden">
      
      {/* Background Video */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <video 
          src="/hero.mp4" 
          className="w-full h-full object-cover opacity-50" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/20 to-black pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.7)_100%)] pointer-events-none" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 w-full max-w-6xl mx-auto space-y-6 md:space-y-10 mt-16 md:mt-0">
        
        {/* Main Title */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-6xl font-bold tracking-tighter uppercase leading-[1.1] md:leading-[1.05]"
          >
            Where <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-300 to-neutral-500">creativity</span> <br className="hidden md:block" />
            is born beyond <br className="md:hidden" /> the moon
          </motion.h1>
          
        </div>

        {/* Description */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="max-w-[90%] md:max-w-2xl text-sm md:text-lg text-neutral-400 leading-relaxed font-light backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/10 bg-white/5 shadow-2xl"
        >
          We are a strategic creative agency specializing in crafting immersive brand identities, cutting-edge digital experiences, and impactful marketing campaigns.
        </motion.p>

        {/* CTA */}
        <motion.div 
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="pt-4 md:pt-8"
        >
          <Button />
        </motion.div>

      </div>

      {/* Footer / Bottom Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-6 md:bottom-10 left-0 w-full px-6 md:px-12 flex flex-row justify-between items-end text-[10px] md:text-xs text-neutral-500 font-mono tracking-widest z-20 gap-4"
      >
        
        {/* Coordinates */}
        <div className="flex flex-col text-left space-y-1">
          <span className="hover:text-neutral-300 transition-colors cursor-default">41.8804° N</span>
          <span className="hover:text-neutral-300 transition-colors cursor-default">12.5338° E</span>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden md:flex flex-col items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-0">
          <motion.span 
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-[10px] mb-3 text-neutral-400"
          >
            SCROLL EXPLORE
          </motion.span>
          <div className="w-px h-12 bg-linear-to-b from-neutral-500 to-transparent" />
        </div>

        {/* Motto */}
        <div className="text-right max-w-[150px] md:max-w-none">
          <p className="uppercase font-semibold text-white/70 leading-relaxed md:whitespace-nowrap">
            build brands that <span className="text-white">lead</span>. <br className="hidden md:block" />
            <span className="text-neutral-500 block md:inline mt-1 md:mt-0">Not brands that follow.</span>
          </p>
        </div>

      </motion.div>

    </div>  
  )
}

export default Hero