'use client';
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { motion } from 'motion/react'

export default function LogoCloud() {
    return (
        <section className="bg-black overflow-hidden py-16 md:py-24 border-t border-white/5 relative">
            
            {/* Background enhancement */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

            <div className="group relative m-auto max-w-7xl px-4 md:px-6">
                <div className="flex flex-col items-center gap-10 md:gap-14">
                    
                    {/* Header */}
                    <div className="text-center w-full">
                        <motion.h2 
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex items-center justify-center gap-4 text-xs sm:text-sm uppercase tracking-[0.3em] text-neutral-500 font-semibold"
                        >
                            <span className="h-px w-12 sm:w-20 bg-linear-to-r from-transparent to-neutral-700"></span>
                            Our Partners
                            <span className="h-px w-12 sm:w-20 bg-linear-to-l from-transparent to-neutral-700"></span>
                        </motion.h2>
                    </div>

                    {/* Infinite Slider */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative w-full py-6"
                    >
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-6 sm:h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia"
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <img
                                    className="h-5 sm:h-7 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-5 sm:h-7 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-6 sm:h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-6 sm:h-8 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-5 sm:h-7 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel"
                                />
                            </div>
                            <div className="flex items-center justify-center">
                                <img
                                    className="h-8 sm:h-10 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly"
                                />
                            </div>

                            <div className="flex items-center justify-center">
                                <img
                                    className="h-7 sm:h-9 w-auto opacity-40 hover:opacity-100 transition-opacity duration-300 invert brightness-0"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI"
                                />
                            </div>
                        </InfiniteSlider>

                        {/* Edge Masks */}
                        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-32 bg-linear-to-r from-black via-black/80 to-transparent z-10" />
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-32 bg-linear-to-l from-black via-black/80 to-transparent z-10" />

                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-24 md:w-32 z-20"
                            direction="left"
                            blurIntensity={1.5}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-24 md:w-32 z-20"
                            direction="right"
                            blurIntensity={1.5}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
