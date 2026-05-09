"use client";

import React from 'react';
import { motion } from 'motion/react';

const stories = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2600&auto=format&fit=crop",
    logo: "https://html.tailus.io/blocks/customers/nike.svg",
    className: "col-span-1 md:col-span-2 lg:col-span-1",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1628359355624-855775b5c9d4?q=80&w=800&auto=format&fit=crop",
    logo: "https://html.tailus.io/blocks/customers/openai.svg",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1529156069898-49953eb1b5e3?q=80&w=800&auto=format&fit=crop",
    logo: "https://html.tailus.io/blocks/customers/github.svg",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    logo: "https://html.tailus.io/blocks/customers/nvidia.svg",
    className: "col-span-1 md:col-span-2 lg:col-span-1",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1506744626753-ce8151045ebb?q=80&w=800&auto=format&fit=crop",
    logo: "https://html.tailus.io/blocks/customers/laravel.svg",
    className: "col-span-1 md:col-span-2 lg:col-span-1",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop",
    logo: "https://html.tailus.io/blocks/customers/column.svg",
    className: "col-span-1 md:col-span-1 lg:col-span-1",
  }
];

function SuccessStories() {
  return (
    <section className="bg-black py-20 md:py-32 px-4 shadow-[inset_0_10px_50px_rgba(0,0,0,0.5)]">
      
      {/* Title Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center space-y-3 mb-16 text-center"
      >
        <h4 className="text-[10px] md:text-sm tracking-[0.2em] md:tracking-[0.3em] font-medium text-neutral-400 uppercase">
          Cool Studio
        </h4>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-white uppercase mt-2">
          Success Stories
        </h2>
      </motion.div>

      {/* Single-Row Flexbox Accordion */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-row w-full h-[220px] md:h-[360px] lg:h-[440px] gap-3 md:gap-4 max-w-[1800px] mx-auto"
      >
        {stories.map((story) => (
          <div 
            key={story.id} 
            className="relative flex-1 hover:flex-[3.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-2xl md:rounded-[2rem] group cursor-pointer bg-neutral-900 will-change-[flex]"
          >
            {/* Base Image - dark by default, reveals on hover */}
            <img 
              src={story.image} 
              alt="Project Showcase" 
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] brightness-[0.3] group-hover:brightness-100"
            />
            
            {/* Bottom gradient so logo pops */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Logo — slides up from below on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 md:pb-12 z-10 pointer-events-none">
              <img 
                src={story.logo} 
                alt="Partner Logo" 
                className="w-14 md:w-24 lg:w-32 h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform" 
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default SuccessStories;